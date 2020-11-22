(function () {
  const fetch = require('node-fetch');

  require('../src');
  require('@jswork/next-param');

  describe('api.basic test', () => {
    test('nx.fanyiApiSign', function (done) {
      const opt1 = { q: 'pear' };
      var res = nx.fanyiApiSign(opt1);
      var url = `http://api.fanyi.baidu.com/api/trans/vip/translate?from=en&to=zh&${nx.param(res)}`;

      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          expect(response).toEqual({
            from: 'en',
            to: 'zh',
            trans_result: [{ src: 'pear', dst: '梨' }]
          });
          done();
        });
    });
  });
})();
