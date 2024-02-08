document.addEventListener('DOMContentLoaded', function () {

        document.getElementById('clean').addEventListener('click', function () {
            location.reload();
        });

    let answerDay = '';
    let answerMonth = '';

    document.querySelectorAll('#submenuday li').forEach(function (dayLi) {
        dayLi.addEventListener('click', function () {
            document.getElementById('answer').textContent = '';
            if (dayLi.id === 'day1') {
                answerDay = 'serpente marinha';
            } else if (dayLi.id === 'day2') {
                answerDay = 'estripa bucho';
            }  else if (dayLi.id === 'day3') {
                answerDay = 'dos sete mares';
            } else if (dayLi.id === 'day4') {
                answerDay = 'de um olho só';
            } else if (dayLi.id === 'day5') {
                answerDay = 'alma perdida';
            } else if (dayLi.id === 'day6') {
                answerDay = 'do fundo do mar';
            } else if (dayLi.id === 'day7') {
                answerDay = 'mão de gancho';
            } else if (dayLi.id === 'day8') {
                answerDay = 'da maldição incurável';
            } else if (dayLi.id === 'day9') {
                answerDay = 'caveira de ouro';
            } else if (dayLi.id === 'day10') {
                answerDay = 'arranca falange';
            } else if (dayLi.id === 'day11') {
                answerDay = 'ossos quebrados';
            } else if (dayLi.id === 'day12') {
                answerDay = 'do mapa do tesouro';
            } else if (dayLi.id === 'day13') {
                answerDay = 'das águas sombrias';
            } else if (dayLi.id === 'day14') {
                answerDay = 'tempestade de fogo';
            } else if (dayLi.id === 'day15') {
                answerDay = 'ouriço assustador';
            } else if (dayLi.id === 'day16') {
                answerDay = 'barba encaracolada';
            } else if (dayLi.id === 'day17') {
                answerDay = 'do baú da morte';
            } else if (dayLi.id === 'day18') {
                answerDay = 'espada de prata';
            } else if (dayLi.id === 'day19') {
                answerDay = 'sem coração';
            } else if (dayLi.id === 'day20') {
                answerDay = 'da costela quebrada';
            } else if (dayLi.id === 'day21') {
                answerDay = 'sem dente';
            } else if (dayLi.id === 'day22') {
                answerDay = 'bafo de dragão';
            } else if (dayLi.id === 'day23') {
                answerDay = 'do perola negra';
            } else if (dayLi.id === 'day24') {
                answerDay = 'sangue azulado';
            } else if (dayLi.id === 'day25') {
                answerDay = 'assombroso';
            } else if (dayLi.id === 'day26') {
                answerDay = 'coração de pedra';
            } else if (dayLi.id === 'day27') {
                answerDay = 'da maré do luar';
            } else if (dayLi.id === 'day28') {
                answerDay = 'do dedo podre';
            } else if (dayLi.id === 'day29') {
                answerDay = 'tentáculos de aço';
            } else if (dayLi.id === 'day30') {
                answerDay = 'do fundo do mar';
            } else if (dayLi.id === 'day31') {
                answerDay = 'do fundo do mar';
            } else {
                monthDay = 'Sem resposta';
            }
            document.getElementById('answer').textContent = `${answerMonth} ${answerDay} `;
        });
    });

    document.querySelectorAll('#submenumonth li').forEach(function (monthLi) {
        monthLi.addEventListener('click', function () {
            document.getElementById('answer').textContent = '';
            if (monthLi.textContent === 'Janeiro') {
                answerMonth = 'Capitão';
            } else if (monthLi.textContent === 'Fevereiro') {
                answerMonth = 'Caolho';
            } else if (monthLi.textContent === 'Março') {
                answerMonth = 'Cruel,';
            } else if (monthLi.textContent === 'Abril') {
                answerMonth = 'Temido';
            } else if (monthLi.textContent === 'Maio') {
                answerMonth = 'Impiedoso';
            } else if (monthLi.textContent === 'Junho') {
                answerMonth = 'Perneta';
            } else if (monthLi.textContent === 'Julho') {
                answerMonth = 'Tripulante';
            } else if (monthLi.textContent === 'Agosto') {
                answerMonth = 'Caçador';
            } else if (monthLi.textContent === 'Setembro') {
                answerMonth = 'Lobo';
            } else if (monthLi.textContent === 'Outubro') {
                answerMonth = 'Fantasma';
            } else if (monthLi.textContent === 'Novembro') {
                answerMonth = 'Navegante';
            } else if (monthLi.textContent === 'Dezembro') {
                answerMonth = 'Desbravador';
            }else {
                monthAnswer = 'Sem resposta';
            }
            document.getElementById('answer').textContent = `${answerMonth} ${answerDay} `;
        });
    });
});
