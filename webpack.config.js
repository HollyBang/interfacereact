var path = require("path");
module.exports = {
  entry: {
    app: ["./source/client.js"]
  },
  output: {
    path: path.resolve(__dirname, "./public/"),
    filename: "index.js"
  },
  devServer: {
  contentBase: path.join(__dirname, "public"),
  compress: true,
  inline: true,
  port: 8080
}
};