// what is promise
// it is predefine method of JS. 
//promise object support  three properties or states(resolve,reject,pending)
// pending refer a undefined , resolve(or fullfilled) refer a value, reject refer a error  
// promise are used to handle asynchronous operation .
let demo=async()=>{
let i=20;
let data=new Promise((resolve,reject)=>
{
    if(i==2)
    {
        resolve(i)
    }
    else{
        reject("this is not match error occurs")
    }
})
return data;
}
demo().then((res)=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})

