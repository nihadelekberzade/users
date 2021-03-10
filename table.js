const userList = document.querySelector('.user-list');
const item = `<li class="user-item">
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
`
for (let i = 0; i < 9; i++) {
  userList.innerHTML += item;
}
document.querySelector('.createUser').addEventListener('click', () => {
  document.querySelector('.sidebar--create-user').classList.add('sidebar--active');
})
document.querySelector('.settings-menu__item--view').addEventListener('click', () => {
  document.querySelector('.sidebar--view-user').classList.add('sidebar--active');
})
document.querySelector('.settings-menu__item--edit').addEventListener('click', () => {
  document.querySelector('.sidebar--edit-user').classList.add('sidebar--active');
})
document.querySelector('#viewMoreBtn').addEventListener('click', () => {
  for (let i = 0; i < 10; i++) {
    userList.innerHTML += item;
  }
})


