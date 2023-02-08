let inp=document.getElementById('inp')
let btn=document.querySelectorAll('button')
let clear=document.getElementById('clear')

function digi(e){
    inp.value=inp.value+e.value 
}
function clean(){
   inp.value=''  
}
function eql(){
    inp.value=eval(inp.value)
}
function del(){
    
}
