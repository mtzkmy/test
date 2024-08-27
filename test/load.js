/*「画像の読み込みが終わったらloadedというクラスを追加する」というイベント*/
const loading = document.querySelector('#loading');

window.addEventListener('load', () =>{
    loading.classList.add('loaded');
});

