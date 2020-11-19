(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{363:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"fastclick原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fastclick原理"}},[t._v("#")]),t._v(" fastClick原理")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000019281808",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考链接"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果只需要对 iOS 9.3 以上的 WKWebView 做适配，那么强烈建议你不去使用。")])]),t._v(" "),s("li",[s("p",[t._v("解决方案: 通过以下可以hack的技巧，不添加 fastClick 也能修复延迟的问题 。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("禁用缩放")]),t._v(" `Chrome on Android (all versions) iOS 9.3")])])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user-scalable=no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("ul",[s("li",[t._v("或者")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    touch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" manipulation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IE on Windows Phone")]),t._v("\n  html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    touch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" manipulation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IE11+")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ms"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("touch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" manipulation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IE10")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("`\n")])])]),s("ul",[s("li",[s("code",[t._v("WebView:")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("iOS WebView 就有点让人头疼了。因为 iOS 8 之前一直都是 UIWebView，\niOS 8 出了个新秀 WKWebView，那么 iOS 9.3 300ms 延迟的 BUG 修复到底干了啥呢？\n在客户端 iOS 小姐姐的帮助下，最终的测试结果是 UIWebView 300ms 延迟的问题到现在一直存在，\n哪怕是最新的 iOS 版本（这大概这就是为什么老外推荐使用 WKWebView 而非 UIWebView，估计是不想修 BUG 了吧 😂），\n但是 WKWebView 在 iOS 9.3 的时候将这个问题给修复了。\n")])])]),s("ul",[s("li",[s("strong",[t._v("也就是说 iOS 9.3 之前 WKWebView 仍然是存在 300ms ** 延迟的问题的")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);