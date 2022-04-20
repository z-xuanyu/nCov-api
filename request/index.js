/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-20 14:18:35
 * @LastEditTime: 2022-04-20 16:49:48
 * @Description: Modify here please
 */
const request = require('request-promise')
const fs = require('fs')
const path = require('path')
module.exports = function(){
    // 请求地图数据
    request("https://www.zhouxuanyu.com/map.json").then((res)=>{
        fs.writeFile(path.resolve(__dirname, '../data/map.json'),res,'utf8',(err)=>{
            if(err) throw err;
            console.log("地图数据保存成功")
        })
    }).catch(()=>{
        console.log("地图数据请求失败")
    })
    // 请求地图城市列表数据
    request("http://api.tianapi.com/txapi/ncovcity/index?key=6fbc03872bd9063bc58ed7ba44477a09").then((res)=>{
        fs.writeFile(path.resolve(__dirname, '../data/cities.json'),res,'utf8',(err)=>{
            if(err) throw err;
            console.log("地图城市列表数据保存成功")
        })
    }).catch(()=>{
        console.log("地图城市列表数据请求失败")
    })
    // 获取疫情 整体统计信息
    request("http://49.232.173.220:3001/data/getStatisticsService").then((res)=>{
        fs.writeFile(path.resolve(__dirname, '../data/Statistics.json'),res,'utf8',(err)=>{
            if(err) throw err;
            console.log("疫情整体统计信息数据保存成功")
        })
    }).catch(()=>{
        console.log("疫情整体统计信息数据请求失败")
    })
    // 获取疫情按时间线获取事件
    request("http://49.232.173.220:3001/data/getTimelineService").then((res)=>{
        fs.writeFile(path.resolve(__dirname, '../data/Timeline.json'),res,'utf8',(err)=>{
            if(err) throw err;
            console.log("按时间线获取事件数据保存成功")
        })
    }).catch(()=>{
        console.log("按时间线获取事件数据请求失败")
    })
    // 获取疫情最新辟谣信息
    request("http://49.232.173.220:3001/data/getIndexRumorList").then((res)=>{
        fs.writeFile(path.resolve(__dirname, '../data/RumorList.json'),res,'utf8',(err)=>{
            if(err) throw err;
            console.log("疫情最新辟谣信息数据保存成功")
        })
    }).catch(()=>{
        console.log("疫情最新辟谣信息数据请求失败")
    })
    // 获取疫情百科知识信息
    request("http://49.232.173.220:3001/data/getWikiList").then((res)=>{
        fs.writeFile(path.resolve(__dirname, '../data/WikiList.json'),res,'utf8',(err)=>{
            if(err) throw err;
            console.log("疫情百科知识信息数据保存成功")
        })
    }).catch(()=>{
        console.log("疫情百科知识信息数据请求失败")
    })
    // 获取疫情防护知识信息
    request("http://49.232.173.220:3001/data/getIndexRecommendList").then((res)=>{
        fs.writeFile(path.resolve(__dirname, '../data/fanghu.json'),res,'utf8',(err)=>{
            if(err) throw err;
            console.log("疫情防护知识信息数据保存成功")
        })
    }).catch(()=>{
        console.log("疫情防护知识信息数据请求失败")
    })
}