<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-20 14:18:35
 * @LastEditTime: 2022-04-20 17:56:50
 * @Description: Modify here please
-->
# nCov-api
爬取nCov疫情信息api接口（注意：已经取消爬取最新数据，接口数据并非最新。只是为了学习demo使用）

## 运行
1、node环境（如果没有先安装）
2、克隆项目 
```bash
 $ git clone https://github.com/z-xuanyu/nCov-api.git
```
3、安装项目依赖

```bash
 $ yarn 或者 npm install
```
4、运行项目
```bash
 $ yarn dev 或者 npm run dev
```

## 接口说明
|  接口说明   | 请求方式  | URL地址 |
|  ----  | ----  | ----|
| map地图数据  | GET | http://localhost:3001/map
| 地图城市列表数据  | GET | http://localhost:3001/cities
| 疫情整体统计信息  | GET | http://localhost:3001/Statistics
| 取疫情按时间线获取事件  | GET | http://localhost:3001/Timeline
| 取疫情最新辟谣信息  | GET | http://localhost:3001/RumorList
| 疫情百科知识信息  | GET | http://localhost:3001/WikiList
| 疫情防护知识信息  | GET | http://localhost:3001/fanghu

## 接口部署线上
推荐宝塔部署 <a href="https://www.bt.cn/bbs/forum.php?mod=viewthread&tid=88399&highlight=node">查看教程</a>
