let selected_window = 0

let selected_type1 = 0
let selected_type2 = 0

let images = [
    '1',
    '2',
    '3'
]

function get_price() {
    if (selected_type1 == 0 && selected_type2 == 0) {
        return 6900
    }
    if (selected_type1 == 0 && selected_type2 == 1) {
        return 7600
    }
    if (selected_type1 == 0 && selected_type2 == 2) {
        return 6000
    }
    if (selected_type1 == 1 && selected_type2 == 0) {
        return 15000
    }
    if (selected_type1 == 1 && selected_type2 == 1) {
        return 17000
    }
    if (selected_type1 == 1 && selected_type2 == 2) {
        return 14500
    }
    if (selected_type1 == 2 && selected_type2 == 0) {
        return 4500
    }
    if (selected_type1 == 2 && selected_type2 == 1) {
        return 5200
    }
    if (selected_type1 == 2 && selected_type2 == 2) {
        return 4000
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

    final_price = Math.floor(final_price)

    place_to_write.innerHTML = final_price
}