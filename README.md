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
    placeholder="placeholder"
    setOption={option => {this.state.val = option}}
    url="http://external-api.io/users/"
    searchKey="GET"
    filterResponse={(res) => res.data.items.map(x => x.fullName )}
  >
</Autocomplete>
```

## Documentation

| Prop          |  Type          |      Description      |  Default value |
|---------------|:--------------:|:---------------------|:---------------|
| placeholder   | String         | input Placeholder     | Placeholder    |
| source          | Array        | static results list   | Empty array [] |
| setOption     | setOption      | method that expect selected options | null | 
| url          | String          | endpoint url   | null |
| method          | String          | HTTP method   | GET |
| searchKey          | String          | to be passed with the api url to be the param name of the search   | null |
| additionalParams  | Object          | additional params to be passed with the request   | null |
| additionalHeaders  | Object          | additional headers to be passed with the request   | null |
| filterResponse  | Function | transform resulted values| null |


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
