const input_value = document.getElementById('name');
const add = (in_value)=>{
    input_value.value += in_value;
}
const clr = ()=>{
    input_value.value = "";
}
const equal_fn = ()=>{
    input_value.value = eval(input_value.value);
}