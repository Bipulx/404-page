const section = document.querySelector('.page_404');
const one = document.getElementById('one')

window.addEventListener('online', function () {
    section.style.display = 'none'
});
window.addEventListener('offline', function () {
    section.classList.add('show')
    one.style.display = 'none'
})