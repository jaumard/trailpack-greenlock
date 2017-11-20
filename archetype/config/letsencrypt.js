'use strict'

/**
 * Letsencrypt Configuration
 * (app.config.letsencrypt)
 *
 * Configure letsencrypt
 *
 * @see {@link https://git.daplie.com/Daplie/node-greenlock}
 */
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
