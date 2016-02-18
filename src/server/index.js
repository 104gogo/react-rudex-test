import 'babel-core/register';
import server from './server';

const app = server();
const port = 8000;

app.listen(port, () => console.log(`服务器成功启动！端口：${ port }`));