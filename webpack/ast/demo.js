// 1.postcss  cssnext-css
// 2. webpack loader -> es6-> ast -> es5
// 3. vue template -> html ast -> vdom
// 4. v8写的 js 代码， 语法分析，词法分析；-> ast -> 执行;
// 5. ast + 设计模式  +发布订阅 （前端比较核心的 两个点）

const acorn = require('acorn');
// const walk = require('acorn-walk');
const source = "var a = 20";
const result = acorn.parse(source);
console.log(result)

