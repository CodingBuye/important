const getData = () => new Promise(resolve => {
  setTimeout(() => {
    resolve('data')
  }, 3000);
});

async function test() {
  console.log('cdacd');
  const data = await getData();
  console.log('cdacd1');
  console.log('data：', data);
  console.log('cdacd2');
  const data2 = await getData();
  console.log('data2: ', data2);
  return 'success';
}

test().then(res => console.log(res));


function* testG() {
  const data = yield getData();
  console.log('data: ', data);
  const data2 = yield getData();
  console.log('data2: ', data2);
  return 'success';
}