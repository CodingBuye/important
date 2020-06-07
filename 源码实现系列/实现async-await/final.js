/**
 * https://mp.weixin.qq.com/s?__biz=MzI5MjUxNjA4Mw==&mid=2247487714&idx=2&sn=672ee2e0defb181b29d9b25bf1505442&chksm=ec01697edb76e068ba7ceb698ee287a2248f4657f691a6be02f89cd325a77260c854d0fa034e&scene=126&sessionid=1591450870&key=29a02b3bb00b790c1bb5d7f0e721204bd556c95d557f3556b9b9639eee0c7901a7d00b75c1a6acfe9cd9bdb0e984ac4a0fed963d3c5c3b8d4f6ec42b5928b62e4f5684f009dc6dc76df59d0e93e99fc6&ascene=1&uin=ODk4OTkxODA3&devicetype=Windows+10+x64&version=62090070&lang=zh_CN&exportkey=A8ZKFEpIgi%2F0mCxqYbT4PBU%3D&pass_ticket=C1NXb5MdVwr8KnSBbBizdn49LgYUtEIMiG%2FbyNRooIMU1eXeDrencn3jn9z3d6Hg
 * @param {*} generatorFunc 
 */

function asyncToGenerator(generatorFunc) {
  return function() {
    const gen = generatorFunc.apply(this, arguments);
    return new Promise((resolve, reject) => {
      function step(key, arg) {
        let generatorResult;
        try {
          generatorResult = gen[key](arg);
        } catch (error) {
          return reject(error);
        }
        const { value, done } = generatorResult;
        if(done) {
          return resolve(value);
        } else {
          return Promise.resolve(value).then(val => step('next', val), err => step('throw', err));
        }
      }
      step("next");
    })
  }
}