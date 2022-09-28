---
title: 变量提升
sidebar: auto
date: 2021-12-10 00:00:00
tags: 
  - JavaScript
categories: 
  - JavaScript
permalink: /pages/a8bf9866e9de8/
---

Vite在打包的时候，将模块分成两个区域依赖和源码：

- 依赖：一般是那种在开发中不会改变的JavaScript，比如组件库，或者一些较大的依赖（可能有上百个模块的库），这一部分使用esbuild来进行预构建依赖,esbuild使用的是 Go 进行编写，比 JavaScript 编写的打包器预构建依赖快 10-100倍
- 源码：一般是哪种好修改几率比较大的文件，例如JSX、CSS、vue这些需要转换且时常会被修改编辑的文件。同时，这些文件并不是一股脑全部加载，而是可以按需加载（例如路由懒加载）。Vite会将文件转换后，以es module的方式直接交给浏览器，因为现在的浏览器大多数都直接支持es module，这使性能提高了很多


- webpack 以前的打包模式，项目启动时，需要先将所有文件打包成一个文件bundle.js，然后在html引入，这个多文件 -> bundle.js的过程是非常耗时间的

- Vite是直接把转换后的es module的JavaScript代码，扔给支持es module的浏览器，让浏览器自己去加载依赖，也就是把压力丢给了浏览器，从而达到了项目启动速度快的效果。
