
let hex = 'ABCDEF1234567890'
let hexlength = hex.length
function generate(length){
    let result =''
    let hexlength = hex.length
    for ( let i = 0; i < length; i++ ) {
        result = hex.charAt(Math.floor(Math.random() * hexlength)) + result;
    }
    return result
}
console.log('#'+generate(6))
function change(){
    let body = document.querySelector('body').style.backgroundColor =  ('#'+generate(6))
   // document.getElementById('').style.backgroundColor = body
    document.getElementById('color-hex').innerHTML = '#'+generate(6)
   
   
}
//document.getElementById('color-hex').innerHTML = '#'+generate(6)
//document.querySelector('body').style.backgroundColor =  ('#'+generate(6))