import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
   allowedHosts:["5173-dilip5561-cms-project-031n4t13y0.app.codeanywhere.com"]
  },
  plugins: [react()],
})
