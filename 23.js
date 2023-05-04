// what is callback hell?
// callback hell is an anti-pattern with multiple nested callbacks .
//which makes code hard to read and debug when dealing with aynschronous logic. 
async (function (){
    async2(function(){
        async3(function(){
            async4(function(){
                //.......
            })
        })
    })
})