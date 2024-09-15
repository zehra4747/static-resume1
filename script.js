var hsbutton = document.getElementById('butt');
var sk = document.getElementById('skillss');
hsbutton.addEventListener('click', function () {
    if (sk.style.display === 'none') {
        sk.style.display = 'block';
    }
    else {
        sk.style.display = 'none';
    }
});
