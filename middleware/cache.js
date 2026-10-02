const cache = {}

const TTL = 60 * 1000

function cacheMiddleware(req, res, next) {
    const key = req.url
    const value = cache[key]

    if (value) {
        const age = Date.now() - value.time

        if (age < TTL) {
            res.set("X-Cache", "HIT")
            return res.json(value.data)
        }
        delete cache[key]
    }
    res.set("X-Cache", "MISS")
    next()
}

function clearCache() {
    for (const key in cache) {
        delete cache[key]
    }
}

module.exports = {
    cache,
    cacheMiddleware,
    clearCache
}