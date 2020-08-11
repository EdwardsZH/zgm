const esprima = require('esprima');
// const estracerse = require('estracerse');
const code = `
    const view = {
        a:3,
        init: () => {
            view.a = 5;
        }
    }
`
const ast = esprima.parse(code)
console.log(ast);