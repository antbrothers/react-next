const express = require('express')
const next = require('next')
const compression = require('compression')
const LURCache = require('lru-cache')
//const apiArray = require('./api')

const port = parseInt(process.env.PORT, 10) || 3005

const dev = process.env.NODE_ENV  !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()


// 缓存设置
const ssrCache = new LURCache({
    max: 100,
    maxAge: 1000*60*60 // 1 hour
})


app.prepare().then(() => {
    const server = express()
    if (!dev) {
        server.user(compression()) // gzip压缩
    }

    server.get('/', (req, res) => {
        renderAndCache(req, res, '/')
    })

    server.get('/p/:id', (req, res) => {
        const actualPage = '/post'
        const queryParams = {
            title: req.params.id
        }
        app.render(req, res, actualPage, queryParams)    
    })
    server.get('*', (req, res) => {
        return handle(req, res)
    })
    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://loacalhost: 3000')
    })
}).catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})

function getCacheKey (req) {
    return `${req.url}`
}
function renderAndCache(req, res, pagePath, queryParams) {
    const key = getCacheKey(req)

    // 存在缓存
    if (ssrCache.has(key)) {
        console.log(`CACHE HIT: ${key}`)
        res.send(ssrCache.get(key))
        return
    }

    // 无缓存, 重新渲染
    app.renderToHTML(req, res, pagePath, queryParams)
        .then((html) => {
            // 缓存页面
            console.log(`CACHE MISS: ${key}`)
            ssrCache.set(key, html)
            res.send(html)
        })
        .catch((err) => {
            app.renderError(err, req, res, pagePath, queryParams)
        })
}
