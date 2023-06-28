let btn = document.getElementById('btn')
let disabled__field = document.getElementById('text');
let value__input = document.getElementById('number')


btn.addEventListener('click', ()=>{
    let date = new Date()
    let year = date.getFullYear();
    let rename = value__input.value;
    if(rename){
        disabled__field.value = year - rename
        value__input.value = ""
    }
    
})

