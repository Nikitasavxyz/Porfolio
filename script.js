// 4. Копирование email в буфер обмена без ломания стилей
const emailBtn = document.getElementById('email-copy');
if (emailBtn) {
    emailBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Полностью блокируем прыжок наверх
        
        const email = this.getAttribute('data-email') || 'hello@nikitasav.xyz';
        const mainText = this.querySelector('.email-text');
        const copiedText = this.querySelector('.copied-text');

        navigator.clipboard.writeText(email).then(() => {
            // Плавная замена видимости элементов без изменения структуры тега
            mainText.style.opacity = '0';
            copiedText.style.opacity = '1';
            this.style.pointerEvents = 'none'; // Блокируем повторные клики в процессе

            setTimeout(() => {
                mainText.style.opacity = '1';
                copiedText.style.opacity = '0';
                this.style.pointerEvents = 'auto'; // Кнопка снова полностью активна
            }, 1500);
        }).catch(err => {
            alert('Email copied: ' + email);
        });
    });
}