[< prev][1] | [index][2] > [project-setup][3]

## \> javascript-developer-starter _
### 0.1.5 ⋅ ESlint
>Use style guidelines
>
Linters are your helpers to keep code base clean without any quite actions
from you
>*Code linting is a type of static analysis that is frequently used to find
problematic patterns or code that doesn't adhere to certain style guidelines.*

Let's first install [ESlint][5] and a popular code style guideline -
[airbnb][6]

Also we need manually install some dependencies `eslint-plugin-jsx-a11y`,
`eslint-plugin-react` and `eslint-plugin-import`
```bash
yarn add -D eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import
```
>**"(=^-ω-^=)"** - *"Now we need a `config`, right?"*

Yes, now we need a simple config in a project root directory - `.eslintrc`
```json
{
  "extends": "airbnb"
}
```

---
[> next][4]

> *"My code is shining now WOW"* - **"((≡^⚲͜^≡))"**

[1]: https://github.com/Atre/javascript-developer-starter/tree/project-setup/babel
[2]: https://github.com/Atre/javascript-developer-starter
[3]: https://github.com/Atre/javascript-developer-starter/tree/project-setup/index
[4]: https://github.com/Atre/javascript-developer-starter/tree/project-setup/project-structure

[5]: https://eslint.org
[6]: https://github.com/airbnb/javascript
