// what is promise.all
// it is predefine method of Promise
// it used to convert a single Response from a multiple Promise Response.
// it always take a all Response in a foam array
 let demo=async()=>{
    let i=2;j=5;
    let data=new Promise((resolve,reject)=>{
   if(i==2){
    resolve("resolve method call")
   }
   else{
    reject("error occurs");
   }
});
let data2=new Promise((resolve,reject)=>{
    if(j==5){
     resolve("resolve method call")
    }
    else{
     reject("error occurs");
    }
 });
let data3=Promise.all([data,data2])
return data3;
 }
 demo().then(res=>{
    console.log(res)
 })
 .catch((err)=>{
    console.log(err)
 })
