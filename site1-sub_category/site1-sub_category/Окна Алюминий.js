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