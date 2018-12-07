## 整合进服务端渲染项目

合并进：

- PHP 项目
- Expres 项目

## 1. 中国境内操作

设置 node-sass 和 npm 镜像：

```shell
$ npm set sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
$ npm install nrm -g --registry=https://registry.npm.taobao.org
$ nrm use taobao
```

安装项目依赖：

```shell
$ npm install gulp -g --save-dev
$ npm install bootstrap-sass gulp-sass --save-dev
```

## 2. 定制化

### 2.1 Build Only The Components You Need

```shell
cp node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss ./src/scss/_bootstrap-custom.scss
```

```css
/* main.scss */
@import "bootstrap-custom";
@import "bootstrap/theme";
```

### 2.2 Override Variables

```shell
cp node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss ./src/scss/_override-variables.scss
```

Then import it in `main.scss` before importing bootstrap:

```css
/* main.scss */
@import "override-variables";
@import "bootstrap-custom";
@import "bootstrap/theme";
```

## 文档

- [https://github.com/andydkcat/customize-bootstrap-sass](https://github.com/andydkcat/customize-bootstrap-sass)  的项目
- [http://www.codevoila.com/post/32/customize-bootstrap-using-bootstrap-sass-and-gulp](http://www.codevoila.com/post/32/customize-bootstrap-using-bootstrap-sass-and-gulp)

## 本地化问题

```shell

$ npm install gulp-sass --save-dev

> node-sass@4.5.2 install D:\Project\customize-bootstrap-sass\node_modules\gulp-sass\node_modules\node-sass
> node scripts/install.js

Downloading binary from https://github.com/sass/node-sass/releases/download/v4.5.2/win32-x64-46_binding.node

```

这里会卡住，改用 cnpm 安装即可。

```shell
$ cnpm install gulp-sass --save-dev

√ Installed 1 packages
√ Linked 209 latest versions
Downloading binary from https://npm.taobao.org/mirrors/node-sass/v4.5.2/win32-x64-46_binding.node
Download complete
Binary saved to D:\Project\customize-bootstrap-sass\node_modules\.4.5.2@node-sass\vendor\win32-x64-46\binding.node
Caching binary to C:\Users\bing\.npminstall_tarball\node-sass\4.5.2\win32-x64-46_binding.node
Binary found at D:\Project\customize-bootstrap-sass\node_modules\.4.5.2@node-sass\vendor\win32-x64-46\binding.node
Testing binary
Binary is fine
√ Run 1 scripts
√ All packages installed (217 packages installed from npm registry, used 13s, speed 94.7kB/s, json 236(357.77kB), tarball 908.31kB)
Recently updated (since 2017-03-30): 1 packages (detail see file D:\Project\customize-bootstrap-sass\node_modules\.recently_updates.txt)
  Today:
    → gulp-sass@3.1.0 › node-sass@4.5.2 › nan@^2.3.2 (13:50:18)
```