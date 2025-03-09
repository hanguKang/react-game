import { defineConfig } from 'vite'
<<<<<<< HEAD
=======
//import path from "path";
>>>>>>> main
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react(), tailwindcss()],
=======
  // base: "/public/*",
  // resolve:{
  //   alias:{
  //     "/json/":path.resolve()
  //   }
  // },
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://my-json-server.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
>>>>>>> main
})
