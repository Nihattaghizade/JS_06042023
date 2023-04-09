"use strict"

const image = document.querySelectorAll('.car');
const borderrange = document.querySelector('#borderbox');
const opacityrange = document.querySelector('#opacity');
const containerr = document.querySelector('.container');

opacityrange.addEventListener('input', () => {
  image.forEach(image =>{
    image.style.opacity = opacityrange.value;
  });
});

borderrange.addEventListener('input', () =>{
  containerr.style.border = `${borderrange.value}px solid black`;
});

