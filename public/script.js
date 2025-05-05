// script.js extendido para todos los módulos principales del sistema educativo

document.addEventListener('DOMContentLoaded', () => {
    showSection('estudiantes');
    fetchEstudiantes();
    fetchProfesores();
    fetchSecretarias();
    fetchGrupos();
    fetchTutores();
    fetchMaterias();
    fetchRectores();
    fetchCoordinadores();
    fetchAsistencias();
    fetchExcusas();
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

function toggleMenu() {
    const menuList = document.getElementById('menuList');
    if (menuList.style.display === 'none') {
        menuList.style.display = 'block';
    } else {
        menuList.style.display = 'none';
    }
}

function toggleMenu() {
    const subButtons = document.getElementById('subButtons');
    subButtons.style.display = subButtons.style.display === 'none' ? 'block' : 'none';
}

function toggleCreateMenu() {
    const createMenu = document.getElementById('createMenu');
    if (createMenu.style.display === 'none') {
        createMenu.style.display = 'block';
    } else {
        createMenu.style.display = 'none';
    }
}

function toggleReadMenu() {
    const readMenu = document.getElementById('readMenu');
    if (readMenu.style.display === 'none') {
        readMenu.style.display = 'block';
    } else {
        readMenu.style.display = 'none';
    }
}

function toggleUpdateMenu() {
    const updateMenu = document.getElementById('updateMenu');
    if (updateMenu.style.display === 'none') {
        updateMenu.style.display = 'block';
    } else {
        updateMenu.style.display = 'none';
    }
}

function toggleDeleteMenu() {
    const deleteMenu = document.getElementById('deleteMenu');
    if (deleteMenu.style.display === 'none') {
        deleteMenu.style.display = 'block';
    } else {
        deleteMenu.style.display = 'none';
    }
}

function cargarEntidad(entidad) {
    fetch(`http://localhost:5000/${entidad}`) // Ajusta si usas otro host o puerto
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById(`${entidad}TableBody`);
            tableBody.innerHTML = '';
            data.forEach(item => {
                const fila = `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.nombre}</td>
                        <td>${item.apellido}</td>
                        <td>${item.correo}</td>
                        <td>${item.edad}</td>
                        <td>${item.materia}</td>
                        <td>${item.asignatura}</td>
                        <td>${item.fecha}</td>
                        <td>${item.hora}</td>
                        <td>${item.telefono}</td>
                        <td>${item.numerodeidentificacion}</td>
                    </tr>
                `;
                tableBody.innerHTML += fila;
            });
        })
        .catch(error => console.error(`Error cargando ${entidad}:`, error));
}

// Mostrar la sección correspondiente y cargar los datos
function mostrarTabla(entidad) {
    document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
    document.getElementById(`${entidad}Read`).classList.add('active');
    cargarEntidad(entidad);
}

// ----------- Estudiantes -----------
async function fetchEstudiantes() {
    const res = await fetch('/api/estudiantes');
    const data = await res.json();
    const list = document.getElementById('estudianteList');
    if (!list) return;
    list.innerHTML = '';
    data.forEach(est => {
        const li = document.createElement('li');
        li.textContent = `${est.nombre_estudiante} ${est.apellido_estudiante} - Correo: ${est.correo_estudiante}`;
        list.appendChild(li);
    });
}
document.getElementById('infoButton').addEventListener('click', () => {
    const infoSection = document.getElementById('infoSection');
    if (infoSection) {
        infoSection.classList.toggle('visible');
        infoSection.textContent = 'Esta es la información adicional que se muestra al hacer clic en el botón.';
    }
});

async function addEstudiante() {
    const nombre = document.getElementById('estudianteNombre').value.trim();
    const apellido = document.getElementById('estudianteApellido').value.trim();
    const edad = document.getElementById('estudianteEdad').value.trim();
    const correo = document.getElementById('estudianteCorreo').value.trim();
    const contrasena = document.getElementById('estudianteContrasena').value.trim();
    const telefono = document.getElementById('estudianteTelefono').value.trim();

    if (!nombre || !apellido || !edad || !correo || !contrasena || !telefono) {
        return alert('Completa todos los campos del estudiante.');
    }

    // --- INICIO DE LA VALIDACIÓN DEL CORREO ELECTRÓNICO ---
    if (!correo.endsWith('@luiscarlosgalansarmiento.luiscarlosgalansarmiento.edu.co')) {
        return alert('El correo electrónico debe terminar con "@luiscarlosgalansarmiento.luiscarlosgalansarmiento.edu.co". Por favor, verifica.');
    }
    // --- FIN DE LA VALIDACIÓN DEL CORREO ELECTRÓNICO ---

    const res = await fetch('/api/estudiantes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_estudiante: nombre, apellido_estudiante: apellido, edad_estudiante: edad, correo_estudiante: correo, contraseña_estudiante: contrasena, telefono_estudiante: telefono })
    });

    if (!res.ok) return alert('Error al agregar estudiante');
    fetchEstudiantes();
}

// ----------- Profesores -----------
async function addProfesor() {
    const nombre = document.getElementById('profesorNombre').value.trim();
    const apellido = document.getElementById('profesorApellido').value.trim();
    const identificacion = document.getElementById('profesorNumero').value.trim();
    const correo = document.getElementById('profesorCorreo').value.trim();
    const asignatura = document.getElementById('profesorAsignatura').value.trim();
    const contraseña = prompt('Contraseña del profesor:');
    const telefono = prompt('Teléfono del profesor:');

    if (!nombre || !apellido || !identificacion || !correo || !asignatura || !contraseña || !telefono) {
        return alert('Completa todos los campos del profesor.');
    }

    // --- INICIO DE LA VALIDACIÓN DEL CORREO ELECTRÓNICO ---
    if (!correo.endsWith('@luiscarlosgalansarmiento.edu.co')) {
        return alert('El correo electrónico debe terminar con "@luiscarlosgalansarmiento.edu.co". Por favor, verifica.');
    }
    // --- FIN DE LA VALIDACIÓN DEL CORREO ELECTRÓNICO ---

    const res = await fetch('/api/profesores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_profesor: nombre, apellido_profesor: apellido, identificacion_profesor: identificacion, correo_profesor: correo, contraseña_profesor: contraseña, telefono_profesor: telefono })
    });

    if (!res.ok) return alert('Error al agregar profesor');
    fetchProfesores();
}

// ----------- Secretarias -----------
async function addSecretaria() {
    const nombre = document.getElementById('secretariaNombre').value.trim();
    const apellido = document.getElementById('secretariaApellido').value.trim();
    const identificacion = document.getElementById('secretariaNumero').value.trim();
    const correo = document.getElementById('secretariaCorreo').value.trim();
    const contraseña = prompt('Contraseña de la secretaria:');
    const telefono = prompt('Teléfono de la secretaria:');

    if (!nombre || !apellido || !identificacion || !correo || !contraseña || !telefono) {
        return alert('Completa todos los campos de la secretaria.');
    }

    // --- INICIO DE LA VALIDACIÓN DEL CORREO ELECTRÓNICO ---
    if (!correo.endsWith('@luiscarlosgalansarmiento.edu.co')) {
        return alert('El correo electrónico debe terminar con "@luiscarlosgalansarmiento.edu.co". Por favor, verifica.');
    }
    // --- FIN DE LA VALIDACIÓN DEL CORREO ELECTRÓNICO ---

    const res = await fetch('/api/secretarias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_secretaria: nombre, apellido_secretaria: apellido, identificacion_secretaria: identificacion, correo_secretaria: correo, contraseña_secretaria: contraseña, telefono_secretaria: telefono })
    });

    if (!res.ok) return alert('Error al agregar secretaria');
    fetchSecretarias();
}

// ----------- Rectores -----------
async function addRector() {
    const nombre = document.getElementById('rectorNombre').value.trim();
    const apellido = document.getElementById('rectorApellido').value.trim();
    const identificacion = document.getElementById('rectorNumero').value.trim();
    const correo = document.getElementById('rectorCorreo').value.trim();
    const contraseña = prompt('Contraseña del rector:');
    const telefono = prompt('Teléfono del rector:');

    if (!nombre || !apellido || !identificacion || !correo || !contraseña || !telefono) return alert('Todos los campos son obligatorios.');

    // --- INICIO DE LA VALIDACIÓN DEL CORREO ELECTRÓNICO ---
    if (!correo.endsWith('@luiscarlosgalansarmiento.edu.co')) {
        return alert('El correo electrónico debe terminar con "@luiscarlosgalansarmiento.edu.co". Por favor, verifica.');
    }
    // --- FIN DE LA VALIDACIÓN DEL CORREO ELECTRÓNICO ---

    const res = await fetch('/api/rectores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_rector: nombre, apellido_rector: apellido, identificacion_rector: identificacion, correo_rector: correo, contraseña_rector: contraseña, telefono_rector: telefono })
    });

    if (!res.ok) return alert('Error al agregar rector');
    fetchRectores();
}

// ----------- Coordinadores -----------
async function addCoordinador() {
    const nombre = document.getElementById('coordinadorNombre').value.trim();
    const apellido = document.getElementById('coordinadorApellido').value.trim();
    const identificacion = document.getElementById('coordinadorNumero').value.trim();
    const correo = document.getElementById('coordinadorCorreo').value.trim();
    const contraseña = prompt('Contraseña del coordinador:');
    const telefono = prompt('Teléfono del coordinador:');

    if (!nombre || !apellido || !identificacion || !correo || !contraseña || !telefono) return alert('Todos los campos son obligatorios.');

    // --- INICIO DE LA VALIDACIÓN DEL CORREO ELECTRÓNICO ---
    if (!correo.endsWith('@luiscarlosgalansarmiento.edu.co')) {
        return alert('El correo electrónico debe terminar con "@luiscarlosgalansarmiento.edu.co". Por favor, verifica.');
    }
    // --- FIN DE LA VALIDACIÓN DEL CORREO ELECTRÓNICO ---
    const res = await fetch('/api/coordinadores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_coordinador: nombre, apellido_coordinador: apellido, identificacion_coordinador: identificacion, correo_coordinador: correo, contraseña_coordinador: contraseña, telefono_coordinador: telefono })
    });

    if (!res.ok) return alert('Error al agregar coordinador');
    fetchCoordinadores();
}

// ----------- Grupos -----------
async function fetchGrupos() {
    const res = await fetch('/api/grupos');
    const data = await res.json();
    const list = document.getElementById('grupoList');
    if (!list) return;
    list.innerHTML = '';
    data.forEach(grupo => {
        const li = document.createElement('li');
        li.textContent = `Grupo: ${grupo.nombre_grupo}`;
        list.appendChild(li);
    });
}

async function addGrupo() {
    const nombre = document.getElementById('grupoNombre').value.trim();
    if (!nombre) return alert('Campo requerido.');
    const res = await fetch('/api/grupos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_grupo: nombre })
    });
    if (!res.ok) return alert('Error al agregar grupo');
    fetchGrupos();
    document.getElementById('grupoNombre').value = '';
}

// ----------- Tutores Legales -----------
async function fetchTutores() {
    const res = await fetch('/api/tutores');
    const data = await res.json();
    const list = document.getElementById('tutorList');
    if (!list) return;
    list.innerHTML = '';
    data.forEach(tutor => {
        const li = document.createElement('li');
        li.textContent = `${tutor.nombre_tutorlegal} ${tutor.apellido_tutorlegal} - Correo: ${tutor.correo_tutorlegal}`;
        list.appendChild(li);
    });
}

async function addTutor() {
    const nombre = document.getElementById('tutorNombre').value.trim();
    const apellido = document.getElementById('tutorApellido').value.trim();
    const correo = document.getElementById('tutorCorreo').value.trim();
    const contraseña = document.getElementById('tutorContraseña').value.trim();
    const telefono = document.getElementById('tutorTelefono').value.trim();

    if (!nombre || !apellido || !correo || !contraseña || !telefono) return alert('Todos los campos son obligatorios.');

    // --- INICIO DE LA VALIDACIÓN DEL CORREO ELECTRÓNICO ---
    if (!correo.endsWith('@luiscarlosgalansarmiento.edu.co')) {
        return alert('El correo electrónico debe terminar con "@luiscarlosgalansarmiento.edu.co". Por favor, verifica.');
    }
    // --- FIN DE LA VALIDACIÓN DEL CORREO ELECTRÓNICO ---

    const res = await fetch('/api/tutores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_tutorlegal: nombre, apellido_tutorlegal: apellido, correo_tutorlegal: correo, contraseña_tutorlegal: contraseña, telefono_tutorlegal: telefono })
    });
    if (!res.ok) return alert('Error al agregar tutor');
    fetchTutores();
    document.getElementById('tutorNombre').value = '';
    document.getElementById('tutorApellido').value = '';
    document.getElementById('tutorCorreo').value = '';
    document.getElementById('tutorContraseña').value = '';
    document.getElementById('tutorTelefono').value = '';
}

// ----------- Materias -----------
async function fetchMaterias() {
    const res = await fetch('/api/materias');
    const data = await res.json();
    const list = document.getElementById('materiaList');
    if (!list) return;
    list.innerHTML = '';
    data.forEach(materia => {
        const li = document.createElement('li');
        li.textContent = `Materia: ${materia.nombre_materia}`;
        list.appendChild(li);
    });
}

async function addMateria() {
    const nombre = document.getElementById('materiaNombre').value.trim();
    if (!nombre) return alert('Campo requerido.');
    const res = await fetch('/api/materias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_materia: nombre })
    });
    if (!res.ok) return alert('Error al agregar materia');
    fetchMaterias();
    document.getElementById('materiaNombre').value = '';
}

// ----------- Asistencias -----------
async function fetchAsistencias() {
    const res = await fetch('/api/asistencias');
    const data = await res.json();
    const list = document.getElementById('asistenciaList');
    if (!list) return;
    list.innerHTML = '';
    data.forEach(a => {
        const li = document.createElement('li');
        li.textContent = `Estudiante ID ${a.id_estudiante} - ${a.fecha_asistencia} ${a.hora_asistencia}`;
        list.appendChild(li);
    });
}

async function addAsistencia() {
    const fecha = document.getElementById('asistenciaFecha').value;
    const hora = document.getElementById('asistenciaHora').value;
    const estudianteId = document.getElementById('asistenciaEstudiante').value;

    if (!fecha || !hora || !estudianteId) return alert('Completa todos los campos de asistencia.');

    const res = await fetch('/api/asistencias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fecha_asistencia: fecha, hora_asistencia: hora, id_estudiante: estudianteId })
    });

    if (!res.ok) {
        const error = await res.json();
        return alert(error.error || 'Error al registrar asistenciaa');
    }

    fetchAsistencias();
    document.getElementById('asistenciaFecha').value = '';
    document.getElementById('asistenciaHora').value = '';
    document.getElementById('asistenciaEstudiante').value = '';
}

// ----------- Excusas -----------
async function fetchExcusas() {
    const res = await fetch('/api/excusas');
    const data = await res.json();
    const list = document.getElementById('excusaList');
    if (!list) return;
    list.innerHTML = '';
    data.forEach(e => {
        const li = document.createElement('li');
        li.textContent = `Estudiante ID ${e.id_estudiante} - ${e.fecha_excusa} ${e.hora_excusa}`;
        list.appendChild(li);
    });
}

async function addExcusa() {
    const fecha = document.getElementById('excusaFecha').value;
    const hora = document.getElementById('excusaHora').value;
    const correo = document.getElementById('excusaCorreo').value.trim();
    const idMateria = document.getElementById('excusaMateria').value;
    const idProfesor = document.getElementById('excusaProfesor').value;
    const idEstudiante = document.getElementById('excusaEstudiante').value;
    const idSecretaria = document.getElementById('excusaSecretaria').value;

    if (!fecha || !hora || !correo || !idMateria || !idProfesor || !idEstudiante || !idSecretaria) {
        return alert('Completa todos los campos de excusa.');
    }

    // --- INICIO DE LA VALIDACIÓN DEL CORREO ELECTRÓNICO ---
    if (!correo.endsWith('@luiscarlosgalansarmiento.edu.co')) {
        return alert('El correo electrónico debe terminar con "@luiscarlosgalansarmiento.edu.co". Por favor, verifica.');
    }
    // --- FIN DE LA VALIDACIÓN DEL CORREO ELECTRÓNICO ---

    const res = await fetch('/api/excusas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fecha_excusa: fecha,
            hora_excusa: hora,
            correo_secretaria: correo,
            id_materia: idMateria,
            id_profesor: idProfesor,
            id_estudiante: idEstudiante,
            id_secretaria: idSecretaria
        })
    });

    if (!res.ok) return alert('Error al registrar excusa');
    fetchExcusas();
    document.getElementById('excusaFecha').value = '';
    document.getElementById('excusaHora').value = '';
    document.getElementById('excusaCorreo').value = '';
    document.getElementById('excusaMateria').value = '';
    document.getElementById('excusaProfesor').value = '';
    document.getElementById('excusaEstudiante').value = '';
    document.getElementById('excusaSecretaria').value = '';
}
