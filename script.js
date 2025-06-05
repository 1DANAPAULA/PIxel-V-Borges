let menu = document.getElementById("menu")
let iconebarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-X")

function abreFechaMenu(){

    //Se o menu está fechado
    if(menu.classList.contains("menu-fechado")){
        //Abrir menu
        menu.classList.remove("menu-fechado")

        //Mostra icone X
        iconeX.style.display = "inline"

        //Esconder o icone barras
        iconebarras.style.display = "none"


    }
    //Senão
    else{
    //Fechar o menu
    menu.classList.add("menu-fechado")

    //Esconder icone X
    iconeX.style.display = "none"

    //Mostrar icone barras
    iconebarras.style.display = "inline"

   }
 }

onresize =() => {
    menu.classList.remove("menu-fechado")

    //Mostrar icone X
    iconeX.style.display = "inline"

    //Esconder icone barras
    iconebarras.style.display = "none"
}