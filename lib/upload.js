const OSS = require('ali-oss')

const walk = require('./walk')

const upload = async ({ dir = 'dist', ossConfig }) => {
  let files = walk(dir)
  let prefix = `${dir}/`

  let client = new OSS(ossConfig)

  for (let file of files) {
    let key = file.split(prefix)[1]
    console.log('upload', key, file)
    await client.put(key, file)
  }
}

module.exports = upload