const elForm = document.querySelector('.form');
const elInput = document.querySelector('.form__input');
const elSelect = document.querySelector('.form__select');
const elResult = document.querySelector('.form__result');


elForm.addEventListener( 'submit', function(evt){
    evt.preventDefault()

    let inputValue = elInput.value;
    let selectValue = elSelect.value;

    const USD = 11030.00;
    const EURO = 11750.00;
    const RUb = 133.00;

    if(selectValue == "USD"){
        elResult.textContent = (USD * inputValue ).toFixed(2);
    } else if (selectValue == "EURO") {
        elResult.textContent = (EURO * inputValue).toFixed(2);
    } else if ( selectValue =="RUB") {
        elResult.textContent = (RUb * inputValue).toFixed(2);
    }else{
        elInput.textContent = "Iltimos valyutani kiriting!"
    }


})