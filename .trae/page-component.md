
# 页面组件封装规则
业务组件，封装在 `pages/pageName/tsx`目录下
组件样式，封装在 `pages/pageName/tsx/componentName/componentName.css`目录下
组件，封装在 `pages/pageName/tsx/componentName/componentName.tsx`目录下
组件导出在 `pages/pageName/tsx/componentName/index.ts`目录下


scss 规则
组件样式必须向dom那样的嵌套结构,如果一个元素有多个类 并且，多个类会改变样式，按如下方式写
例如
```html
<div class="card">
  <div class="title tone-blue">
    标题
  </div>
</div>
```
```scss
.card {
  // ...
 .title {
  // ...
  &.tone-blue {
    // 蓝色
    color: var(--badge-color);
  }
 }
}

```
