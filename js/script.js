const sliderArr = [];
const msSlider = document.querySelector('.ms-slider');
const msThumbs = document.querySelector('.ms-thumbnails');
const msBtnFwd = document.querySelector('.ms-slider-controller.forward');
const msBtnBwd = document.querySelector('.ms-slider-controller.backward');
const msBtnCss = document.querySelector('.ms-wrapper .css-btn');
const basicCss = "./css/style.css";
const bonusCss = "./css/style-bonus.css";
let displayBonus = false;

const cssLink = document.getElementsByTagName('link');

cssLink[3].href = basicCss;

msBtnCss.addEventListener('click', function(){
  if (!displayBonus){
    msBtnCss.innerHTML = 'display basic style';
    cssLink[3].href = bonusCss;
    displayBonus = !displayBonus;
  } else{
    msBtnCss.innerHTML = 'display bonus style';
    cssLink[3].href = basicCss;
    displayBonus = !displayBonus;
  }
});

console.log(cssLink[3], msBtnCss);

let imgCounter = 0;

function parentMultiple(parent, child){
  const imgTag = new Image;
  imgTag.src = child.src;
  parent.append(imgTag);
}

for (let i = 0; i < 5; i++){
  const msImg = document.createElement('img');
  const msImgCont = document.createElement('div');

  msImg.src = `./img/0${i+1}.webp`;
  parentMultiple(msImgCont, msImg);

  msImg.classList.add('d-none');
  msImgCont.classList.add('ms-img-cont');

  sliderArr.push(msImg);

  msSlider.append(sliderArr[i]);
  msThumbs.append(msImgCont);
}

sliderArr[imgCounter].classList.remove('d-none');
const sliderThumb = document.getElementsByClassName('ms-img-cont');
sliderThumb[imgCounter].classList.add('active');


msBtnFwd.addEventListener('click', function(){
  if(imgCounter < (sliderArr.length - 1)){

    sliderArr[imgCounter].classList.add('d-none');
    sliderThumb[imgCounter].classList.remove('active');

    sliderArr[++imgCounter].classList.remove('d-none');
    sliderThumb[imgCounter].classList.add('active');

  }else{

    sliderArr[imgCounter].classList.add('d-none');
    sliderThumb[imgCounter].classList.remove('active');

    imgCounter = 0;

    sliderArr[imgCounter].classList.remove('d-none');
    sliderThumb[imgCounter].classList.add('active');

  }
});

msBtnBwd.addEventListener('click', function(){
  if(imgCounter > 0){

    sliderArr[imgCounter].classList.add('d-none');
    sliderThumb[imgCounter].classList.remove('active');

    sliderArr[--imgCounter].classList.remove('d-none');
    sliderThumb[imgCounter].classList.add('active');

  }else{

    sliderArr[imgCounter].classList.add('d-none');
    sliderThumb[imgCounter].classList.remove('active');

    imgCounter = sliderArr.length - 1;

    sliderArr[imgCounter].classList.remove('d-none');
    sliderThumb[imgCounter].classList.add('active');

  }
});

for (let i = 0; i < sliderThumb.length; i++){
  sliderThumb[i].addEventListener('click', function(){
    imgCounter = i;
    for(let j = 0; j < sliderThumb.length; j++){
      sliderArr[j].classList.add('d-none');
      sliderThumb[j].classList.remove('active');
    }
    sliderArr[i].classList.remove('d-none');
    sliderThumb[i].classList.add('active');    
  });
}
