function change_text(Element){

    let buttons = document.querySelectorAll(".main-nav-button")
    let texts = document.querySelectorAll(".main-content-text")

    let button_index

    let clicked_button
    let chosen_text

    buttons.forEach( button => {
        button.classList.add("nav-passive")
        button.classList.remove("nav-active")
    })

    texts.forEach( text => {
        text.classList.add("hidden")
    })

    for(let i = 0; i < buttons.length; i++){
        if(buttons[i] === Element){
            button_index = i
        }
    }

    clicked_button = buttons[button_index]
    chosen_text = texts[button_index]

    clicked_button.classList.add("nav-active")
    clicked_button.classList.remove("nav-passive")
    chosen_text.classList.remove("hidden")
}

function show_black_screen(){

    let black_screen = document.querySelector(".black-screen")
    black_screen.classList.remove("hidden")

}

function hide_black_screen(){

    let black_screen = document.querySelector(".black-screen")
    black_screen.classList.add("hidden")

}

function show_feedback_form(){

    let form = document.querySelector(".feedback-form")
    show_black_screen()
    form.classList.remove("hidden")

}

function hide_feedback_form(){

    let form = document.querySelector(".feedback-form")
    hide_black_screen()
    form.classList.add("hidden")

}

