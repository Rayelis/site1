let selected_window = 0

let selected_type1 = 0
let selected_type2 = 0

function get_price() {
    if (selected_type1 == 0 && selected_type2 == 0) {
        return 10000
    }
    if (selected_type1 == 0 && selected_type2 == 1) {
        return 11200
    }
    if (selected_type1 == 0 && selected_type2 == 2) {
        return 9200
    }
    if (selected_type1 == 1 && selected_type2 == 0) {
        return 40000
    }
    if (selected_type1 == 1 && selected_type2 == 1) {
        return 48000
    }
    if (selected_type1 == 1 && selected_type2 == 2) {
        return 35000
    }
}