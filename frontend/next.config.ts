import { dirname } from 'path'
import { fileURLToPath } from 'url'
import type { NextConfig } from 'next'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: __dirname
}

export default nextConfig
