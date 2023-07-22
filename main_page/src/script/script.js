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
    let scrollTop = document.documentElement.scrollTop;
    let scrollLeft = document.documentElement.scrollLeft;

    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };

}

function hide_black_screen(){

    let black_screen = document.querySelector(".black-screen")
    black_screen.classList.add("hidden")
    window.onscroll = function () { };

}

function show_feedback_form(){

    let form = document.querySelector(".feedback-form")
    show_black_screen()
    form.classList.remove("hidden")

}

function hide_forms(){
    
    hide_black_screen()
    let forms = document.querySelectorAll(".pop_up_form")
    
    forms.forEach( form =>{
        form.classList.add("hidden")
    })

}


let is_sidebar_shown = false
function show_sidebar(){
    
    let sidebar = document.querySelector(".mobile-sidebar")

    if(is_sidebar_shown){
        sidebar.removeAttribute("style")
        is_sidebar_shown = false
        return
    } 
    
    sidebar.style.transform = "translateX(0)"
    is_sidebar_shown = true

}

function show_calculator_form(){
    show_black_screen()
    let calculator = document.querySelector(".calculator")
    calculator.classList.remove("hidden")
}

function calculateCost() {
      var area = document.getElementById("area").value;
      var material = document.getElementById("material").value;
      var costPerSquareMeter = 0;

      // Определение стоимости за квадратный метр в зависимости от выбранного материала
      if (material === "wood") {
        costPerSquareMeter = 1000;
      } else if (material === "concrete") {
        costPerSquareMeter = 1500;
      } else if (material === "brick") {
        costPerSquareMeter = 1200;
      }

      // Вычисление общей стоимости
      var totalCost = area * costPerSquareMeter;

      // Отображение стоимости на странице
      document.getElementById("totalCost").innerHTML = "Общая стоимость: " + totalCost + " рублей";
    }

window.onload = () => {

    let header_top_block = document.querySelector(".header-top")

    buffer = header_top_block.innerHTML

    header_top_block.innerHTML = `<button class="button" href="../../main_page/src/index.html">На главную</button>`

    header_top_block.innerHTML += buffer

    let contacts = document.querySelector(".main-footer-contact")

    contacts.innerHTML = `<div class="main-footer-contact-phone">
                            <p>Телефон:</p>
                            <p>7 (3412) 32 60 65</p>
                        </div>
                        <div class="main-footer-contact-email">
                            <p>Почта:</p>
                            <p>okna@avgust.biz</p>
                        </div>
                        <div class="main-footer-contact-address">
                            <p>Адрес:</p>
                            <p>г. Ижевск, ул. Воткинское шоссе 206 </p>
                        </div>`
}