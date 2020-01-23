let day_text = document.getElementById('day');
let hour_numb = document.getElementById('hour');
let galons_numb = document.getElementById('galons');
let calc_btn = document.getElementById('calc-btn');
let result_text = document.getElementById('result');


calc_btn.addEventListener('click', function() {
    let totalPrice = findPrice(day_text.value, galons_numb.value, hour_numb.value);
    result_text.innerHTML = `${galons_numb.value} galons of gasoline will cost you $${totalPrice}.`
});


function findPrice(day, galons, hour) {
    let galonPrice = 1000;
    if (day === "Monday") {
        galonPrice += galonPrice*.1;
    } else if (day === "Wednesday") {
        galonPrice += 100;
    } else if (day === "Friday" && (hour >= 15 && hour <= 18)) {
        galonPrice -= 150;
    } else if (day === "Sunday" || day === "Saturday") {
        galonPrice += galonPrice*.2;
    } else {
        if(galons % 2 === 0) galonPrice  -= 80;
    }

    return galonPrice * galons;
}