//각 변수는 바뀔 일 없으니까 const로 할당 
const vertical = document.querySelector('.vertical');
const horizon = document.querySelector('.horizon');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX; 
  const mouseY = event.clientY;
  
  vertical.style.left = `${mouseX}px`; //style지정할 때는 px 붙혀줘야함
  vertical.style.top = `${mouseY}px`;


  target.style.left = `${mouseX}px`; 
  target.style.top = `${mouseX}px`;

  tag.style.left = `${mouseX}px`;
  tag.style.top = `${mouseX}px`;

  tag.innerHTML = `${mouseX}px, ${mouseY}px`;
})