import hello from './hello';

document.getElementById('app').innerHTML = 'hello webpack';

document.body.appendChild(hello.component());

if (module.hot) {
  // 实现热更新
  module.hot.accept();
}