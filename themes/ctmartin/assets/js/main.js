window.addEventListener('load', () => {
    document.querySelectorAll('[data-toggle]').forEach(element => {
        element.addEventListener('click', ()  => {
            document.querySelector(element.dataset.toggle).classList.toggle('active');
        });
    });
});

window.addEventListener('resize', () => {
    document.querySelectorAll('[data-toggle]').forEach(element => {
        document.querySelector(element.dataset.toggle).classList.remove('active');
    });
});