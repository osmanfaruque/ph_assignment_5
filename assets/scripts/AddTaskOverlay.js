document.getElementById('add-task-btn').addEventListener('click', function () {
    document.getElementById('task-form').classList.remove('hidden');
    document.getElementById('nav').classList.add('hidden');
    document.getElementById('main').classList.add('hidden');
});

document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('task-form').classList.add('hidden');
    document.getElementById('nav').classList.remove('hidden');
    document.getElementById('main').classList.remove('hidden');
});
window.addEventListener('click', function (e) {
    if (e.target === document.getElementById('task-form')) {
        document.getElementById('task-form').classList.add('hidden');
        document.getElementById('nav').classList.remove('hidden');
        document.getElementById('main').classList.remove('hidden');
    }
});
document.getElementById('submit-task-btn').addEventListener('click' ,function(){
    document.getElementById('task-form').classList.add('hidden');
    document.getElementById('nav').classList.remove('hidden');
    document.getElementById('main').classList.remove('hidden');
})