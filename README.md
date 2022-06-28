# Vue Bank Extract
An SPA application to display a bank extract account. Made with Vue 3 with `vue-cli`

## Prerequisites
- Node.js 

## Frontend technologies
- Vue 3 
- Javascript 
- SASS
- date-fns
- Testing Library 
- Jest

## Backend technology 
- Firebase (Realtime Database) 

## API 
- GET `https://bank-extract-default-rtdb.firebaseio.com/.json`

## Front-end folder architecture 
```code 
├── src
│   ├── api
│   ├── assets
│   │   ├── icons
│   │   ├── images
│   ├── common
│   │   ├── components
│   |   |   |── ComponentName
│   |   |   |   |── __tests__
│   │   ├── constants
│   │   ├── utils
│   │   │   ├── UtilName
│   |   |   │   |── __tests__
│   │   ├── views
│   │   │   ├── PageName
│   |   |   |   |── __tests__
```

- api: mock REST api
- assets: image and icon project
- common: a folder that stores components, constants and utils
    - components: a folder that stores elements, for example: search filter, table, radio button
    - constants: a folder that stores key/value objects
    - utils: a folder that stores util and global functions
- views: a folder that stores all page files

## Project setup

### Install dependencies
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Unit tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
