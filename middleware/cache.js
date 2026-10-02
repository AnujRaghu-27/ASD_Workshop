const cache = {}

function cacheMiddleware(req, res, next) {
    const key = req.url

    if (cache[key]) {
        return res.json(cache[key])
    }

    next()
}

module.exports = {
    cache,
    cacheMiddleware
}