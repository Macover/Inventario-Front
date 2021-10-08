const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = app =>{
    app.use("/albums", createProxyMiddleware({target:"https://jsonplaceholder.typicode.com/", changeOrigin:true}))
}