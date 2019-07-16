const fs = require('fs')
const path = require('path')

// 遍历指定的文件夹
// 返回文件夹下所有文件路径字符串构成的数组
const walk = (dir) => {
  let results = []
  let list = fs.readdirSync(dir)

  list.forEach(file => {
    let f = path.join(dir, file)
    var stat = fs.statSync(f)
    if (stat && stat.isDirectory()) results = results.concat(walk(f))
    else results.push(f)
  })
  return results
}

module.exports = walk