const content = document.querySelector('.content');
const scrollThumb = document.querySelector('.scroll-thumb');

document.addEventListener('scroll', updateScrollBar);

function updateScrollBar() {

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );

    // 目前滾動位置佔總長度的幾%
    const scrollPercentage = 2+(scrollPosition / (documentHeight - windowHeight)) * 100;

    // 計算最大的 %數
    const maxThumbPosition = 95 - (scrollThumb.offsetHeight / content.clientHeight) * 100;

    // 將滾動位置限制在畫面上，避免超出畫面
    const thumbPosition = Math.min(scrollPercentage, maxThumbPosition);

    scrollThumb.style.top = thumbPosition + '%';
}



