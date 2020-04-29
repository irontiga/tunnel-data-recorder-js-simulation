# Tunnel data recorder js simulation

You can see a demo live at [http://tunnel-data-recorder-js-simulation.irontiga.io/dist/](http://tunnel-data-recorder-js-simulation.irontiga.io/dist/)

## Development

Bundling will require parcel.
```
yarn global add parcel-bundler
```

Then can be built like so 
```
parcel build public/index.html --public-url .
```

And accessed via an http server (required due to CORS). I recommend `http-server` for development.
```
yarn global add http-server
```
```
http-server -c-1 ./
```
And then the simulation can be accessed via [http://127.0.0.1:8080/dist/](http://127.0.0.1:8080/dist/)