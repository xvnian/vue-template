## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 工程目录说明
    |—— node_modules                 npm 安装的模块
    |—— .eslintrc.js                 es6 代码规范配置文件
    |—— build                        构建项文件
    |—— config                       配置项文件
    |—— lib                          第三方库
    |—— static                       静态目录(非模块化资源)
    |—— test                         单元测试目录
    |—— dist                         编译文件目录
    |—— src                          项目源文件(模块化资源)
    |   |—— api                      数据接口服务
    |   |—— assets                   资源文件
    |   |   |—— stylus               样式文件
    |   |   |—— fonts                字体文件
    |   |   |—— images               图片文件
    |   |—— components               通用组件
    |   |—— config                   配置文件
    |   |—— i18n                     国际化
    |   |—— router                   路由
    |   |—— store                    全局状态
    |   |—— util                     公共函数
    |   |—— views                    视图组件
    |   |   |—— demo                 demo页面组件
