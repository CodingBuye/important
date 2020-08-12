const promise = new Promise(resolve=> {  
    console.log('1');
    setTimeout(() => {  
        console.log('2')  
    }, 0);  
    resolve();  
    throw new Error('error') }) 
    
promise.then(()=> {  
    console.log('3');
    setTimeout(() => {  
        console.log('4')  }, 0); 
    }, ()=> {  
        console.log('reject') 
    }).catch(()=> {  
        console.log('catch') 
    }) 

console.log('5')