// const selectElement = document.querySelector('.select');
const estudiante = 0.8;
const trainee = 0.5;
const jr = 0.15;
const valorTicket = 200;
let button = document.getElementById("modOscuro");

function seleccionarOpcion(){
    let cmbSelector = document.getElementById('cmbBox');
    let seleccion = cmbSelector.value;
    let valorTotal = 0;
    let cant = document.getElementById('cant');



    if (seleccion == "Estudiante") {
        valorTotal = valorTicket - valorTicket * estudiante;
    } else if (seleccion == "Trainee") {
        valorTotal = valorTicket - valorTicket * trainee;
    } else if (seleccion == "Junior"){
        valorTotal = valorTicket - valorTicket * jr;
    } else 
        valorTotal = valorTicket;

    document.getElementById('lblMontoTotal').innerText = valorTotal * cant.value;
}

// function seleccionaCartelCategoria(){
//     let categoriaEstudiante = document.getElementById(addEventListener,'catEstudiante');
//     let categoriaTrainee = document.getElementById('catTrainee');
//     let categoriaJr = document.getElementById('catJr');
//     console.log(categoriaEstudiante.id);
//     if (categoriaEstudiante.addEventListener().click) {
//         cmbSelector.value = "Estudiante";
//     } else if (categoriaTrainee.click()) {
//         cmbSelector.value = "Trainee";
//     } else if (categoriaJr.click()){
//         cmbSelector.value = "Junior";
//     } else 
//         cmbSelector.value = "Seleccione una opcion";
// }

function limpiarTodo(){
    document.getElementById('lblMontoTotal').innerText = "";
}

button.addEventListener("click", () => darkModeButtonClick(toggleDarkMode));

const toggleDarkMode = (color) => {
    let body = document.body;
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.style.backgroundColor = "#ffffff"; // Color para el modo claro
        body.style.color = color
        button.value = "Oscuro";
    } else {
        body.classList.add("dark-mode");
        body.style.backgroundColor = color; // Color para el modo oscuro
        body.style.color = "#ffffff";
        button.value = "Claro";
    }
    
};

const darkModeButtonClick = (parametroFuncion) => {
    parametroFuncion("#1a1a1a"); // Ejemplo de color: negro
};