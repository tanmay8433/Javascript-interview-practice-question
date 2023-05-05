// what is the purpose of the race method in promise 
// promise.race method will return the promise instance which is firstly resolved or reject
var promise=new Promise(function (resolve,reject){
    setTimeout(resolve,500,"one");

})
var promise2=new Promise(function (resolve,reject){
    setTimeout(resolve,100,"two")
})
Promise.race([promise,promise2]).then(function(value){
    console.log(value);
})