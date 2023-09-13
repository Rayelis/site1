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