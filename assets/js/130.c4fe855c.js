(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{652:function(s,a,e){"use strict";e.r(a);var n=e(6),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"响应式系统工具集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应式系统工具集"}},[s._v("#")]),s._v(" 响应式系统工具集")]),s._v(" "),e("h3",{attrs:{id:"ref"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[s._v("#")]),s._v(" ref")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("接收一个参数值并返回一个响应式且可改变的ref对象。")])]),s._v(" "),e("li",[e("p",[s._v("ref对象拥有一个指向内部值的一个属性.value")])]),s._v(" "),e("li",[e("p",[s._v("当ref在模板中使用的时候，他会自动解套，无需在模板内部额外写.value（意思是return出来以后，用小胡子就可以直接使用）")])]),s._v(" "),e("li",[e("p",[s._v("ref不是Proxy实现的。")])])]),s._v(" "),e("h3",{attrs:{id:"unref"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unref"}},[s._v("#")]),s._v(" unref")]),s._v(" "),e("ul",[e("li",[s._v("如果参数是一个ref，则返回它的value值，否则返回参数本身，他是val = isRef(val)? val.value:val的语法糖")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("let a = '你好',\nb = ref(2)\nconsole.log(unref(a,b)) //'你好',2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"toref"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#toref"}},[s._v("#")]),s._v(" toRef")]),s._v(" "),e("ul",[e("li",[s._v("将参数转化为ref对象，例如")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("let a = 0;\nconsole.log(toRef(a)) //ObjectRefImpl {_object: 0, _key: undefined, __v_isRef: true}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"torefs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#torefs"}},[s._v("#")]),s._v(" toRefs")]),s._v(" "),e("ul",[e("li",[s._v("把响应式对象转为普通对象，该普通对象每一个property都是一个ref，和响应式对象property一一对应。")])]),s._v(" "),e("h3",{attrs:{id:"isref"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#isref"}},[s._v("#")]),s._v(" isRef")]),s._v(" "),e("ul",[e("li",[s._v("判断该值是否为ref对象，如果是则返回true，否则是false")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    let a = 0\n    console.log(isRef(a)) // false\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"isproxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#isproxy"}},[s._v("#")]),s._v(" isProxy")]),s._v(" "),e("ul",[e("li",[s._v("检查一个对象是否由reactive或者readonly方法创建的代理")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    let a = 0\n    console.log(isRef(a)) // false\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"isreactive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#isreactive"}},[s._v("#")]),s._v(" isReactive")]),s._v(" "),e("ul",[e("li",[s._v("检查一个对象是否由reactive创建的响应式代理。")]),s._v(" "),e("li",[s._v("如果这个代理是由reactive创建的，但是又被reactive创建的另一个代理包裹了一层，那么同样会返回true")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    let a = 0\n    console.log(isRef(a)) // false\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"readonly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#readonly"}},[s._v("#")]),s._v(" readonly")]),s._v(" "),e("ul",[e("li",[s._v("传入一个对象（响应式或者普通）或ref，返回一个原始对象的只读代理，一个只读的代理是深层的，对象内部任何嵌套的属性也只是只读的。")])]),s._v(" "),e("h3",{attrs:{id:"isreaonly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#isreaonly"}},[s._v("#")]),s._v(" isReaonly")]),s._v(" "),e("ul",[e("li",[s._v("检查一个对象是否由readonly创建的只读代理。。")]),s._v(" "),e("li",[s._v("如果这个代理是由reactive创建的，但是又被reactive创建的另一个代理包裹了一层，那么同样会返回true")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    let a = 0\n    console.log(isRef(a)) // false\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"customref"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customref"}},[s._v("#")]),s._v(" customRef")]),s._v(" "),e("ul",[e("li",[s._v("customRef 用于自定义返回一个ref对象,可以显式地控制依赖追踪和触发响应,接受工厂函数")]),s._v(" "),e("li",[s._v("两个参数分别是用于追踪的 track 与用于触发响应的 trigger，并返回一个一个带有 get 和 set 属性的对象")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    import {customRef} from 'vue';\n    \n    function useDebouncedRef(value) {\n          return customRef((track, trigger) => {\n            return {\n              get() {\n                track()\n                return value\n              },\n              set(newValue) {\n                value2=newValue\n                trigger()\n              },\n            }\n          })\n     }\n    通过customRef返回的ref对象,和正常ref对象一样,通过x.value修改或读取值\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("h3",{attrs:{id:"computed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#computed"}},[s._v("#")]),s._v(" computed")]),s._v(" "),e("ul",[e("li",[s._v("传入一个getter函数，返回一个默认不可手动修改的ref对象。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 第一种写法：不可手动修改值\nsetup() {\n   let a =  computed(()=>{\n       let total = state.supNum + state.oppNum\n       return ((state.supNum/total)*100).toFixed(2) + '%'\n   })\n   return{\n       a\n   }\n}\n\n//第二种写法:可以利用set修改,当a所依赖的值supNum和oppNum改变会触发get回调函数，如果修改a的值会触发set回调函数（a.vlue = a.vlue+1就会触发）\nsetup() {\n   let a =  computed({\n   get:()=>{\n       let total = state.supNum + state.oppNum\n       return ((state.supNum/total)*100).toFixed(2) + '%'\n   }\n   set:(val)=>{\n       console.log(val,222)\n   }   \n   })\n   return{\n       a\n   }\n}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br")])]),e("h3",{attrs:{id:"watcheffect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watcheffect"}},[s._v("#")]),s._v(" watchEffect")]),s._v(" "),e("ul",[e("li",[s._v("立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    setup(props){\n    watchEffect(()=>{\n        console.log(props.title)//第一次渲染的时候就会立即执行一次\n    })\n    let y = ref(0)，\n    z = ref(0);\n    //如果需要监听多个值\n    watchEffect(()=>{\n        console.log(y.value,z.value)//必须写value值，因为咱们监听的是value值，不是y的ref对象\n    })\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h3",{attrs:{id:"watch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[s._v("#")]),s._v(" watch")]),s._v(" "),e("ul",[e("li",[s._v("watch完全等价于2.0的watch")]),s._v(" "),e("li",[s._v("watch需要侦听特定的数据源，并在回调函数中执行。")]),s._v(" "),e("li",[s._v("默认情况是懒执行的，也就是说仅在侦听的源变更时才执行回调。第一次加载页面是不执行的，和watchEffect不一样。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//侦听单个数据\nsetup(){\nwatch(state,()=>{\n    console.log(state.supNum)\n})\n//侦听state下的某个数据\nwatch(()=>state.supNum,()=>{\n    console.log('你好'+state.supNum)\n})\n//侦听ref创建的响应式数据,输出改变后的值和之前的值\nlet x = ref(0)\nsetup(){\n    watch(x,(x,prevX)=>{\n        console.log(x,prevX)\n    })\n}\n//侦听多个数据用数组传参，数组中任意值改变都会触发watch函数\nwatch([x,y],([x,y],[prevx,prevy]=>{\n    console.log(x,y,prevx,prevy)//prevx,prevy改变之前的值\n}))\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("h3",{attrs:{id:"watcheffect-和-watch-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watcheffect-和-watch-的区别"}},[s._v("#")]),s._v(" watchEffect 和 watch 的区别")]),s._v(" "),e("ul",[e("li",[s._v("不需要手动传入依赖值。")]),s._v(" "),e("li",[s._v("每次初始化时会执行一次回调函数来获取依赖值。")]),s._v(" "),e("li",[s._v("无法获取原值，只能获取改变后的值。")])]),s._v(" "),e("h3",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[s._v("#")]),s._v(" setup")]),s._v(" "),e("ul",[e("li",[s._v("setup函数是一个新的组件选项，作为在组件内使用的CompositionAPI的入口点。")]),s._v(" "),e("li",[s._v("初始化props和beforeCreate之间调用")]),s._v(" "),e("li",[s._v("可以接收props和context")]),s._v(" "),e("li",[s._v("this在setup中不可用，因为实在beforeCreate之前执行的，这时候还没有创建this实例。")]),s._v(" "),e("li",[s._v("setup(props),props是基于Proxy代理的响应数据")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("setup(){\n    //return出去的值可以直接在html中使用，{{num}}\n    return{\n    \n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"构建响应式数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建响应式数据"}},[s._v("#")]),s._v(" 构建响应式数据")]),s._v(" "),e("h3",{attrs:{id:"方法一-ref"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法一-ref"}},[s._v("#")]),s._v(" 方法一：ref")]),s._v(" "),e("ul",[e("li",[s._v("一般处理简单值的响应式，原理还是基于defineProperty监听value值")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<template>\n  <div>\n    <h3>{{ title }}</h3>\n    <div>\n      <p>支持人数:{{ supNum }}</p>\n      <p>反对人数:{{ oppNum }}</p>\n      <p>支持率:</p>\n      <button @click="change(0)">支持</button>\n      <button @click="change(1)">反对</button>\n    </div>\n  </div>\n</template>\n\n// 第一种直接使用ref，比较麻烦\nsetup() {\n    let supNum = ref(0),\n    oppNum = ref(0);\n    functiom change(x){\n        x == 0? supNum.value++:oppNum.value++\n    }\n    return{\n        supNum,\n        oppNum,\n        change,\n    }\n}\n\n// 第二种ref，创建一个ref对象\nsetup(){\n    let state = ref({\n        supNum:0\n        oppNum:0\n    })\n    function change(x){\n        x == 0? state.value.supNum++ : state.value.oppNum++\n    }\n    return{\n        state\n    }\n//html在使用的时候，{{state.supNum}}\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br")])]),e("h3",{attrs:{id:"方法二-reactive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法二-reactive"}},[s._v("#")]),s._v(" 方法二：reactive")]),s._v(" "),e("ul",[e("li",[s._v("基于Proxy对数据进行深度的监听，以此构建响应式")]),s._v(" "),e("li",[s._v("接收一个普通对象然后返回该普通对象的响应式代理")]),s._v(" "),e("li",[s._v("响应式转换是深层的，会影对象内部所有嵌套的属性")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("setup() {\n    let state = reactive({\n       supNum: 0,\n       oppNum； 0\n    })\n    function change(x){\n        x == 0? state.supNum++ : state.oppNum++\n        // 比Object.defineProperty好用在于，对与数据或者并未初始化的对象成员，都可以随意的改变值，而且具备响应式的数据。\n    }\n    return{\n        ...toRefs(state),\n        change\n    }\n    //html在使用的时候，{{supNum}}\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("h3",{attrs:{id:"模板ref-获取dom元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模板ref-获取dom元素"}},[s._v("#")]),s._v(" 模板ref：获取dom元素")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<template>\n  <div>\n    <div ref="root">你好</div>\n  </div>\n</template>\nexport default {\nsetup(){\n    let root = ref();\n    onMounted(()={\n        console.log(root.value) //返回值是div元素\n    })\n    return{\n        root\n    }\n}\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("h3",{attrs:{id:"生命周期函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期函数"}},[s._v("#")]),s._v(" 生命周期函数")]),s._v(" "),e("ul",[e("li",[s._v("beforeCreate=>使用setup")]),s._v(" "),e("li",[s._v("create=>使用setup")]),s._v(" "),e("li",[s._v("beforeMount=>onBeforeMount 第一次挂载之前")]),s._v(" "),e("li",[s._v("mounted=>onMounted 第一次挂载之后")]),s._v(" "),e("li",[s._v("beforeUpdate=>onBeforeUpdate 组件更新之前")]),s._v(" "),e("li",[s._v("updated=>onUpdated 组件更新之后")]),s._v(" "),e("li",[s._v("beforeDestroy=>onBeforeUnmount 组件销毁之前")]),s._v(" "),e("li",[s._v("destoryed=>onUnmounted 组件销毁之后")]),s._v(" "),e("li",[s._v("errorCaptured=>onErrorCaptured")])]),s._v(" "),e("h3",{attrs:{id:"markraw-添加不可转为响应式数据的标记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markraw-添加不可转为响应式数据的标记"}},[s._v("#")]),s._v(" markRaw - 添加不可转为响应式数据的标记")]),s._v(" "),e("ul",[e("li",[s._v("显式标记一个对象为“永远不会转为响应式代理”，函数返回这个对象本身。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const foo = markRaw({})\nconsole.log(isReactive(reactive(foo))) // false\n\n// 如果被 markRaw 标记了，即使在响应式对象中作属性，也依然不是响应式的\nconst bar = reactive({ foo })\nconsole.log(isReactive(bar.foo)) // false\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ul",[e("li",[s._v('使用场景：markRaw 和 shallowXXX 一族的 API 允许你可选择性的覆盖 reactive readonly 默认 "深层的" 特性，或者使用无代理的普通对象。设计这种「浅层读取」有很多原因，比如：')]),s._v(" "),e("li",[s._v("一些值的实际上的用法非常简单，并没有必要转为响应式，比如某个复杂的第三方类库的实例，或者 Vue 组件对象；\n当渲染一个元素数量庞大，但是数据是不可变的，跳过 Proxy 的转换可以带来性能提升。")]),s._v(" "),e("li",[s._v("仅影响在根级别：这些 API 被认为是高级的，是因为这种特性仅停留在根级别，所以如果你将一个嵌套的，没有 markRaw 的对象设置为 reactive 对象的属性，在重新访问时，你又会得到一个 Proxy 的版本，在使用中最终会导致标识混淆的严重问题：执行某个操作同时依赖于某个对象的原始版本和代理版本。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const foo = markRaw({\n  nested: {},\n})\n\nconst bar = reactive({\n  // 尽管 `foo` 己经被标记为 raw 了, 但 foo.nested 并没有\n  nested: foo.nested,\n})\n\nconsole.log(foo.nested === bar.nested) // false\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("ul",[e("li",[s._v("标识混淆在一般使用当中应该是非常罕见的，但是要想完全避免这样的问题，必须要对整个响应式系统的工作原理有一个相当清晰的认知。")])]),s._v(" "),e("h3",{attrs:{id:"shallowreactive-浅层响应式数据对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shallowreactive-浅层响应式数据对象"}},[s._v("#")]),s._v(" shallowReactive - 浅层响应式数据对象")]),s._v(" "),e("ul",[e("li",[s._v("只为某个对象的私有（第一层）属性创建浅层的响应式代理，不会对“属性的属性”做深层次、递归地响应式代理，而只是保留原样。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const state = shallowReactive({\n  foo: 1,\n  nested: {\n    bar: 2,\n  },\n})\n\n// 变更 state 的自有属性是响应式的\nstate.foo++\n\n// ...但不会深层代理\nisReactive(state.nested) // false\nstate.nested.bar++ // 非响应式\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h3",{attrs:{id:"shallowreadonly-创建浅层的只读响应式代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shallowreadonly-创建浅层的只读响应式代理"}},[s._v("#")]),s._v(" shallowReadonly - 创建浅层的只读响应式代理")]),s._v(" "),e("ul",[e("li",[s._v("只为某个对象的自有（第一层）属性创建浅层的只读响应式代理，同样也不会做深层次、递归地代理，深层次的属性并不是只读的。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const state = shallowReadonly({\n  foo: 1,\n  nested: {\n    bar: 2,\n  },\n})\n\n// 变更 state 的自有属性会失败\nstate.foo++\n// ...但是嵌套的对象是可以变更的\nisReadonly(state.nested) // false\nstate.nested.bar++ // 嵌套属性依然可修改\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h3",{attrs:{id:"shallowref-创建浅层的-ref"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shallowref-创建浅层的-ref"}},[s._v("#")]),s._v(" shallowRef - 创建浅层的 ref")]),s._v(" "),e("ul",[e("li",[s._v("创建一个 ref ，将会追踪它的 .value 更改操作，但是并不会对变更后的 .value 做响应式代理转换（即变更不会调用 reactive）")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const foo = shallowRef({})\n\nisReactive(foo.value) // false\n\n// 更改对操作会触发响应\nfoo.value = {}\n\n// 但上面新赋的这个对象并不会变为响应式对象\nisReactive(foo.value) // false\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h3",{attrs:{id:"toraw-响应式对象转普通对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#toraw-响应式对象转普通对象"}},[s._v("#")]),s._v(" toRaw - 响应式对象转普通对象")]),s._v(" "),e("ul",[e("li",[s._v("返回由 reactive 或 readonly 方法转换成响应式代理的普通对象。这是一个还原方法，可用于临时读取，访问不会被代理/跟踪，写入时也不会触发更改。不建议一直持有原始对象的引用。请谨慎使用。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const foo = {}\nconst reactiveFoo = reactive(foo)\n\nconsole.log(toRaw(reactiveFoo) === foo) // true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);