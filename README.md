[< prev][1] | [index][2] > [project-setup][3]

## \> javascript-developer-starter _
### 0.1.4 ⋅ Babel 7 Beta
>Use latest Javascript features now
>
We want to use new **shiny** javascript features. And we can't wait for
these guys making their decisions. We want it **NOW**!

So let's add a **compiler for our assets** - [Babel][5]

Like with webpack - we will use `next` version of the package - [Babel 7 beta][6]

Installing `babel core` and `env preset`
```bash
yarn add -D @babel/core @babel/preset-env
```

And we need a simple `.babelrc` config in our project root

> **"(ㅇㅅㅇ❀)"** - *"Let's keep it simple for now"*
```json
{
    "presets": ["@babel/preset-env"]
}
```
---
[> next][4]

> **"(=｀ェ´=)"** - *"New Javascript features are **MUST-TO-USE**"*

[1]: https://github.com/Atre/javascript-developer-starter/tree/project-setup/webpack
[2]: https://github.com/Atre/javascript-developer-starter
[3]: https://github.com/Atre/javascript-developer-starter/tree/project-setup/index
[4]: https://github.com/Atre/javascript-developer-starter/tree/project-setup/eslint

[5]: https://babeljs.io
[6]: https://babeljs.io/blog/2017/12/27/nearing-the-7.0-release