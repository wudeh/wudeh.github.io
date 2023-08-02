(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{564:function(s,a,n){"use strict";n.r(a);var e=n(6),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"es6"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es6"}},[s._v("#")]),s._v(" ES6")]),s._v(" "),n("h3",{attrs:{id:"let-const"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#let-const"}},[s._v("#")]),s._v(" let/const")]),s._v(" "),n("p",[s._v("这两个关键字对应一个名词，也就是块级作用域。ES5 之前是没有块级作用域这个概念的，并且定义变量也都是通过 var 来进行声明。var 声明的变量是函数级作用域。")]),s._v(" "),n("blockquote",[n("p",[s._v("函数作用域含义：属于这个函数的全部变量都可以在整个函数的范围内使用及复用（在嵌套的作用域中也可以使用）。")])]),s._v(" "),n("ul",[n("li",[s._v("ES5 函数作用域")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var a = 1;\nvar b = 1;\nfunction foo () {\n    var a = 2;\n    console.log('foo:', a, b); // 2， 1\n}\nconsole.log('windoiw:', a, b); // 1， 1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ul",[n("li",[s._v("ES6 块级作用域 let")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  {\n    let c = 1;\n    let d = 1;\n    console.log('scope:', c, d); // 1, 1\n  }\n  function foo2 () {\n    let c = 2;\n    let d = 2;\n    console.log('foo2:', c, d); // 2, 2\n  }\n  foo2();\n  console.log('window:', c, d); // undefined, undefined\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("ul",[n("li",[s._v("ES6 块级作用域 const")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const aa = 1;\naa = 2; // Uncaught TypeError: Assignment to constant variable.\n\nconst bb = {};\nbb.a = 1;\nconsole.log(bb);\n\nconst cc = [];\ncc.push(1);\nconsole.log(cc);\n\nconst dd = null;\ndd = 1;\nconsole.log(dd); // Uncaught TypeError: Assignment to constant variable.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("blockquote",[n("p",[s._v("const 的用法与 let 基本一致，只不过 const 定义的是常量，不能被修改。而如果 const 定义的是对象或者数组，则还是可以改的，因为二者属于引用类型，存储的是地址指针，也就是说 const 代表的是变量地址不能被修改。const 定义一个 null 值也是不能被更改的，因为还没被分配内存地址。")])]),s._v(" "),n("ul",[n("li",[s._v("实际上，let 和 const 虽然表现出来没有变量提升，实际上是因为 let 和 const 声明的变量在声明之前存在暂时性死区，所以不能在声明之前使用变量。")]),s._v(" "),n("li",[s._v("此外，let 和 cosnt 声明的变量不会被挂载到 window 对象下，而是在一个块级作用域（Script）中")])]),s._v(" "),n("h2",{attrs:{id:"class"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#class"}},[s._v("#")]),s._v(" class")]),s._v(" "),n("p",[s._v("class 用来声明类组件。而 class 就是 ES6 的语法。而 class 其实也可以换种说法是 ES5 继承的一个语法糖，class 特性可以使用 ES5 语法全部实现，只不过 class 更为便捷。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  say() {\n    const sayStr = `Hello, my name is ${this.name}, ${this.age} years old! I'm Person`;\n    console.log(sayStr);\n  }\n}\n\nclass Chinese extends Person {\n  constructor(name, age) {\n    super(name, age);\n    this.country = 'Chinese';\n  }\n\n  say() {\n    const sayStr = `Hello, my name is ${this.name}, ${this.age} years old! I'm ${this.country} Person`;\n    console.log(sayStr);\n  }\n}\n\n/* ES6 class */\nconst person = new Person('luffy', 28);\nconst chinesePerson = new Chinese('周', 33);\n\nperson.say();\nchinesePerson.say();\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("p",[s._v("这里有个注意点就是，如果是子类继承父类，那么子类的 constructor 内部必须有 super()，否则会报错")]),s._v(" "),n("h2",{attrs:{id:"箭头函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数"}},[s._v("#")]),s._v(" 箭头函数")]),s._v(" "),n("p",[s._v("箭头函数，ES6 最有特点的一个特性，让代码看起来简洁了很多，并且也解决了 this 指针的问题。")]),s._v(" "),n("ul",[n("li",[s._v("几种箭头函数的写法")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("() => console.log(1);\nconst a = () => 1;\nconst add = (a, b) => a + b;\nconst resFunc = (a, b) => () => a + b; // 返回一个函数\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ul",[n("li",[s._v("this 指针的指向")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var scope = 'window';\nvar obj = {\nscope: 'obj',\nfuncScope: function() {\n  console.log('当前作用域：', this.scope);\n},\narrayFuncScope: () => console.log('当前作用域：', this.scope)\n}\nvar obj2 = {\nscope: 'obj2'\n}\nobj.funcScope();                 // obj\nobj.arrayFuncScope();            // window\nobj.funcScope.call(obj2);        // obj2\nobj.arrayFuncScope.call(obj2);   // window\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("可以看到，箭头函数与创建调用它的代码所在作用域共享一个 this，上面代码箭头函数在调用的时候在第 2 个和第 4 个都是在 window 环境下，因此 this 就是 window。")]),s._v(" "),n("h2",{attrs:{id:"模板字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模板字符串"}},[s._v("#")]),s._v(" 模板字符串")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  /* 字符串 */\n  var name = 'luffyZh';\n  var es5Str = 'Hello ' + name;\n  const es6Str = `Hello ${name}`;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"解构赋值以及属性简写"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解构赋值以及属性简写"}},[s._v("#")]),s._v(" 解构赋值以及属性简写")]),s._v(" "),n("ul",[n("li",[s._v("解构赋值")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 对象解构\nconst obj = { name: 'luffy', email: 'luffy@163.com' };\nconst { name, email, age } = obj;\nconsole.log(name, email, age); // luffy luffy@163.com undefined\n\n// 数组解构\nlet [a, b, c] = [1, 2, 3];\nconsole.log(a, b, c); // 1, 2, 3\n\nlet [aa, bb, cc] = [1, [2 , 3], [4, 5, 6]];\nconsole.log(aa, bb, cc); // 1 [2, 3] [4, 5, 6]\n\n// 解构应用 —— 一行代码交换 a b 的值\nlet a = 1;\nlet b = 2;\n[a, b] = [b, a];\nconsole.log(a, b); // 2, 1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("ul",[n("li",[s._v("属性简写")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var name = 'luffyzh';\nvar email = 'luffyzh@163.com';\nvar person = {\n    name,\n    email\n};\nconsole.log(person); // {name: 'luffyzh', email: 'luffyzh@163.com'}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"模块化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[s._v("#")]),s._v(" 模块化")]),s._v(" "),n("ul",[n("li",[s._v("导入模块 —— import")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import React from 'react';\nimport { useState } from 'react';\nimport * as Sentry from 'sentry';\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("导出模块 —— export")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const foo = () => 1; // 引入的时候需要带 {}\nexport default foo = () => 2; // 引入的时候不需要带 {}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"promise"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[s._v("#")]),s._v(" Promise")]),s._v(" "),n("p",[s._v("Promise 的重要性就不多说了")]),s._v(" "),n("h2",{attrs:{id:"generator"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#generator"}},[s._v("#")]),s._v(" Generator")]),s._v(" "),n("ul",[n("li",[s._v("ES6 的 Generator 也是一种异步编程解决方案，当初学的时候也是不理解，为啥 ES6 要提供两种异步方案，一个是 Promise 一个是 Generator，不过呢两者确实也都是被应用的十分广泛，各有千秋吧。")]),s._v(" "),n("li",[s._v("Generator 是一个迭代器生成函数，它被调用并不会立即执行，而是返回一个迭代器，然后可以进行异步调用，同时还可以挂起操作，非常的牛 X 但是使用起来也相对复杂。它有两个特性：")]),s._v(" "),n("li",[s._v("function 关键字与函数名之间有一个星号")]),s._v(" "),n("li",[s._v("函数体内部使用 yield 表达式，定义不同的内部状态。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function* testGenerator() {\n    yield 'a';\n    yield 'b';\n    return 'c';\n  }\nvar g = testGenerator();\ng.next(); // {value: \"a\", done: false}\ng.next(); // {value: \"b\", done: false}\ng.next(); // {value: \"c\", done: true}\ng.next(); // {value: undefined, done: true}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("调用 Generator 函数它返回的是一个迭代器对象，然后通过调用此对象的方法.next()来一步一步执行函数内部的状态，每一个 yield 关键字对应着一个状态，而 yield 关键字则是表示在此处暂停执行的意思\n（直到使用 next 调用），每个状态是一个对象有两个属性{value: 此状态的值, done: 迭代器函数是否结束}。")]),s._v(" "),n("h2",{attrs:{id:"set"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[s._v("#")]),s._v(" Set")]),s._v(" "),n("p",[s._v("Set 对象是 ES6 为我们提供的一个新的数据结构，它是以键值对儿的形式存在，类似于 Map，但是区别在于 Set 对象具有自动去重的功能。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var setObj = new Set([1, 1, 2, 3, 4, 4]);\nconsole.log(setObj); // {1, 2, 3, 4}\nsetObj.add(1);     // {1, 2, 3, 4}\nsetObj.add(5);   // {1, 2, 3, 4, 5}\nsetObj.keys(); // {1, 2, 3, 4, 5}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("应用：一行代码实现数组去重")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var arr = [1, 3, 3, 4, 5];\nfunction uniqueArr(arr) {\n    return [...new Set(arr)];\n    // return Array.from(new Set(arr));\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("Set 对象的构造函数可以接收一个数组，然后主动去重。")])]),s._v(" "),n("li",[n("p",[s._v("Set 对象返回的是一个对象，可以通过 Array.from 方法转换成数组。")])])]),s._v(" "),n("h2",{attrs:{id:"symbol"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[s._v("#")]),s._v(" Symbol")]),s._v(" "),n("ul",[n("li",[s._v("Symbol 是 ES6 新增的一种基础数据类型，ES5 的时候，基础类型只有五种，它们是：Number、String、Boolean、null 和 undefined。而 ES6 新增了 Symbol，所以 ES6 的时候，基本数据类型就变成了 6 种。ES10 又增加了 BigInt 基本类型，到了 7 种。")]),s._v(" "),n("li",[s._v("Symbol 是用来创建唯一性变量的，使用 Symbol 可以为程序创建唯一性的 ID，在创建的时候可以为其新增参数描述该变量，即使参数相同两个 Symbol 也是不同的。")]),s._v(" "),n("li",[s._v("值是唯一的，用来解决命名冲突")]),s._v(" "),n("li",[s._v("值不能与其他数据类型进行运算")]),s._v(" "),n("li",[s._v("symbol 定义的对象属性不能使用 for…in 循环遍历，但是可以使用 Reflect.ownKeys 来获取对象所有的键名。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var s1 = Symbol()\nvar s2 = Symbol('another symbol')\nvar s3 = Symbol('another symbol')\n\ns1 === s2 // false\ns2 === s3 // false\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("使用 symbol.for()创建的 symbol，若赋值一样，则 symbol 相等")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('let d=Symbol.for("aa");\n      console.log(d);//symbol(aa)\n\nlet d=Symbol.for("aa");\n      let e=Symbol.for("aa");\n      console.log(d===e);//true\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("作为对象的属性")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('let up=Symbol();\nlet down=Symbol();\n    let game={\n        name:"俄罗斯方块",\n        [up]:function(){\n            console.log("我可以上移");\n\n        },\n        [down]:function(){\n            console.log("我可以下移");\n        },\n    };\n    game[up]();\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("定义私有化方法很有趣，我们都知道，ES5 之前 JS 并没有私有化方法，类的属性和方法都是可以被访问的，以前也就是通过一些约定来实现，比如_下划线定义的是内部的，外部不要访问，但是也不是不能访问。而通过 symbol 和模块化机制，就可以实现私有化方法，因为类内部属性/方法通过 symbol 声明，在外部是无法新建一个一样的，这就是 symbol 唯一性的应用。")]),s._v(" "),n("h2",{attrs:{id:"扩展运算符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#扩展运算符"}},[s._v("#")]),s._v(" 扩展运算符")]),s._v(" "),n("p",[s._v("ES6 扩展运算符可以将数组对象转化成逗号分隔的参数序列，这同样也是非常便捷的 API。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var arr = [1, 2, 3];\nconsole.log(arr);\nconsole.log(...arr);          // 等价于 console.log(1, 2, 3);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("应用 - 简便的实现数组复制")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var arr = [1, 2, 3];\n// ES5\nvar arrCopy = JSON.parse(JSON.stringify(arr));\nconsole.log(arrCopy2 !== arr); // true\n// ES6\nvar arrCopy2 = [...arr];\nconsole.log(arrCopy2 !== arr); // true\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"函数参数默认值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数参数默认值"}},[s._v("#")]),s._v(" 函数参数默认值")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function foo(name = 'luffy') {\n    console.log(name);\n}\nfoo(); // luffy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"其他好用便捷的-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他好用便捷的-api"}},[s._v("#")]),s._v(" 其他好用便捷的 API")]),s._v(" "),n("ul",[n("li",[s._v("Array.prototype.from：用来将类数组（伪数组对象转换成数组的）。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var objLikeArr = {\n   0: 'aaa',\n   1: 'bbb',\n   2: 'ccc',\n   length: 3\n }\n console.log(Array.from(objLikeArr)); // ['aaa', 'bbb', 'ccc']\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("通常我们接触过的伪数组对象有，arguments、NodeList 以及 Set 对象等等，都可以通过此函数进行数组的转化。")]),s._v(" "),n("ul",[n("li",[s._v("Array.prototype.isArray：判断对象是否是数组。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// ES5判断\nObject.prototype.toString.call([1, 2, 3]);  // "[object Array]"\n\n// ES6 判断\nArray.isArray({a: 1, b: 2}); // false\nArray.isArray(Array.from([1, 2, 3])); // true\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ul",[n("li",[s._v("isNaN")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var nan;\nisNaN(nan + 1); true\nnan + 1 === NaN; false\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("NaN 与 NaN 也不相等。")])])}),[],!1,null,null,null);a.default=t.exports}}]);