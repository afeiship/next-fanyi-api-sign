# next-fanyi-api-sign
> Get baidu translate api sign.

## installation
```bash
npm install -S @feizheng/next-fanyi-api-sign
```

## usage
```js
import '@feizheng/next-fanyi-api-sign';

//DOCS here!
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
