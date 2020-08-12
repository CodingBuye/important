# 前端核心框架源码

## Snabbdom基本使用

### 创建项目

- 打包工具为了方便使用[parcel](https://github.com/parcel-bundler/parcel)
- 创建项目，并安装[parcel](https://github.com/parcel-bundler/parcel)
  
  ```python
  # 创建项目目录
  mk snabbdom-demo
  # 进入项目目录
  cd snabbdom-demo
  # 创建package.json
  yarn init -y
  # 本地安装parcel
  yarn add parcel-bundler
  ```

- 配置package.json的scripts
  
  ```js
  "script": {
      "dev": "parcel index.html --open",
      "build": "parcel build index.html"
  }
  ```

- 创建项目目录结构

  ```js
  |  index.html
  |  package.json
  |--src
        01-basicusage.js
  ```
