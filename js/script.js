const sliderArr = [];
const msSlider = document.querySelector('.ms-slider');
const msBtnFwd = document.querySelector('.ms-slider-controller.forward');
const msBtnBwd = document.querySelector('.ms-slider-controller.backward');

let imgCounter = 0;

for (let i = 0; i < 5; i++){
  const msImg = document.createElement('img');
  msImg.src = `./img/0${i+1}.webp`;

  msImg.classList.add('d-none');

  sliderArr.push(msImg);

  msSlider.append(sliderArr[i]);
}

sliderArr[imgCounter].classList.remove('d-none');

msBtnFwd.addEventListener('click', function(){
  if(imgCounter < (sliderArr.length - 1)){
    sliderArr[imgCounter].classList.add('d-none');
    sliderArr[++imgCounter].classList.remove('d-none');
  }else{
    imgCounter = 0;
    sliderArr[imgCounter].classList.remove('d-none');
  }
});

msBtnBwd.addEventListener('click', function(){
  if(imgCounter > 0){
    sliderArr[imgCounter].classList.add('d-none');
    sliderArr[--imgCounter].classList.remove('d-none');
    console.log(imgCounter);
  }else{
    imgCounter = sliderArr.length - 1;
    sliderArr[0].classList.add('d-none');
    sliderArr[imgCounter].classList.remove('d-none');
    console.log(imgCounter);
  }
});


console.log(sliderArr.length);
