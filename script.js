document.getElementById('addSkill').addEventListener('click', function() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    if (newSkill) {
        let ul = document.getElementById('skillsList'); // Suponiendo que tienes un <ul id="skillsList"> para tus habilidades
        let li = document.createElement('li');
        li.textContent = newSkill;
        ul.appendChild(li);
    }
});

document.getElementById('addSkill').addEventListener('click', function() {
    let newSkill = prompt("Introduce el nivel de la habilidad habilidad:");
    if (newSkill) {
        let ul = document.getElementById('skillsListlevel'); // Suponiendo que tienes un <ul id="skillsList"> para tus habilidades
        let li = document.createElement('li');
        li.textContent = newSkill;
        ul.appendChild(li);
    }
});

document.getElementById('addSkillContac').addEventListener('click', function() {
    let newSkill = prompt("Introduce el correo electronico:");
    if (newSkill) {
        let div = document.querySelector('.box-1');
            let p = document.createElement('p');
            p.className = 'icono';
            p.innerHTML = `<span class="fas fa-envelope"></span>${newSkill}`;
            div.appendChild(p);

            alert("Gracias  "+newSkill+"  me pondré en contacto contigo pronto");
    }else{
        alert("Debes ingresar un correo electronico");
    
    }
    const calificacion = () => {
        let calificacion = prompt("Del 1 al 10, ¿cómo calificarías mi hoja de vida?");
        if(calificacion>6){
            alert(`¡Gracias por calificar con un ${calificacion}!`);
        }else{
            alert(`¡Trabajaremos por mejorar gracias por la calificacion ${calificacion}!`);
        }
       
    }

    calificacion();  



});



const certificaciones = ["Certificacion Itil V4 PeopleSoft", "Srum Fundation", "SqlServer 2019", "Devops"];

function mostrarCertificaciones() {

    
    let ul = document.getElementById('listaCertificaciones'); // Suponiendo que tienes un <ul id="listaCertificaciones"> en tu HTML
    
    for (let i = 0; i < certificaciones.length; i++) {
        let li = document.createElement('li');
        li.textContent = certificaciones[i];
        ul.appendChild(li);
    }
}

window.onload = mostrarCertificaciones;

document.getElementById('viewProyects').addEventListener('click', function() {
    var proyectos = [
        "Hoja de vida ",
        "Tienda de barrio ",
        "Reservas",
        "Enum",
        "Polimorfismo"
    ];
var cantidadProyectos = prompt("Ingrese la cantidad de proyectos que desea ver:");
    cantidadProyectos = parseInt(cantidadProyectos);
    const calificacion = () => {
        let calificacion = prompt("Del 1 al 10, ¿cómo calificarías mi hoja de vida?");
        if(calificacion>6){
            alert(`¡Gracias por calificar con un ${calificacion}!`);
        }else{
            alert(`¡Trabajaremos por mejorar gracias por la calificacion ${calificacion}!`);
        }
       
    }
    
    if (!isNaN(cantidadProyectos) && cantidadProyectos > 0) {
        for (var i = 0; i < cantidadProyectos; i++) {
            var indice = i % proyectos.length;
            alert("Proyecto " + (i + 1) + ": " + proyectos[indice]);
      }
     
    } else {
        alert("El numero que ingreso debe ser mayor a 0.");
    }

    calificacion();
});