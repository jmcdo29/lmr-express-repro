# Express with light-my-request

Just wondering if there's a way to use [light-my-request]() with Express instead of using supertest. I like light-my-request's API much more, and it seems like a much better option. The main reason for wanting this is working with the NestJS framework, but if I can get an example or confirmation it's possible with Express, I can make it work with Nest.

## The Problem

Right now, it looks like light-my-request is not able to inject the proper response when using `inject` and `express`. The `test.spec.js` file has all the relevant code, but to add it here as well, there's a very simple express application

```js
const app = express();
app.use("/", (req, res, next) => {
  res.send("Hello World!");
});
```

Now if we try to use light-my-request like so

```js
const response = inject(app, { method: "GET", url: "/" });
```

We get a a `statusCode` of 200 (yay), but a `payload`and `body` of `''` (aww).

## Run the reproduction

Simply clone, install using your package manager of choice, and run the `test` script. Everything else should be set up.
