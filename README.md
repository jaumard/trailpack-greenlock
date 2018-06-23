# trailpack-greenlock
:package: Letsencrypt (greenlock) Trailpack for Trails

## Configuration
You can configure letsencrypt under the file config/greenlock.js (be sure it's added under config/index.js or it will not be loaded)

Be sure to have trailpack-express installed and configured.

Here is a very simple example:

```js
module.exports = {
  version: 'draft-11',
  server: 'https://acme-v02.api.letsencrypt.org/directory',
  email: 'john.doe@example.com',
  agreeTos: true,
  approvedDomains: ['example.com', 'www.example.com'],
  configDir: '/path/to/project/etc',
  // whether or not to contribute telemetry data to the greenlock project
  telemetry: true
}
```

More information about the configuration possibilities here: https://git.coolaj86.com/coolaj86/greenlock.js

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

Letsencrypt can work only if you use 443 as secure port and 80 as default port so be sure to set them correctly 

## Contributing
We love contributions! Please check out our [Contributor's Guide](https://github.com/trailsjs/trails/blob/master/.github/CONTRIBUTING.md) for more
information on how our projects are organized and how to get started.

## License
[MIT](https://github.com/jaumard/trailpack-greenlock/blob/master/LICENSE)
