let selected_window = 0

let selected_type1 = 0
let selected_type2 = 0

let images = [
    '1',
    '2',
]

function get_price() {
    if (selected_type1 == 0) {
        return 7500
    }
    if (selected_type1 == 1) {
        return 9500
    }
    if (selected_type1 == 2) {
        return 17000
    }
    if (selected_type1 == 3) {
        return 25000
    }
}

function calc_sum() {
    let place_to_write = document.querySelector(".main-calc-sum-label")

    let height = document.querySelector(".param1").value
    if (!height) { return }

    let width = document.querySelector(".param2").value
    if (!width) { return }

    let area = width * height / 1000000

    let final_price = get_price() * area

    if(selected_window == 1){
        if(selected_type1 < 2){
            final_price += 2500
        }
        if(selected_type1 >= 2){
            final_price += 3500
        }
    }

    final_price = Math.floor(final_price)

    place_to_write.innerHTML = final_price
}