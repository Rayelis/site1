let selected_window = 0

let selected_type1 = 0
let selected_type2 = 0

let images = [
    '1',
    '2',
]

function get_price() {
    if (selected_type1 == 0) {
        return 12000
    }
    if (selected_type1 == 1) {
        return 8000
    }
}