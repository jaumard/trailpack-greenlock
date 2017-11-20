# trailpack-letsencrypt
:package: Letsencrypt Trailpack for Trails

## Configuration
You can configure letsencrypt under the file config/letsencrypt.js (be sure it's added under config/index.js or it will not be loaded)

More information about the configuration possibilities here: https://git.daplie.com/Daplie/node-greenlock

## Usage
Add the trailpack under config/main.js

```js
// config/main.js
module.exports = {
  // ...
  packs: [
    require('trailpack-core'),
    require('trailpack-router'),
    require('trailpack-express'),
    require('trailpack-letsencrypt')
  ]
}
```

Letsencrypt will be used only on production environment, so be sure to set NODE_ENV=production on your server 