//각 변수는 바뀔 일 없으니까 const로 할당 
const vertical = document.querySelector('.vertical');
const horizon = document.querySelector('.horizon');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX; 
  const mouseY = event.clientY;
  
  vertical.style.left = `${mouseX}px`;
  vertical.style.top = `${mouseY}px`;

 

  tag.innerHTML = `${mouseX}px, ${mouseY}px`;
})