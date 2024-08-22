// 動かしたい見出しのidを取得する
const Extend = document.querySelector('#extend');

const key = {
    // 文字色を透明から白にする
    color: ['transparent', '#fff'],
    backgroundPosition: ['100% 0', '0 0'],
};

const option = {
    duration: 1000,
    easing: 'ease',
};

Extend.animate(key, option);