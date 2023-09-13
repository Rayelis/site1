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
        return 5000
    }
    if (selected_type1 == 0 && selected_type2 == 1) {
        return 5600
    }
    if (selected_type1 == 1 && selected_type2 == 0) {
        return 6000
    }
    if (selected_type1 == 1 && selected_type2 == 1) {
        return 6600
    }
}