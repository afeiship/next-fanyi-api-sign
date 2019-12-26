/*!
 * name: @feizheng/next-fanyi-api-sign
 * description: Get baidu translate api sign.
 * url: https://github.com/afeiship/next-fanyi-api-sign
 * version: 1.0.0
 * date: 2019-12-26 11:48:43
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var md5 = require('md5');
  var DEFAULT_OPTIONS = {
    q: 'apple',
    salt: Math.random().toString(36),
    appid: '20191225000369703',
    secret: '_m5Ircd6tovvjicHKyMh'
  };

  nx.fanyiApiSign = function(inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var q = options.q;
    var salt = options.salt;
    var secret = options.secret;
    var appid = options.appid;
    var res = appid + q + salt + secret;
    return nx.mix(options, { sign: md5(res) });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fanyiApiSign;
  }
})();

//# sourceMappingURL=next-fanyi-api-sign.js.map
