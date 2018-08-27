# note

> 提醒：新增模块需重启服务!!!

```cmd
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
```

bug 列表

1. ngMode 不工作？
   > 需 将 FormsModule 导入到相应模块，注意每个模块是相互独立的

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
