import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  server:{
    allowedHosts:["5173-dilip5561-cms-project-gepyj2gmxq.app.codeanywhere.com"]
    },
  plugins: [react(),tailwindcss()],
})
