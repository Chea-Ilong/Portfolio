module.exports = {
    output: 'export',
    distDir: 'out',
    assetPrefix: './',
    trailingSlash: true,
    images: { unoptimized: true },
    experimental: {
      // Try this to help with CSS loading issues
      optimizeCss: true, 
    },
  }