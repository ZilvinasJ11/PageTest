//**********CONNECT WITH US *****/
function smoothScroll(section1,duration){
    let target = document.querySelector('.form');
    let targetPosition = target.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

function animation(currentTime){
    if(startTime === null) startTime = currentTime;
    let timeElased = currentTime - startTime;
    let run = ease(timeElased, startPosition, distance, duration);
    window.scrollTo(0,run);
    if(timeElased < duration) requestAnimationFrame(animation);


} 
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2)  - 1) + b;
    }


    requestAnimationFrame(animation);
}

let section1 = document.querySelector('.section1');


section1.addEventListener('click', function(){
    smoothScroll('.form', 100);
});

//***********SCROLL******* */


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 60) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


