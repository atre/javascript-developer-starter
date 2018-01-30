[< prev][1] | [index][2] > [project-setup][3]

## \> javascript-developer-starter _
### 0.1.3 ⋅ Webpack 4 Beta
>Bundle **ALL THE STUFF!**
>
Now we need an application bundler - the `pain and suffering` of
today's web development
> **"(=ｘェｘ=)"** - *"Webpack?!"*

We will stick up to a common [Webpack][5] but with new 4 version

- Webpack 4 is currently in beta so we need to set `@next` during installation
- Using `--dev` or `-D` will install one or more packages in your devDependencies
```bash
yarn add -D webpack@next webpack-cli
```

Now we need a config file for webpack. Let's create a `config` folder at
the project root and place a `webpack.config.js` inside it

- `$_` returns the last argument of the previously executed

```bash
mkdir config && touch $_/webpack.config.js
```
Let's keep it empty for now

---
> Related links:
>
>[webpack 4 beta — try it today @ medium.com][6]
>
>[Bash Special Parameters Explained][7]
---
[> next][4]

> **"(=①ω①=)"** - *"Don't forget to update your `.gitignore`"*

[1]: https://github.com/Atre/javascript-developer-starter/tree/project-setup/editorconfig
[2]: https://github.com/Atre/javascript-developer-starter
[3]: https://github.com/Atre/javascript-developer-starter/tree/project-setup/index
[4]: https://github.com/Atre/javascript-developer-starter/tree/project-setup/babel

[5]: https://webpack.js.org
[6]: https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2
[7]: https://www.thegeekstuff.com/2010/05/bash-shell-special-parameters