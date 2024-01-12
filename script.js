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
    }
});