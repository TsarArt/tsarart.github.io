document
    .querySelector('#previous')
    .addEventListener('click', function() {
        let colorId = getColorId(document.querySelectorAll('#imgs li img')),
            colors = document.querySelectorAll('#imgs li img'),
            imgList = ['wood.png', 'glass.png', 'linoleum.png', 'cloth.png', 'marble.png'],
            mainImg = document.querySelector('#active-texture');

        colors[colorId].classList.remove('active');
        colorId--;
        if (colorId < 0) colorId = colors.length - 1;
        colors[colorId].classList.add('active');
        mainImg.src = `img/${imgList[colorId]}`;
    });

document
    .querySelector('#next')
    .addEventListener('click', function() {
        let colorId = getColorId(document.querySelectorAll('#imgs li img')),
            colors = document.querySelectorAll('#imgs li img'),
            imgList = ['wood.png', 'glass.png', 'linoleum.png', 'cloth.png', 'marble.png'],
            mainImg = document.querySelector('#active-texture');

        colors[colorId].classList.remove('active');
        colorId = ++colorId % colors.length;
        colors[colorId].classList.add('active');
        mainImg.src = `img/${imgList[colorId]}`;
    });

function getColorId(colors) {
    for (let i = 0; i < colors.length; i++) {
        if (colors[i].classList.contains('active')) return i;
    }
}