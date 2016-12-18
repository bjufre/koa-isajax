# koa-isajax

Express `req.xhr` equivalent for Koa 2 applications.
Middleware for Koa 2 that sets a boolean on the `ctx.state` on whether or not the request is and Ajax request.

This middleware is the equivalent to [Express `req.xhr`.](http://expressjs.com/en/api.html#req.xhr)

## Installation
`$ npm install koa-isajax --save`

## Example

```javascript
import Koa from 'koa';
import isajax from 'koa-isajax';

const app = new Koa();

app.use(isajax());
app.use(async (ctx) => {
    if (ctx.state.xhr) {
        // Ajax request.
    } else  {
        // Not ajax request.
    }
});

app.listen(3000);
```
