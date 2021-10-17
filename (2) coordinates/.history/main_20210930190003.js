//각 변수는 바뀔 일 없으니까 const로 할당 
const vertical = document.querySelector('.vertical');
const horizon = document.querySelector('.horizon');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX; 
  const mouseY = event.clientY;
  /*left, top은 성능 안좋음. translate를 사용하자!*/
  vertical.style.transform = `translateX:(${mouseX}px)`; //style지정할 때는 px 붙혀줘야함
  horizon.style.transform = `transtlateY:(${mouseY}px)`;
  // target.style.transform = `translateX:(${mouseX}px)`;
  // target.style.transform = `transtlateY:(${mouseY}px)`;
  // tag.style.transform = `translateX:(${mouseX}px)`;
  // tag.style.transform = `transtlateY:(${mouseY}px)`;

  tag.innerHTML = `${mouseX}px, ${mouseY}px`;
})
