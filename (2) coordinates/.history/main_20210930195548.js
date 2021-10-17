//각 변수는 바뀔 일 없으니까 const로 할당 
const vertical = document.querySelector('.vertical');
const horizon = document.querySelector('.horizon');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX; 
  const mouseY = event.clientY;
  /*left, top은 성능 안좋음. translate를 사용하자!*/
  vertical.style.transform = `translateX(${mouseX}px)`; //style지정할 때는 px 붙혀줘야함
  horizon.style.transform = `translateY(${mouseY}px)`;
  target.style.transform = `translate(${mouseX - targetHalfWidth}px, ${mouseY - targetHalfHeight}px)`;
  tag.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  tag.innerHTML = `${mouseX}px, ${mouseY}px`;


});
