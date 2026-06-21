document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tabs__btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Удаляем активный класс со всех кнопок
            tabButtons.forEach(btn => btn.classList.remove('tabs__btn--active'));
            // 2. Скрываем все панели с контентом
            tabPanels.forEach(panel => panel.classList.remove('tab-panel--active'));

            // 3. Добавляем активный класс текущей кнопке
            button.classList.add('tabs__btn--active');
            
            // 4. Находим связанную панель по data-атрибуту и показываем её
            const targetTab = button.getAttribute('data-tab');
            const targetPanel = document.getElementById(targetTab);
            
            if (targetPanel) {
                targetPanel.classList.add('tab-panel--active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.nav__link');
    const tabContents = document.querySelectorAll('.hero-content');

    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');

                // 1. Снимаем активный класс со всех кнопок и красим нужную
                tabButtons.forEach(btn => btn.classList.remove('nav__link--active'));
                button.classList.add('nav__link--active');

                // 2. Прячем старый контент и показываем новый
                tabContents.forEach(content => {
                    content.classList.remove('hero-content--active');
                });

                const activeContent = document.getElementById(`tab-${targetTab}`);
                if (activeContent) {
                    activeContent.classList.add('hero-content--active');
                }
            });
        });
    }
});