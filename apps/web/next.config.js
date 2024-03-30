const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@shared/ui"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};
