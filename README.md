## usage

编写配置文件，格式：

```
{
  "region": "<oss region>",
  "accessKeyId": "<Your accessKeyId>",
  "accessKeySecret": "<Your accessKeySecret>",
  "bucket": "<Your bucket name>"
}
```

## 调用代码

```
const deploy = require('ben7th-oss-deploy')
const ossConfig = require('./oss.config.json')

const run = async () => {
  await deploy({ dir: 'dist', ossConfig })
}

run().then()
```