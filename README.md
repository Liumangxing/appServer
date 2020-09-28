# appServer
## 基于nodejs搭建一个WEB服务器，使用TypeScript编写

1.首先生成一个依赖包配置文件
```javascript
npm init -y
```
2.引入node的类型定义文件
```javascript
npm i @types/node --save-dev
```
3.建立一个typescript编译配置文件tsconfig.json
```javascript
{
  //编译器配置
  "compilerOptions":{
    "target":"ES5",//编译成es5标准
    "module":"commonjs",//当前使用的规范
    "emitDecoratorMetadata":true,//装饰器相关，保留装饰器的一些元数据
    "experimentalDecorators":true,
    "outDir":"build",//编译完成的js文件存放在一个叫build的目录
    "lib":["es6"]//开发时需要使用es6语法
  },
  //编译时排除的文件
  "exclude":[
    "node_modules"
  ]
}
```
## 使用gulp搭建一个实时编译typescript的环境
1.安装gulp编译相关依赖
```javascript
npm install gulp-cli -g
npm install gulp gulp-typescript typescript --save-dev
```
2.建立一个叫gulpfile.js的文件，写入以下代码：
```javascript
const {
    src,
    watch,
    dest
} = require('gulp');

var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

function tsc() {
    return Promise.resolve(src('./server/*.ts').pipe(tsProject()).pipe(dest('./build')));
};

function watchTsc() {
    watch('./server/*.ts', {
        ignoreInitial: false
    }, tsc);
};

exports.default = watchTsc;
```
3.命令行使用gulp命令启动实时译环境
```javascript
gulp
```
4.新建一个叫server的文件夹，写在server文件下所有夹下以.ts结尾的文件都会被自动实时编译。
使用Express创建restful的http服务  