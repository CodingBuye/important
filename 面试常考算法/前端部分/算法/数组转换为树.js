/**
 * source = [{id: 1,pid: 0,name: 'body'}, 
 *           {id: 2,pid: 1,name: 'title'}, 
 *           {id: 3,pid: 2,name: 'div'}]
  转换为: [{id: 1,pid: 0,name: 'body',
            children: [
              {id: 2,pid: 1,name: 'title',
                children: [
                  {id: 3,pid: 1,name: 'div'}]}}]
 */
const source = [{id: 1,pid: 0,name: 'body'}, 
          {id: 2,pid: 1,name: 'title'}, 
          {id: 3,pid: 2,name: 'div'}];

function listToTree(data) {
  let result = []
  if(!Array.isArray(data)) {
      return result
  }
  data.forEach(item => {
      delete item.children;
  });
  let map = {};
  data.forEach(item => {
      map[item.id] = item;
  });
  
  data.forEach(item => {
      let parent = map[item.pid];
      if(parent) {
          (parent.children || (parent.children = [])).push(item);
      } else {
          result.push(item);
      }
      console.log(result);
  });
  return result;
}

console.log(listToTree(source));
