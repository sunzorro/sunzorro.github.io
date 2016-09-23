# React Transform Boilerplate

## Installation

```bash
git clone https://github.com/gaearon/react-transform-boilerplate.git
cd react-transform-boilerplate
npm install
npm start
open http://localhost:3000
```
nvm alias default 6.5.0设置默认版本可切换

Transforms are enabled for files inside `src` (except `index.js`).
flex-shrink:0; 保持所设置的模块高度固定，不被影响 比如nav设置80vh
flex-grow: 1; 所在的模块盒子沾满其余位置，根据内容而定  设置为0则不受影响
overflow-y: scroll;设置为Y轴滚动条
aria-hidden='true'
onlyActiveOnIndex

NavHeader.contextTypes = {
  router:React.PropTypes.object.isRequired
}通过引用根目录下的router直接调用this.context.router.isActive('/',true)打印this.context.router可以
找到isActive方法(localtion)
