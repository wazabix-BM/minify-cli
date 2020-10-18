### minify-cli

[![Discord](https://img.shields.io/discord/519837781866840122?color=%237289DA&label=WaZaBiX%27s%20guild&logo=discord)](https://discord.gg/ES52WDg)
[![npm](https://img.shields.io/npm/v/@wazabix/minify-cli?logo=npm)](https://www.npmjs.com/package/@wazabix/minify-cli)
[![NPM](https://img.shields.io/npm/l/@wazabix/minify-cli?logo=github)](https://github.com/wazabix-BM/minify-cli/blob/main/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/@wazabix/minify-cli?logo=npm)](https://www.npmjs.com/package/@wazabix/minify-cli)


> File minifier

## Install

```batch
$ npm i -g @wazabix/minify-cli
```

# Command line reference

* ***Package version***

```batch
$ minify -v
```
```batch
$ minify --version
```

* ***Help***

```batch
$ minify -h
```
```batch
$ minify --help
```

* ***Minify a file***

```batch
$ minify [ file ] [ output ] [ options ]
```

* [ file ] argument is the file you want to minify
* [ output ] argument is not mandatory, it allows you to choose the name of the output file

* [ options ] mandatory, it allows you to specify which file format you want to minify
    * -js / --javascript
    * -html / --HypertextMarkupLanguage
    * -css / --CascadingStyleSheets

# Exemple

> I want to minify a JS file

```batch
$ minify index.js -js
```

It doesn't matter where you place the "-js" option in the command

**Minified output file** : "index.min.js"

# Other Exemple

> I want to minify a css file

```batch
$ minify -css index.css min.css
```

**Minified output file** : "min.css"
