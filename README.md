# Error Parser

<pre>
ERROR PARSER
</pre>


Error Hanlder is an Error Handling Library for Liquality. It's an effort to understand and produce User-friendly messages for the different errors that arise as a result of calls made to external endpoints and packages. It also features a collection of reusable user-friendly messages so that everything error and error messages are domiciled in one place.

# Install

`npm install @liquality/error-parser`

`yarn add @liquality/error-parser`

## Usage
Any error prone call can take advantage of the Error Parser by making such calls through the Error Parser's wrapper function. Simply pass the following inputs to the wrapper function
1) Call - This is the error-prone call you wish to make
2) ErrorSource - This is an Id for the external endpoint or package or package function involved in the call. The Error parser package has a parser class for each error source. So this information is vital


```typescript
Usage snippet coming soon

```

## Examples

- Examples Coming Soon

## How to run tests

Integration tests are written in [Jest](https://jestjs.io/).

```angular2html
yarn test
```

## Publish to npm

- Coming Soon
