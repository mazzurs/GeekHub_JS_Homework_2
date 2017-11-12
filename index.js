


function CountArguments() {             // Задание 1
    alert(arguments.length);
}

function CountStrings() {               // Задание 2
    var sum = 0;
    for(i=0; i<arguments.length; i++){
        if(typeof arguments[i] === 'string')
            sum++;
    }
    alert(sum);
}

function SumArguments() {               // Задание 3
    if(typeof arguments[0]=="number")
        var sum=0;
    else
        var sum='';

    for(i=0; i<arguments.length; i++){
            sum+=arguments[i];
    }
    alert(sum);
}

$(function () {                          // Задание 4
    $('input[name="task4"]').on('keyup', function () {
        if ($(this).val() === 'JavaScript') {
            $('input[name="task4"]').prop('checked', true);
        } else {
            $('input[name="task4"]').prop('checked', false);
        }
    });
});

$(function () {                             // Задание 5
    $('form').on('submit', function (e) {
        e.preventDefault();

        var numbers = $(this).find('input[name="numbers"]'),
            letters = $(this).find('input[name="letters"]'),
            agreement = $(this).find('input[name="agreement"]'),
            type = $(this).find('input[name="type"]');

        if(!$.isNumeric(numbers.val()) && !''){
            alert('В первом поле должно быть число');
        }
        if($.isNumeric(letters.val()) && !''){
            alert('Во втором поле должна быть строка');
        }
        if(!agreement.is(':checked')){
            alert('Чекбокс не отмечен');
        }
        if(!type.is(':checked')){
            alert('Радио не выбрано');
        }
        else{
            $(this).unbind('submit').submit();
        }

    });
});


(function (a) { console.log(a(function (b) { return b + b; })); })(function (c) { return c(2) * c(3); });

function first (a) { console.log(second(last)); }
function second(c) { return c(2) * c(3); }
function last(b) { return b + b; }



function first (a) { console.log(second(last)); } // Задание 6
function second (c) { return c(2) * c(3); }
function last (b) { return b + b; }

first();




