[< prev][1] | [index][2] > [project-settings][1]

## \> javascript-developer-starter _
### 0.2.1 ⋅ ESlint to work wirh Babel
>Simple steps to setup our linter

In this step we need only to download `babel-eslint` plugin for `ESlint`
and set it in a config file
```bash
yarn add -D babel-eslint
```
And then just change content of our `.eslintrc` to
```json
{
  "parser": "babel-eslint",
  "extends": "airbnb"
}
```
So actually we now parsing with `babel` rules and additionally applying `airbnb` settings

---
> Related links:
>
>[ESLint using Babel as the parser.][4]
---
[> next][3]

>**(⁎˃ᆺ˂)** - *"Done! Is it done?"*

[1]: https://github.com/Atre/javascript-developer-starter/tree/project-settings/index
[2]: https://github.com/Atre/javascript-developer-starter
[3]: https://github.com/Atre/javascript-developer-starter/tree/project-settings/set-webpack
[4]: https://github.com/babel/babel-eslint
