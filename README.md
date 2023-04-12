# First Step

npm i

## second

install your vscode "styleLint"
and setting in setting.json

{
"stylelint.validate": ["css", "scss"],
"scss.validate": false,
"css.validate": false,
"editor.codeActionsOnSave": {
"source.fixAll.stylelint": true
},
// Prettier 併用の場合
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"
}
