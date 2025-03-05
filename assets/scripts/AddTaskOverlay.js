document.getElementById('add-task-btn').addEventListener('click', function () {
    document.getElementById('task-form').classList.remove('hidden');
});

document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('task-form').classList.add('hidden');
});
window.addEventListener('click', function (e) {
    if (e.target === document.getElementById('task-form')) {
        document.getElementById('task-form').classList.add('hidden');
    }
});
