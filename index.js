const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {

    alert('En verdad perdon, no quise hacerte sentir mal')
    alert('O como si hubieses dicho algo malo')
    alert('Eres alguien especial para mi, y tus palabras tambien lo fueron')
    alert('Simplemente me senti raro ya que eres la primera en decirme algo bonito')
    alert('Simplemente senti que no merecesia ese cariño')

});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('click', function () {

    alert('¿En serio no me perdonas?')

});

noBtn.addEventListener('mouseover', function () {


    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);

    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');

    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);

});

function Cambiar(){
    let body = document.getElementsByTagName('body')[0];

    body.style.backgroundImage = url="";

}