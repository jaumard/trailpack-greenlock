# trailpack-greenlock
:package: Letsencrypt (greenlock) Trailpack for Trails

## Configuration
You can configure letsencrypt under the file config/greenlock.js (be sure it's added under config/index.js or it will not be loaded)

Be sure to have trailpack-express installed and configured.

Here is a very simple example:

```js
module.exports = {
  server: 'staging', // Set to https://acme-v01.api.letsencrypt.org/directory in production
  approveDomains: (opts, certs, cb) => {
    if (certs) {
      // change domain list here
      opts.domains = ['domain.com']
    } else {
      // change default email to accept agreement
      opts.email = 'email@domain.com'
      opts.agreeTos = true
    }
    cb(null, { options: opts, certs: certs })
  }
}
```

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
    require('trailpack-greenlock')
  ]
}
```

Letsencrypt will be used only on production environment, so be sure to set NODE_ENV=production on your server 