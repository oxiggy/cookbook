import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import path from 'node:path'

//if (process.env.NODE_ENV !== 'production') {
//    require('dotenv').config()
//}

export default defineConfig({
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
})

