function display(num){
    text_box.value+=num
}                           // can i give a class instad of an (text_box -id)

function clean(){
    text_box.value=''
}

function output(){
  text_box.value=eval(text_box.value)
}

function backspace(){
    text_box.value=(text_box.value).slice(0,-1)
}