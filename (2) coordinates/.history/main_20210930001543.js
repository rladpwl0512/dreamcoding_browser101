//각 변수는 바뀔 일 없으니까 const로 할당 
const vertical = document.querySelector('.vertical');
const horizon = document.querySelector('.horizon');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  target.style.left = mouseX + 'px';
  target.style.top = mouseY + 'px';
  tag.style.left = mouseX + 'px';
  tag.style.top = mouseY + 'px';
  tag.innerHTML = `${e.clientX}px, ${e.clientY}`;
  console.log(e.clientY);
})