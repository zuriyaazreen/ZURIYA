function nextStep(step){

document.querySelectorAll(".step").forEach(s=>{
s.classList.remove("active");
});

document.getElementById("step"+step).classList.add("active");

}

function randomItem(arr){
return arr[Math.floor(Math.random()*arr.length)];
}

/* PROMPT LIBRARY */

const styles=[
"luxury fashion editorial photography",
"premium commercial fashion campaign",
"high-end studio product photography",
"modern fashion advertising composition",
"cinematic fashion campaign photography"
];

const poses=[
"model standing confidently presenting the product",
"model walking naturally holding the product",
"model seated in relaxed editorial fashion pose",
"model interacting with the product in lifestyle context",
"model presenting the product toward the camera"
];

const scenes=[
"luxury marble studio with reflective floor",
"minimal white fashion photography studio",
"urban street environment with cinematic lighting",
"high fashion runway environment",
"premium boutique interior environment"
];

const backgrounds=[
"soft gradient fashion backdrop",
"luxury marble wall background",
"modern architectural background",
"minimal studio background",
"urban night background with neon lights"
];

function generatePrompt(){

let product=document.getElementById("product").value;
let brand=document.getElementById("brand").value;
let lighting=document.getElementById("lighting").value;
let backgroundChoice=document.getElementById("background").value;
let camera=document.getElementById("camera").value;

let style=randomItem(styles);
let pose=randomItem(poses);
let scene=randomItem(scenes);
let background=randomItem(backgrounds);

let description=`

A highly detailed professional fashion product photography setup 
featuring ${product}. The creative direction follows ${brand}. 
The scene takes place in ${scene} using ${lighting}. 

The background environment is described as ${background}. 
The composition features ${pose}. The product is styled 
carefully to emphasize craftsmanship, textures, and premium 
materials. Lighting is arranged to highlight reflections, 
surface textures, and shadows that enhance the perception 
of depth and realism.

The camera system simulated for this shot is ${camera} paired 
with an 85mm professional fashion photography lens. Settings 
include f/2.8 aperture, ISO 100, and shutter speed of 1/160 
to achieve extremely sharp results with soft background blur.

The artistic goal is to replicate the visual style used in 
international luxury fashion campaigns and premium ecommerce 
product photography. The final output should appear cinematic, 
ultra realistic, and suitable for global fashion brand 
advertising campaigns, social media promotion, and high-end 
product catalogs.

Additional environment storytelling elements include subtle 
reflections, soft shadow gradients, high dynamic range 
lighting, and precise color grading to achieve a polished 
commercial fashion photography aesthetic.

`;

let prompt={

prompt_type:"fashion_product_photoshoot",

product:product,

brand_style:brand,

scene:{
location:scene,
lighting:lighting,
background:background
},

pose:pose,

camera:{
model:camera,
lens:"85mm fashion lens",
settings:{
aperture:"f2.8",
iso:100,
shutter_speed:"1/160"
}
},

description:description,

quality:"8k ultra realistic fashion photography"

};

document.getElementById("output").textContent=
JSON.stringify(prompt,null,2);

}

function copyPrompt(){

let text=document.getElementById("output").textContent;

navigator.clipboard.writeText(text);

alert("JSON copied!");

}
