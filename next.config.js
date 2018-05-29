const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withSourceMaps = require('@zeit/next-source-maps')

console.log(process.env.BUNDLE_ANALYZE)
const isAnalyze = process.env.BUNDLE_ANALYZE === 'both'
if(isAnalyze) {
    module.exports = withBundleAnalyzer({
        analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
        bundleAnalyzerConfig: {
            server: {
                analyzerMode: 'static',
                reportFilename: '../../bundles/server.html'
            },
            browser: {
                analyzerMode: 'static',
                reportFilename: '../bundles/client.html'
            }
        }
    }, withSass(withCSS(withSourceMaps())))
} else {
    module.exports = withSass(withCSS(withSourceMaps()))
}