const Trailpack = require('trailpack')
const _ = require('lodash')
const greenlock = require('greenlock')
const http = require('http')
const https = require('https')

/**
 * Letsencrypt Trailpack
 *
 * @class Letsencrypt
 * @see {@link http://trailsjs.io/doc/trailpack}
 */
module.exports = class Letsencrypt extends Trailpack {
  /**
   * Ensure that config/letsencrypt is valid
   * and express trailpacks is installed
   */
  validate() {
    if (_.includes(_.keys(this.app.config.main.packs), 'express')) {
      return Promise.reject(
        new Error('trailpack-express must be installed!'))
    }
    if (!this.app.config.greenlock) {
      return Promise.reject(
        new Error('config.greenlock is absent, please create the config file'))
    }
    return Promise.resolve()
  }

  configure() {
    const port = this.app.config.web.port
    const host = this.app.config.web.host
    const portHttp = this.app.config.web.portHttp
    const redirectToHttps = this.app.config.web.redirectToHttps || false

    if (this.app.config.env === 'production') {
      this.app.config.web.externalConfig = (trailsApp, expressApp) => {
        const le = greenlock.create(_.cloneDeep(this.app.config.greenlock))
        return new Promise((resolve, reject) => {
          const nativeServer = https.createServer(le.httpsOptions, le.middleware(expressApp))
            .listen(port, host, err => {
              if (err) return reject(err)
              if (redirectToHttps || portHttp) {
                const httpServer = http.createServer(app)
                  .listen(portHttp, host, err => {
                    if (err) return reject(err)
                    resolve([nativeServer, httpServer])
                  })
              }
              else {
                resolve(nativeServer)
              }
            })
        })
      }
    }
  }

  constructor(app, config) {
    super(app, {
      pkg: require('./package')
    })
  }
}