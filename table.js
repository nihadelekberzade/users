const userList = document.querySelector('.user-list');
const item = ` 
<li class="user-item">
<div class="table-row">
  <div class="table-col">samir</div>
  <div class="table-col">username99</div>
  <div class="table-col">New</div>
  <div class="table-col">Internal</div>
  <div class="table-col">Enabled</div>
  <div class="table-col">Enabled</div>
  <div class="table-col">Enabled</div>
  <div class="table-col">Enabled</div>
  <div class="table-col">Enabled</div>
  <div class="table-col settings-menu__wrapper">
    settings
    <div class="settings-menu">
      <div class="settings-menu__item settings-menu__item--view">View</div>
      <div class="settings-menu__item settings-menu__item--edit">Edit</div>
    </div>
  </div>
</div>
</li>
`;
for (let i = 0; i < 9; i++) {
  userList.innerHTML += item;
}
const addEventlisteners = () => {
  document.querySelectorAll('.settings-menu__item--view').forEach(e => {
    e.addEventListener('click', () => {
      document.querySelector('.sidebar--view-user').classList.add('sidebar--active');
    })
  })
  document.querySelectorAll('.settings-menu__item--edit').forEach(e => {
    e.addEventListener('click', () => {
      document.querySelector('.sidebar--edit-user').classList.add('sidebar--active');
    })
  })
}

addEventlisteners();

document.querySelector('#viewMoreBtn').addEventListener('click', () => {
  for (let i = 0; i < 10; i++) {
    userList.innerHTML += item;
    addEventlisteners();
  }
})


