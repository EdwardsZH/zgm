# html


## 减少 dom 的数量，一次性给大量的 dom 怎么优化？

- 1. 减少 dom 数量，减少不必要的 渲染， 按需加载。
- 2. 大量 dom 的优化 
> 1.缓存 dom 对象，
> 2.使用文档片段 document.createDocumentFragment（）去创建文档碎片
> 3.用 innerHtml 代替高频的 appendChild
> 4.虚拟 dom，通过 domdiff 将虚拟 dom 和原 dom 进行对比，最后去修改真实的 dom，竟可能的避免频繁的重排和重绘




