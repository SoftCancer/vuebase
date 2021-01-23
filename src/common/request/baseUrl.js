// 模式配置 baseUrl 通过修改配置文件(.env.development )来控制 开发环境
let baseUrl = "";
// 切换不同的开发环境
let process = 'dev'
switch (process) {
  case 'dev':
    baseUrl = "http://localhost:8081/"  //开发环境url
    break
  case 'serve':
    baseUrl = "http://localhost:8089/"   //生产环境url
    break
}

export default baseUrl;
