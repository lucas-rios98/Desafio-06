import { resolve } from 'path'

export default {
    // config options
    css: {
        devSourcemap: true
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          mario_kart: resolve(__dirname, 'pages/mario_kart/index.html'),
          mortal_kombat: resolve(__dirname, 'pages/mortal_kombat/index.html'),
        }
      }
    }
}