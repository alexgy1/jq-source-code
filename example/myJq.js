;(function(){
    function Jq(){
        console.log('jq')
    }

    window.JQ = Jq 
})()

// console.log(jq)//访问不到 因为iife
console.log(window.JQ())