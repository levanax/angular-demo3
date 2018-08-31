# note

> 提醒：新增模块需重启服务!!!

```cmd
ng serve --port 8080 --host 0.0.0.0

// 创建 app 路由
D:\Levana.Xue\privateWorkspace\angular-demo3>ng generate module app-routing --flat --module=app
CREATE src/app/app-routing.module.spec.ts (308 bytes)
CREATE src/app/app-routing.module.ts (194 bytes)
UPDATE src/app/app.module.ts (564 bytes)

// ng generate module product --routing //创建一个模块带路由
D:\Levana.Xue\privateWorkspace\angular-demo3>ng generate module user --routing
CREATE src/app/user/user-routing.module.ts (247 bytes)
CREATE src/app/user/user.module.spec.ts (259 bytes)
CREATE src/app/user/user.module.ts (271 bytes)

// 创建一个login组件 属于 user 模块
D:\Levana.Xue\privateWorkspace\angular-demo3>ng generate component user/user-login --module=user
CREATE src/app/user/user-login/user-login.component.html (29 bytes)
CREATE src/app/user/user-login/user-login.component.spec.ts (650 bytes)
CREATE src/app/user/user-login/user-login.component.ts (284 bytes)
CREATE src/app/user/user-login/user-login.component.css (0 bytes)
UPDATE src/app/user/user.module.ts (361 bytes)

// 安装angular UI组件
$npm install --save @angular/material @angular/cdk @angular/animations

//创建 api 服务, get, post, put,delete
D:\Levana.Xue\privateWorkspace\angular-demo3>ng generate service core/services/api
CREATE src/app/core/services/api.service.spec.ts (356 bytes)
CREATE src/app/core/services/api.service.ts (132 bytes)

// 先创建core/services 目录，再创建user服务层
D:\Levana.Xue\privateWorkspace\angular-demo3>ng generate service core/services/user
CREATE src/app/core/service/user.service.spec.ts (362 bytes)
CREATE src/app/core/service/user.service.ts (133 bytes)


// 创建user 类型model
D:\Levana.Xue\privateWorkspace\angular-demo3>ng generate interface core/models/user --type=model
CREATE src/app/core/models/user.model.ts (26 bytes)

//创建 product 列表管理
D:\Levana.Xue\privateWorkspace\angular-demo3>ng generate component product/product-list --module=product
CREATE src/app/product/product-list/product-list.component.html (31 bytes)
CREATE src/app/product/product-list/product-list.component.spec.ts (664 bytes)
CREATE src/app/product/product-list/product-list.component.ts (292 bytes)
CREATE src/app/product/product-list/product-list.component.css (0 bytes)
UPDATE src/app/product/product.module.ts (381 bytes)

// create share module
D:\Levana.Xue\privateWorkspace\angular-demo3>ng generate module share
CREATE src/app/share/share.module.spec.ts (267 bytes)
CREATE src/app/share/share.module.ts (189 bytes)

//创建 组件交互 服务
D:\Levana.Xue\privateWorkspace\angular-demo3>ng generate service core/services/mission-interaction
CREATE src/app/core/services/mission-interaction.service.spec.ts (447 bytes)
CREATE src/app/core/services/mission-interaction.service.ts (147 bytes)


D:\Levana.Xue\privateWorkspace\angular-demo3>ng generate module store --routing
CREATE src/app/store/store-routing.module.ts (248 bytes)
CREATE src/app/store/store.module.spec.ts (267 bytes)
CREATE src/app/store/store.module.ts (275 bytes)

D:\Levana.Xue\privateWorkspace\angular-demo3>ng generate component store/store-list
CREATE src/app/store/store-list/store-list.component.html (29 bytes)
CREATE src/app/store/store-list/store-list.component.spec.ts (650 bytes)
CREATE src/app/store/store-list/store-list.component.ts (284 bytes)
CREATE src/app/store/store-list/store-list.component.css (0 bytes)
UPDATE src/app/store/store.module.ts (365 bytes)

D:\Levana.Xue\privateWorkspace\angular-demo3>ng generate service core/service/store
CREATE src/app/core/service/store.service.spec.ts (368 bytes)
CREATE src/app/core/service/store.service.ts (134 bytes)

// 添加预加载数据服务
D:\Levana.Xue\privateWorkspace\angular-demo3>ng generate service store/store-edit-step1/store-edit-step1-resolver
CREATE src/app/store/store-edit-step1/store-edit-step1-resolver.service.spec.ts (473 bytes)
CREATE src/app/store/store-edit-step1/store-edit-step1-resolver.service.ts (151 bytes)


D:\Levana.Xue\privateWorkspace\angular-demo3>ng generate component store/store-records
CREATE src/app/store/store-records/store-records.component.html (32 bytes)
CREATE src/app/store/store-records/store-records.component.spec.ts (671 bytes)
CREATE src/app/store/store-records/store-records.component.ts (296 bytes)
CREATE src/app/store/store-records/store-records.component.css (0 bytes)
UPDATE src/app/store/store.module.ts (1537 bytes)
```

## 新增 UI 框架

> https://www.primefaces.org/primeng/#/setup

bug 列表

1. ngMode 不工作？

   > 需 将 FormsModule 导入到相应模块，注意每个模块是相互独立的

2. 问题 2： share 模块 layout 组件 应用于 app.component 根组件，组件内引入的 第三方组件 MenuModule，需在 app.module 引入，方能正常解析运行。

   > exports: 可依旧在 share 模块引入 MenuModule,但须 添加 exports: [MenuModule]

3. 问题 3： 组件交互服务 service ，不可在 module 引入，会导致 订阅不工作

# AngularDemo3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
