function generate(){

let product=document.getElementById("product").value;
let style=document.getElementById("style").value;
let lighting=document.getElementById("lighting").value;

let json={
product:product,
style:style,
lighting:lighting,
quality:"8k ultra realistic fashion photography"
};

document.getElementById("result").textContent=
JSON.stringify(json,null,2);

}
