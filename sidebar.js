document.querySelector('#closeCreateSidebar').addEventListener('click', () => {
    document.querySelector('.sidebar--create-user').classList.remove('sidebar--active');
})
document.querySelector('#closeViewSidebar').addEventListener('click', () => {
    document.querySelector('.sidebar--view-user').classList.remove('sidebar--active');
})
document.querySelector('#closeEditSidebar').addEventListener('click', () => {
    document.querySelector('.sidebar--edit-user').classList.remove('sidebar--active');
})
document.querySelector('#swipeToEdit').addEventListener('click', () => {
    document.querySelector('.sidebar--view-user').classList.remove('sidebar--active');
    setTimeout(() => {
        document.querySelector('.sidebar--edit-user').classList.add('sidebar--active');
    }, 500);
})
