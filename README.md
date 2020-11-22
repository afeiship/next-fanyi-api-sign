# next-fanyi-api-sign
> Get baidu translate api sign.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-fanyi-api-sign
```

## usage
```js
const options = { q: 'pear' };
const res = nx.fanyiApiSign(options);
const url = `http://api.fanyi.baidu.com/api/trans/vip/translate?from=en&to=zh&${nx.param(res)}`;

fetch(url)
  .then((response) => response.json())
  .then((response) => {
    expect(response).toEqual({
      from: 'en',
      to: 'zh',
      trans_result: [{ src: 'pear', dst: '梨' }]
    });
  });
```

## descriptions
1. 拼接字符串1
   1. appid=2015063000000001
   2. q=apple
   3. salt=1435660288
   4. 密钥=12345678
   5. 得到字符串1：“2015063000000001apple143566028812345678”
2. 计算签名：（对字符串1做md5加密）
   1. sign=md5(2015063000000001apple143566028812345678)
   2. sign=f89f9594663708c1605f3d736d01d2d4

## resources
- https://api.fanyi.baidu.com/doc/21

## license
Code released under [the MIT license](https://github.com/afeiship/next-fanyi-api-sign/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-fanyi-api-sign
[version-url]: https://npmjs.org/package/@jswork/next-fanyi-api-sign

[license-image]: https://img.shields.io/npm/l/@jswork/next-fanyi-api-sign
[license-url]: https://github.com/afeiship/next-fanyi-api-sign/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-fanyi-api-sign
[size-url]: https://github.com/afeiship/next-fanyi-api-sign/blob/master/dist/next-fanyi-api-sign.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-fanyi-api-sign
[download-url]: https://www.npmjs.com/package/@jswork/next-fanyi-api-sign
