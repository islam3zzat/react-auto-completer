# react-auto-completer

> yet another autocomplete plugin

## Installing
```bash
# using yarn
yarn add react-auto-completer
# using npm
npm install --save react-auto-completer
```
``` javascript
# in App.js for example
// ...
import Autocomplete 'react-auto-completer'
```

## Usage
``` html
<Autocomplete
  placeholder=<placeholder>
  list=<list>
  >
</Autocomplete>
```

## Documentation

| Prop          |  Type          |      Description      |  Default value |
|---------------|:--------------:|:---------------------|:---------------|
| placeholder   | String         | input Placeholder     | Placeholder    |
| list          | Array          | static results list   | Empty array [] |


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build

# run unit tests
npm run test
