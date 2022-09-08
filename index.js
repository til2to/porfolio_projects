const toggleBtn = document.querySelector('#toggleBtn');
const ulElem = document.querySelector('#menuList');

toggleBtn.addEventListener('click', () => {
  ulElem.style.display = 'block';
});

const closeBtn = document.querySelector('#btn_close');
closeBtn.addEventListener('click', () => {
  ulElem.style.display = 'none';
});

const lists = document.querySelectorAll('#menuList li a');

lists.forEach((list) => {
  list.addEventListener('click', () => {
    ulElem.style.display = 'none';
  });
});
