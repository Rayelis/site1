let selected_window = 0

let selected_type1 = 0
let selected_type2 = 0

function get_price(){
    if(selected_type2 == 0){
        return 10000
    }
    if(selected_type2 == 1){
        return 11200
    }
    if(selected_type2 == 2){
        return 9200
    }
}

