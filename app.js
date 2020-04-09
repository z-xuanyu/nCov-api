const express = require("express")
const app = express()
const rq = require('./request/index')
const path = require("path")
const cors = require('cors')
// 数据爬取
rq()
// 监听端口
app.listen('3001',function(){
    console.log("3001端口监听成功")
})
// 解决跨越问题
app.use(cors())
// 静态资源配置
app.use(express.static(path.join(__dirname,"static")))
// 首页路由
app.get('/',function(req,res){
    res.send('hello world !')
})
// map地图
app.get('/map',require('./router/map'))
// 请求地图城市列表数据
app.get('/cities',require('./router/cities'))
// 获取疫情 整体统计信息
app.get('/Statistics',require('./router/Statistics'))
// 获取疫情按时间线获取事件
app.get('/Timeline',require('./router/Timeline'))
// 获取疫情最新辟谣信息
app.get('/RumorList',require('./router/RumorList'))
// 获取疫情百科知识信息
app.get('/WikiList',require('./router/WikiList'))
// 获取疫情防护知识信息
app.get('/fanghu',require('./router/fanghu'))