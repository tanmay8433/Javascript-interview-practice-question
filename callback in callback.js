// what is callback in callback
// you can nest one callback inside in another callback to execute the 
//actions sequence one by one
//example
loadscript("/script1.js",function(script){
console.log("first script is loaded");

    loadscript("/script2.js",function(script){
    console.log("second script is loaded");

        loadscript("/script3.js",function(script){
        console.log("third script is loaded");
       });
    });
});