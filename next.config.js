const isProd = process.env.NODE_ENV === "production"

module.exports = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  images: { unoptimized: true },
  assetPrefix: "/", // Use absolute paths with leading slash
  basePath: "",
}

