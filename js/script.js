// Простой функционал для кнопки
document.querySelector('.cta-button').addEventListener('click', function () {
    alert('Спасибо за интерес! Свяжитесь с нами для подробной информации.');
});

// Плавная прокрутка для навигации
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});