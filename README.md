[< prev][1] | [index][2] > [project-setup][1]

## \> javascript-developer-starter _
### 0.1.2 ⋅ .editorconfig
>Keeping your **code style** cool
>
>*EditorConfig helps developers define and maintain consistent coding
styles between different editors and IDEs. The EditorConfig project
consists of a file format for defining coding styles and a collection
of text editor plugins that enable editors to read the file format and
adhere to defined styles. EditorConfig files are easily readable and they
work nicely with version control systems.*

So by adding `.editorconfig` to the project root we can keep our codebase
in one code style

- From now on we will use a code style [recommended by airbnb][4]

https://github.com/airbnb/javascript/blob/master/.editorconfig
```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
# editorconfig-tools is unable to ignore longs strings or urls
max_line_length = null
```
>https://gist.github.com/atre/a5492a04393dbbfaab64d233bfa36e09

---
> Related links:
>
>[editorconfig.org][5]
>
>[airbnb/javascript][4]
---
[> next][3]

> **"(=;ェ;=)"** - *"Always use two spaces MEOW"*

[1]: https://github.com/Atre/javascript-developer-starter/tree/project-setup/init-yarn
[2]: https://github.com/Atre/javascript-developer-starter/tree/project-setup/index
[3]: https://github.com/Atre/javascript-developer-starter/tree/project-setup/webpack
[4]: https://github.com/airbnb/javascript
[5]: http://editorconfig.org
