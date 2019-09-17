# 这是我的第一个工程化项目

## 是一个移动端的项目
### 所有数据接口来自http://www.liulongbin.top:3005
### 首页App组件
1.完成header区域使用mintui中的header组件
2.底部tabbar区域用MUI的tabbar
3.中间放置router-view



## 改造tabbar为router-link

## 设置路由高亮

## 点击tab栏中的路由链接展示对应的路由组件

## 制作首页轮播图

##加载首页轮播图数据
1.获取数据，如何获取，使用vue-resource或者axios
2.获取到的数据保存到data上
3.使用v-for 循环渲染每个item项


## 改造九宫格区域的样式 
## 改造HOME里的九宫格变为路由链接

## 制作新闻资讯页面  MUI
## 获取数据

##实现 新闻资讯列表 点击跳转到新闻详情
1.改造为router-link 同时在跳转时提供ID标识符
2.创建新闻详情的组件
3.在路由模块中,将新闻详情的路由地址和组件页面对应起来

## 实现  新闻详情的页面布局和数据渲染

## 单独封装一个comment.vue 评论子组件
1.先创建一个单独的 commet.vue 组件模板
2.在需要使用comment 组件的 页面中,先 导入 comment组件
 +'import comment from './comment.vue'
3.在父组件中,使用components 属性,将刚才导入的comment组件,注册为自己的子组件
4.将注册子组件时候的注册名称，以标签形式在页面中引用即可

## 获取所有的评论数据显示到页面中
getcomments()



## 实现点击加载更多评论的功能
1.为加载更多按钮，绑定点击事件，在事件中请求下一页数据
2.点击加载更多，让pageIndex++，然后重新调用一下获取数据的方法，重新获取最新一页的数据
3.为了防止新数据覆盖老数据情况，我们在点击加载更多的时候，每当获取到新数据应该让老数据调用数组的concat方法拼接上新数组

## 发表评论
1.把文本框做双向数据绑定
2.为发表按钮绑定一个事件
3.校验评论内容是否为空，如果为空，则Toast提示用户评论内容不能为空
4.通过axios把评论内容提交给服务器
5.当发表评论OK后，重新刷新列表，以查看最新的评论
    +如果调用getcomments方法重新刷新列表，可能只能得到最后一页的评论，前几页的评论获取不到
        +换一种思路，当评论成功后，在客户端，手动拼接出一个最新的评论对象，然后调用数组的unshift方法，把最新的评论，追加到data中comments的开头，这样就能完美实现刷新列表的需求

## 改造图片分享按钮

## 绘制图片列表组件页面结构并美化样式
1.制作顶部滑动条
2.制作底部图片列表
## 制作顶部滑动条的坑
1.借助于mui中的tab-top-webview-main.html
2.需要把slider区域中的mui-fullscreen去掉
3.滑动条无法正常触发滑动，通过检查官方文档发现这是一个JS插件，需要被初始化一下 
    +导入mui.js
    +调用官方提供的方式去初始化：
    ...
    mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
    ...
4.我们在初始化滑动条的时候，导入的mui.js，但是控制台报错： mui.js?c0a6:3440 Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
 + 经过合理的推测，可能是mui.js中用到了'caller', 'callee', and 'arguments'这三个东西，但是webpack打包好的bundel.js中，默认启用严格模式的，所以这两者冲突了
 + 解决方案：
 1.把mui中非严格模式的东西禁用
 2.移除严格模式
方法2.1 
1. 安装babel-plugin-transform-remove-strict-mode
npm i babel-plugin-transform-remove-strict-mode -D
2. 在.babelrc文件的plugins节点中配置：
"transform-remove-strict-mode"
方法2.2
 在.babelrc文件中加上：//路径是你引入的mui.js的地址
"ignore": [
    "./src/lib/mui/js/*.js"   // 建了lib文件夹，存放mui相关文件
    ]
5.刚进入图分享页面的时候滑动条无法正常工作经过分析，发现如果要初始化滑动条必须要等DOM元素加载完毕，所以我们把初始化滑动条的代码搬到了mounted生命周期函数中

6.顶部能滑动了结果底部tabbar失效了  解决方法---这时候需要把每个tabbar按钮的样式中的'.mui-tab-item'类重新改一下名字

7.获取所有分类，并渲染分类列表:

### 制作图片列表区域
1.图片列表需要使用懒加载技术，使用mint-ui的lazy-load
2.根据lazy-load的使用文档，尝试使用
3.渲染图片列表数据

### 实现了图片的懒加载和样式美化

### 实现了点击图片跳转到图片详情页面
1.在改造li 成router-link 的时候，需要使用tag属性指定要渲染为哪种元素

## 实现 详情页面的布局和美化，同时获取数据渲染页面


## 实现图片详情中缩略图的功能
1.使用vue-preview缩略图插件
2.获取所有的图片列表，渲染
3.注意：每个图片数据对象中必须有 w和 h属性

## 绘制商品列表页面


## 尝试在手机上去进行项目的预览和测试
1.要保证自己的手机可以正常运行
2.要保证手机和开发项目的电脑处于同一个wifi环境中，也就是说手机可以访问到电脑的IP
3.打开自己的项目中package.json文件，在dev脚本中添加一个--host指令，
吧当前电脑的WIFI IP地址，设置为 --host的指令值
 + 查看wifi地址 cmd 中运行 'ipconfig' ,查看无线网的ip地址