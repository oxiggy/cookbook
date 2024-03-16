const { default: react } = require('@vitejs/plugin-react')
const svgr = require('vite-plugin-svgr')
const path = require('path')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

module.exports = {
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    root: 'src',
    publicDir: 'public',
    envPrefix: 'PUBLIC_',
    manifest: true,
    build: {
        manifest: true,
        outDir: '../build',
    },
    server: {
        open: true,
        port: 3000,
        strictPort: true,
    },
    preview: {
        port: 3000,
    }
}
