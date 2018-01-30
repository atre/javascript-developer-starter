[< prev][1] | [index][2] > [project-settings][3]

## \> javascript-developer-starter _
### 0.2.3 ⋅ Let's try
> Last preparations for a `first run`

First we need a javascript file to run. Let's create one in our `source code`
folder
```bash
touch src/index.js
```
And fill it with some testing data
```javascript
setInterval(() => console.count('hey!'), 1000);
```
Now we need to load `bundled js` in our `index.html`
- by default webpack creating bundle in `dist/main.js`
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>javascript_developer_starter</title>
</head>
<body>
<script async src="dist/main.js"></script>
</body>
</html>
```
And last step is to update **script** section in `package.json`. Add this
after `devDependencies` block

```json
"scripts": {
    "dev": "webpack --mode development --config config -w --progress --color"
  }
```
This should run our development environment by a ``yarn dev`` command

Try it out!
> **(ノω<。)** - *"I can't look!!1"*

Look MOM, all works!

Browser should open automatically on [http://localhost:3000](http://localhost:3000)
with browsersync

Visit [http://localhost:3001][http://localhost:3001] for a browsersync settings

>![Alt Text](https://i.imgur.com/L02tXj8.gif)

>**\__(=；ェ；=)\\(*^ω^*)__** **YEAAAAAAHHHH!!** **(・∀・)**
