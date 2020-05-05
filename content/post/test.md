---
title: "Test"
date: 2020-05-05T22:16:27+08:00
draft: false
---

打开文件comments.jade，加入如下内容

```` javascript
// {主题路径}/layout/partial/comments.jade
if theme.valine
    script(src= url_for('//unpkg.com/valine@latest/dist/Valine.min.js'))
    #vcomments
    script(type='text/javascript').
        new Valine({
            el: '#vcomments',
            appId: '#{config.leancloud.app_id}',
            appKey: '#{config.leancloud.app_key}'
        })
````

其中theme为主题中配置文件，config为根部目录配置文件，可以自己定义变量放在哪里

Valine的用法可以查看[官网](https://valine.js.org/)说明
