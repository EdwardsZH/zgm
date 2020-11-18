# fastClick原理

[参考链接](https://segmentfault.com/a/1190000019281808)

- 如果只需要对 iOS 9.3 以上的 WKWebView 做适配，那么强烈建议你不去使用。
-  解决方案: 通过以下可以hack的技巧，不添加 fastClick 也能修复延迟的问题 。

-  `禁用缩放` `Chrome on Android (all versions) iOS 9.3
``` html
  <meta name="viewport" content="user-scalable=no" />
```
- 或者
``` js
  html {
    touch-action: manipulation;
  }

  // IE on Windows Phone
  html {
    touch-action: manipulation; // IE11+
    -ms-touch-action: manipulation; // IE10
  }`
```




- `WebView: `

```
iOS WebView 就有点让人头疼了。因为 iOS 8 之前一直都是 UIWebView，
iOS 8 出了个新秀 WKWebView，那么 iOS 9.3 300ms 延迟的 BUG 修复到底干了啥呢？
在客户端 iOS 小姐姐的帮助下，最终的测试结果是 UIWebView 300ms 延迟的问题到现在一直存在，
哪怕是最新的 iOS 版本（这大概这就是为什么老外推荐使用 WKWebView 而非 UIWebView，估计是不想修 BUG 了吧 😂），
但是 WKWebView 在 iOS 9.3 的时候将这个问题给修复了。
```
- **也就是说 iOS 9.3 之前 WKWebView 仍然是存在 300ms ** 延迟的问题的** 