(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{579:function(n,s,e){"use strict";e.r(s);var a=e(6),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("先看代码")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("<div id=\"container\">\n  <div id=\"div\"></div>\n</div>\n<script>\n  const div = document.getElementById('div');\n  const con = document.getElementById('container');\n\n  div.addEventListener('click', function (e) {\n    console.log('child click' + 111111);\n    con.addEventListener('click', function () {\n      console.log('father click' + 222222);\n    })\n  })\n<\/script>\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br")])]),e("p",[n._v("父元素没有绑定事件，子元素绑定了点击事件，并同时给父元素绑定了一个点击事件，可以看一看，点击子元素之后输出的结果是怎么样的。")]),n._v(" "),e("ul",[e("li",[n._v("结果：新绑定的father click也被触发了。")])]),n._v(" "),e("p",[n._v("这里可以得出，事件冒泡的传递事件，是在绑定的handler触发之后的，但是最大多数情况下，我们肯定是不想让父元素新绑定的 click 触发的，不然图啥呢，直接初始化绑定就好了，也不用写在子元素的 handler 中。\n那怎么解决呢，加个setTimeout(0)去给父元素添加事件，确实可以解决了这个问题。但是会让代码的可读性降了一个档次。")]),n._v(" "),e("h2",{attrs:{id:"解决办法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[n._v("#")]),n._v(" 解决办法")]),n._v(" "),e("p",[n._v("事件触发时，有一个 timeStamp， createInvoker记录了元素绑定的时间，在接受到事件的时候，通过 timeStamp 和 attached 的比较，来决定是否运行这个事件绑定的 handler")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("Object.prototype.createEventListener = function (...args) {\n  // handler\n  const func = args[1];\n  \n  const invoker = function (...arguments) {\n    const event = arguments[0];\n    // 比较event触发的时间，和事件绑定的时间，如果event触发时候，事件还未绑定，则不运行\n    if (event.timeStamp >= invoker.attached) {\n      func(...arguments)\n    }\n  }\n  // handler被绑定上的时间\n  invoker.attached = performance.now();\n  \n  // 替换原来的handler\n  args[1] = invoker;\n\n  return this.addEventListener(...args);\n}\n\ndiv.createEventListener('click', function (e) {\n  console.log('child click' + 111111);\n  con.createEventListener('click', function () {\n    console.log('father click' + 222222);\n  })\n})\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br")])]),e("p",[n._v("点击第一次只有 child 打印，第二次点击，child 和 father 一起打印。")])])}),[],!1,null,null,null);s.default=t.exports}}]);