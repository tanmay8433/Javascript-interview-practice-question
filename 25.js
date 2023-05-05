//promise chaining 
// the process of executing a sequence of asynchronous tasks one after another 
//using promises is know as Promise chaining.
new Promise(function (resolve, reject ){
    setTimeout(()=>resolve(1),1000);
})
.then(function(result){
    console.log(result);
    return result *2;
})
.then(function(result){
    console.log(result);
    return result *3;
})
.then(function(result){
    console.log(result);
    return result *4;
})
