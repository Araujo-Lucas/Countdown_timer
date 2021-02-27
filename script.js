const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

const anoNovo = '1 Jan 2022';

function countdown()
{
    const anoNovoData = new Date(anoNovo);
    const dataAtual = new Date();

    const totalSegundos = (anoNovoData - dataAtual)/1000;
    const dias = Math.floor(totalSegundos/3600/24);
    const horas = Math.floor(totalSegundos/3600) %24;
    const minutos = Math.floor(totalSegundos/60) % 60;
    const segundos = Math.floor(totalSegundos % 60);

    diasEl.innerHTML = dias;
    horasEl.innerHTML = formatTime(horas);
    minutosEl.innerHTML = formatTime(minutos);
    segundosEl.innerHTML = formatTime(segundos);
}

function formatTime(time)
{
    if(time<10)
    {
        return `0${time}`;
    }
    else
    {
        return time;
    }
}

countdown();
setInterval(countdown, 1000);