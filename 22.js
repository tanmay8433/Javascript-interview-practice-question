// what is callback funtion 
// callback function take a argument as a function and return output as funtion .
// or callback fun is a fun passed into another function as  an argument. this function is invoked inside the outerfunction 
//to complete an action ;
let demo=()=>{
    console.log("hello")
}
let demo2=(callback)=>{
    let arrr=[1,2,3,6,5,4]
    let updatearrr=arrr.map((value)=>{
        return value*2;
    })
    console.log(updatearrr)
    callback()
}
demo2(demo);