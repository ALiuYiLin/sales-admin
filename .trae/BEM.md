## 一、为什么要使用less以及开启less模块化

### 1. less 模块化

- 每个 less 文件都是一个模块，模块之间可以相互导入
- 每个模块的样式只对当前模块生效，不会影响到全局样式
- 可以避免样式冲突，提高代码的可维护性

案例:

```less
// 模块A.less
.text {
  color: red;
}
```

```less
// 模块B.less
.text {
  color: blue;
}
```

假如未开启less模块化，以直接引入的方式使用less

```tsx
import "./module-a.less";
import "./module-b.less";
const ModuleA = () => {
  return (
    <div className="text">
      我是模块A
    </div>
  );
};
const ModuleB = () => {
  return (
    <div className="text">
      我是模块B
    </div>
  );
};
```
编译后，由于module-b.less在module-a.less之后引入，所以module-b.less的样式会覆盖module-a.less的样式
```html
<div class="text">
  我是模块A (蓝色)
</div>
<div class="text">
  我是模块B (蓝色)
</div>
```

开启less模块化

```tsx
import styleA from "./module-a.less";
import styleB from "./module-b.less";
const ModuleA = () => {
  return (
    <div className={styleA["text"]}>
      我是模块A
    </div>
  );
};
const ModuleB = () => {
  return (
    <div className={styleB["text"]}>
      我是模块B
    </div>
  );
};
```

经过webpack编译后，类名会被编译为唯一的类名，避免了样式冲突

```css
.text-123456 {
  color: red;
}
.text-654321 {
  color: blue;
}
```

```html
<div class="text-123456">
  我是模块A
</div>
<div class="text-654321">
  我是模块B
</div>
```

### 二、为什么样式已经隔离了，还需要BEM规范？

先看一个案例，在一个页面中，有多个组件，但每个组件中都要给p标签添加不同的样式，
如果我们现在要修改footer中p标签的样式，我们全局搜索`.text`，结果会冒出一大堆，
很难定位到我们想要修改的footer中的p标签。

```html
<header>
    <p class="text"></p>
</header>
<body>
    <p class="text"></p>
</body>
<footer>
    <p class="text"></p>
</footer>
```

假如使用BEM来规范类名，经过规范化后的类名,比如`footer__text`，可以直接全文搜索到,然后定位到less文件中，省去了很多麻烦。

```html
<header class="header">
    <p class="header__text"></p>
</header>
<body class="body">
    <p class="body__text"></p>
</body>
<footer class="footer">
    <p class="footer__text"></p>
</footer>
```

### 三、为什么还要创建一个类名生成工具？

在实际开发中，我们很难有精力去保证每一个类名都是符合BEM规范的，
所以我们需要一个类名生成工具，来帮助我们生成符合BEM规范的类名。

```ts
const { b, e, m, be, em, bm, bem, is, cx } = useNamespace("header");

b();                      // header
e("text");               // header__text
m("dark");               // header--dark
be("right", "avatar");  // header-right__avatar
em("text", "yellow");   // header__text--yellow
bm("right", "dark");    // header-right--dark
bem("right","avatar","small"); // header-right__avatar--small
is("rtl", true); // is-rtl
cx("class1","class2"); // "class1 class2" 连接类名
cx(b(), is("rtl", true)); // "header is-rtl"
```

### 四、最佳实践

在实际开发中，由于开启了less模块化，样式是相互隔离的，如果我们每一个类都使用BEM规范那就太麻烦了，最佳的做法是只在组件级的最高层使用一次BEM规范,方便我们快速定位到组件的样式,需要时再使用其他工具。

```tsx
import style from "./header.less";
const { cx, ...ns } = useNamespace(style,"header");
const Header = () => {
  return (
    <header className={ns.b()}>
      <p className={cx("text",ns.is("rtl", true))}>
        我是header
      </p>
    </header>
  );
};
```

```html
<header class="sf-header">
    <p class="text is-rtl"></p>
</header>
```

```less
.sf-header {
  padding: 10px;
  .text {
    color: red;
    &.is-rtl {
      direction: rtl;
    }
  }
}
```

