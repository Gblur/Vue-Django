module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/static/dist/"
      : "http://localhost:8000",
  // outputDir resolves to server/static/dist
  outputDir: "../static/dist",
  // indexPath is relative to outputDir and resolves to server/templates/base-vue.html
  indexPath: "../../templates/base-vue.html",
};
