// script.js extendido para todos los módulos principales del sistema educativo

document.addEventListener('DOMContentLoaded', () => {
// Usamos document.getElementById() en lugar de prompt() para obtener los datos de forma más segura e interactiva desde el formulario.
    
    showSection('bienvenido');  // Muestra la sección de bienvenida en nuestra pagina
    fetchEstudiantes(); // Obtiene los datos de Estudiantes
    fetchProfesores(); // Obtiene los datos de Profesores
    fetchSecretarias(); // Obtiene los datos de Secretarias
    fetchGrupos(); // Obtiene los datos de Grupos
    fetchTutores(); // Obtiene los datos de Tutores
    fetchMaterias(); // Obtiene los datos de Materias
    fetchRectores(); // Obtiene los datos de Rectores
    fetchCoordinadores(); // Obtiene los datos de coordinadores
    fetchAsistencias(); // Obtiene los datos de Asistencias
    fetchExcusas(); // Obtiene los datos de Excusas
});
// Muestra la sección activa y oculta las demás
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// ----------- Estudiantes -----------
// Obtiene y muestra la lista de estudiantes
async function addEstudiante() {
    const nombre = document.getElementById('estudianteNombre').value.trim();
    const apellido = document.getElementById('estudianteApellido').value.trim();
    const edadStr = document.getElementById('estudianteEdad').value.trim();
    const correo = document.getElementById('estudianteCorreo').value.trim();
    const telefono = document.getElementById("estudianteTelefono").value.trim();
    const contrasena = document.getElementById("estudianteContrasena").value.trim();

    let mensajeError = 'Por favor, corrige los siguientes errores:\n';
    let hayError = false;
    const edad = parseInt(edadStr, 10);

    // Verificamos si el nombre está vacío y si la primera letra es mayúscula
    if (!nombre) {
        mensajeError += '- El nombre es requerido.\n';
        hayError = true;
    } else if (nombre.charAt(0) !== nombre.charAt(0).toUpperCase()) {
        mensajeError += '- El nombre debe comenzar con mayúscula.\n';
        hayError = true;
    }

    // Verificamos si el apellido está vacío y si la primera letra es mayúscula
    if (!apellido) {
        mensajeError += '- El apellido es requerido.\n';
        hayError = true;
    } else if (apellido.charAt(0) !== apellido.charAt(0).toUpperCase()) {
        mensajeError += '- El apellido debe comenzar con mayúscula.\n';
        hayError = true;
    }

    // Verificamos si la edad está vacía, es un número y está entre 5 y 25
    if (!edadStr) {
        mensajeError += '- La edad es requerida.\n';
        hayError = true;
    } else if (isNaN(edad) || edad < 5 || edad > 25) {
        mensajeError += '- La edad debe ser un número entre 5 y 25.\n';
        hayError = true;
    }

    // Verificamos si el correo está vacío y si termina con "@edu.co"
    if (!correo) {
        mensajeError += '- El correo electrónico es requerido.\n';
        hayError = true;
    } else if (!correo.endsWith('@edu.co')) {
        mensajeError += '- El correo electrónico debe terminar con "@edu.co".\n';
        hayError = true;
    }

    // Verificamos si el teléfono está vacío, tiene 10 dígitos y son números
    if (!telefono) {
        mensajeError += '- El teléfono es requerido.\n';
        hayError = true;
    } else if (telefono.length !== 10 || isNaN(parseInt(telefono, 10))) {
        mensajeError += '- El teléfono debe tener 10 dígitos numéricos.\n';
        hayError = true;
    }

    // Verificamos si la contraseña está vacía
    if (!contrasena) {
        mensajeError += '- La contraseña es requerida.\n';
        hayError = true;
    }

    // Si hay algún error, mostramos el mensaje y detenemos la función
    if (hayError) {
        return alert(mensajeError);
    }

    const res = await fetch('/api/estudiantes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_estudiante: nombre, apellido_estudiante: apellido, edad_estudiante: edad, correo_estudiante: correo, contraseña_estudiante: contrasena, telefono_estudiante: telefono })
    });

    if (!res.ok) return alert('Error al agregar estudiante');
    fetchEstudiantes();
}
// Agrega un nuevo profesor después de validar los datos
// ----------- Profesores -----------
async function addProfesor() {
    const nombre = document.getElementById('profesorNombre').value.trim();
    const apellido = document.getElementById('profesorApellido').value.trim();
    const identificacion = document.getElementById('profesorNumero').value.trim();
    const correo = document.getElementById('profesorCorreo').value.trim();
    const asignatura = document.getElementById('profesorAsignatura').value.trim();
    const telefono = document.getElementById("profesorTelefono").value.trim();
    const contrasena = document.getElementById("profesorContrasena").value.trim();

    let mensajeError = 'Por favor, corrige los siguientes errores:\n';
    let hayError = false;

    // Verificamos si el nombre está vacío y si la primera letra es mayúscula
    if (!nombre) {
        mensajeError += '- El nombre es requerido.\n';
        hayError = true;
    } else if (nombre.charAt(0) !== nombre.charAt(0).toUpperCase()) {
        mensajeError += '- El nombre debe comenzar con mayúscula.\n';
        hayError = true;
    }

    // Verificamos si el apellido está vacío y si la primera letra es mayúscula
    if (!apellido) {
        mensajeError += '- El apellido es requerido.\n';
        hayError = true;
    } else if (apellido.charAt(0) !== apellido.charAt(0).toUpperCase()) {
        mensajeError += '- El apellido debe comenzar con mayúscula.\n';
        hayError = true;
    }

    // Verificamos si la identificación está vacía y si es numérica
    if (!identificacion) {
        mensajeError += '- El número de identificación es requerido.\n';
        hayError = true;
    } else if (isNaN(parseInt(identificacion, 10))) {
        mensajeError += '- El número de identificación debe ser numérico.\n';
        hayError = true;
    }

    // Verificamos si el correo está vacío y si termina con "@edu.co"
    if (!correo) {
        mensajeError += '- El correo electrónico es requerido.\n';
        hayError = true;
    } else if (!correo.endsWith('@edu.co')) {
        mensajeError += '- El correo electrónico debe terminar con "@edu.co".\n';
        hayError = true;
    }

    // Verificamos si la asignatura está vacía
    if (!asignatura) {
        mensajeError += '- La asignatura es requerida.\n';
        hayError = true;
    } else if (asignatura.charAt(0) !== asignatura.charAt(0).toUpperCase()) {
        mensajeError += '- La asignatura debe comenzar con mayúscula.\n';
        hayError = true;
    }

    // Verificamos si el teléfono está vacío, tiene 10 dígitos y son números
    if (!telefono) {
        mensajeError += '- El teléfono es requerido.\n';
        hayError = true;
    } else if (telefono.length !== 10 || isNaN(parseInt(telefono, 10))) {
        mensajeError += '- El teléfono debe tener 10 dígitos numéricos.\n';
        hayError = true;
    }

    // Verificamos si la contraseña está vacía
    if (!contrasena) {
        mensajeError += '- La contraseña es requerida.\n';
        hayError = true;
    }

    // Si hay algún error, mostramos el mensaje y detenemos la función
    if (hayError) {
        return alert(mensajeError);
    }

    const res = await fetch('/api/profesores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_profesor: nombre, apellido_profesor: apellido, identificacion_profesor: identificacion, correo_profesor: correo, contraseña_profesor: contraseña, telefono_profesor: telefono })
    });

    if (!res.ok) return alert('Error al agregar profesor');
    fetchProfesores();
}
// Agrega una nueva secretaria después de validar los datos
// ----------- Secretarias -----------
async function addSecretaria() {
    const nombre = document.getElementById('secretariaNombre').value.trim();
    const apellido = document.getElementById('secretariaApellido').value.trim();
    const identificacion = document.getElementById('secretariaNumero').value.trim();
    const correo = document.getElementById('secretariaCorreo').value.trim();
    const telefono = document.getElementById("secretariaTelefono").value.trim();
    const contrasena = document.getElementById("secretariaContrasena").value.trim();

    let mensajeError = 'Por favor, corrige los siguientes errores:\n';
    let hayError = false;

    // Verificamos si el nombre está vacío y si la primera letra es mayúscula
    if (!nombre) {
        mensajeError += '- El nombre es requerido.\n';
        hayError = true;
    } else if (nombre.charAt(0) !== nombre.charAt(0).toUpperCase()) {
        mensajeError += '- El nombre debe comenzar con mayúscula.\n';
        hayError = true;
    }

    // Verificamos si el apellido está vacío y si la primera letra es mayúscula
    if (!apellido) {
        mensajeError += '- El apellido es requerido.\n';
        hayError = true;
    } else if (apellido.charAt(0) !== apellido.charAt(0).toUpperCase()) {
        mensajeError += '- El apellido debe comenzar con mayúscula.\n';
        hayError = true;
    }

    // Verificamos si la identificación está vacía y si es numérica
    if (!identificacion) {
        mensajeError += '- El número de identificación es requerido.\n';
        hayError = true;
    } else if (isNaN(parseInt(identificacion, 10))) {
        mensajeError += '- El número de identificación debe ser numérico.\n';
        hayError = true;
    }

    // Verificamos si el correo está vacío y si termina con "@edu.co"
    if (!correo) {
        mensajeError += '- El correo electrónico es requerido.\n';
        hayError = true;
    } else if (!correo.endsWith('@edu.co')) {
        mensajeError += '- El correo electrónico debe terminar con "@edu.co".\n';
        hayError = true;
    }

    // Verificamos si el teléfono está vacío, tiene 10 dígitos y son números
    if (!telefono) {
        mensajeError += '- El teléfono es requerido.\n';
        hayError = true;
    } else if (telefono.length !== 10 || isNaN(parseInt(telefono, 10))) {
        mensajeError += '- El teléfono debe tener 10 dígitos numéricos.\n';
        hayError = true;
    }

    // Verificamos si la contraseña está vacía
    if (!contrasena) {
        mensajeError += '- La contraseña es requerida.\n';
        hayError = true;
    }

    // Si hay algún error, mostramos el mensaje y detenemos la función
    if (hayError) {
        return alert(mensajeError);
    }

    const res = await fetch('/api/secretarias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_secretaria: nombre, apellido_secretaria: apellido, identificacion_secretaria: identificacion, correo_secretaria: correo, contraseña_secretaria: contraseña, telefono_secretaria: telefono })
    });

    if (!res.ok) return alert('Error al agregar secretaria');
    fetchSecretarias();
}
// Agrega un nuevo rector después de validar los datos
// ----------- Rectores -----------
async function addRector() {
    const nombre = document.getElementById('rectorNombre').value.trim();
    const apellido = document.getElementById('rectorApellido').value.trim();
    const identificacion = document.getElementById('rectorNumero').value.trim();
    const correo = document.getElementById('rectorCorreo').value.trim();
    const telefono = document.getElementById("rectorTelefono").value.trim();
    const contrasena = document.getElementById("rectorContrasena").value.trim();

    let mensajeError = 'Por favor, corrige los siguientes errores:\n';
    let hayError = false;

    // Verificamos si el nombre está vacío y si la primera letra es mayúscula
    if (!nombre) {
        mensajeError += '- El nombre es requerido.\n';
        hayError = true;
    } else if (nombre.charAt(0) !== nombre.charAt(0).toUpperCase()) {
        mensajeError += '- El nombre debe comenzar con mayúscula.\n';
        hayError = true;
    }

    // Verificamos si el apellido está vacío y si la primera letra es mayúscula
    if (!apellido) {
        mensajeError += '- El apellido es requerido.\n';
        hayError = true;
    } else if (apellido.charAt(0) !== apellido.charAt(0).toUpperCase()) {
        mensajeError += '- El apellido debe comenzar con mayúscula.\n';
        hayError = true;
    }

    // Verificamos si la identificación está vacía y si es numérica
    if (!identificacion) {
        mensajeError += '- El número de identificación es requerido.\n';
        hayError = true;
    } else if (isNaN(parseInt(identificacion, 10))) {
        mensajeError += '- El número de identificación debe ser numérico.\n';
        hayError = true;
    }

    // Verificamos si el correo está vacío y si termina con "@edu.co"
    if (!correo) {
        mensajeError += '- El correo electrónico es requerido.\n';
        hayError = true;
    } else if (!correo.endsWith('@edu.co')) {
        mensajeError += '- El correo electrónico debe terminar con "@edu.co".\n';
        hayError = true;
    }

    // Verificamos si el teléfono está vacío, tiene 10 dígitos y son números
    if (!telefono) {
        mensajeError += '- El teléfono es requerido.\n';
        hayError = true;
    } else if (telefono.length !== 10 || isNaN(parseInt(telefono, 10))) {
        mensajeError += '- El teléfono debe tener 10 dígitos numéricos.\n';
        hayError = true;
    }

    // Verificamos si la contraseña está vacía
    if (!contrasena) {
        mensajeError += '- La contraseña es requerida.\n';
        hayError = true;
    }

    // Si hay algún error, mostramos el mensaje y detenemos la función
    if (hayError) {
        return alert(mensajeError);
    }

    const res = await fetch('/api/rectores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_rector: nombre, apellido_rector: apellido, identificacion_rector: identificacion, correo_rector: correo, contraseña_rector: contraseña, telefono_rector: telefono })
    });

    if (!res.ok) return alert('Error al agregar rector');
    fetchRectores();
}
// Agrega un nuevo coordinador después de validar los datos
// ----------- Coordinadores -----------
async function addCoordinador() {
    const nombre = document.getElementById('coordinadorNombre').value.trim();
    const apellido = document.getElementById('coordinadorApellido').value.trim();
    const identificacion = document.getElementById('coordinadorNumero').value.trim();
    const correo = document.getElementById('coordinadorCorreo').value.trim();
    const telefono = document.getElementById("coordinadorTelefono").value.trim();
    const contrasena = document.getElementById("coordinadorContrasena").value.trim();

    let mensajeError = 'Por favor, corrige los siguientes errores:\n';
    let hayError = false;

    // Verificamos si el nombre está vacío y si la primera letra es mayúscula
    if (!nombre) {
        mensajeError += '- El nombre es requerido.\n';
        hayError = true;
    } else if (nombre.charAt(0) !== nombre.charAt(0).toUpperCase()) {
        mensajeError += '- El nombre debe comenzar con mayúscula.\n';
        hayError = true;
    }

    // Verificamos si el apellido está vacío y si la primera letra es mayúscula
    if (!apellido) {
        mensajeError += '- El apellido es requerido.\n';
        hayError = true;
    } else if (apellido.charAt(0) !== apellido.charAt(0).toUpperCase()) {
        mensajeError += '- El apellido debe comenzar con mayúscula.\n';
        hayError = true;
    }

    // Verificamos si la identificación está vacía y si es numérica
    if (!identificacion) {
        mensajeError += '- El número de identificación es requerido.\n';
        hayError = true;
    } else if (isNaN(parseInt(identificacion, 10))) {
        mensajeError += '- El número de identificación debe ser numérico.\n';
        hayError = true;
    }

    // Verificamos si el correo está vacío y si termina con "@edu.co"
    if (!correo) {
        mensajeError += '- El correo electrónico es requerido.\n';
        hayError = true;
    } else if (!correo.endsWith('@edu.co')) {
        mensajeError += '- El correo electrónico debe terminar con "@edu.co".\n';
        hayError = true;
    }

    // Verificamos si el teléfono está vacío, tiene 10 dígitos y son números
    if (!telefono) {
        mensajeError += '- El teléfono es requerido.\n';
        hayError = true;
    } else if (telefono.length !== 10 || isNaN(parseInt(telefono, 10))) {
        mensajeError += '- El teléfono debe tener 10 dígitos numéricos.\n';
        hayError = true;
    }

    // Verificamos si la contraseña está vacía
    if (!contrasena) {
        mensajeError += '- La contraseña es requerida.\n';
        hayError = true;
    }

    // Si hay algún error, mostramos el mensaje y detenemos la función
    if (hayError) {
        return alert(mensajeError);
    }

    const res = await fetch('/api/coordinadores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_coordinador: nombre, apellido_coordinador: apellido, identificacion_coordinador: identificacion, correo_coordinador: correo, contraseña_coordinador: contraseña, telefono_coordinador: telefono })
    });

    if (!res.ok) return alert('Error al agregar coordinador');
    fetchCoordinadores();
} 
// Agrega un nuevo grupo después de validar los datos
// ----------- Grupos -----------
async function addGrupo() {
    const nombre = document.getElementById('grupoNombre').value.trim();

    // Verificamos si el nombre del grupo está vacío
    if (!nombre) {
        return alert('Por favor, ingresa el nombre del grupo.');
    } else if (nombre.charAt(0) !== nombre.charAt(0).toUpperCase()) {
        return alert('El nombre del grupo debe comenzar con mayúscula.');
    }

    const res = await fetch('/api/grupos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_grupo: nombre })
    });
    if (!res.ok) return alert('Error al agregar grupo');
    fetchGrupos();
    document.getElementById('grupoNombre').value = '';
}
// Agrega una nueva asistencia después de validar los datos
// ----------- Asistencias -----------
async function addAsistencia() {
    const fecha = document.getElementById('asistenciaFecha').value;
    const hora = document.getElementById('asistenciaHora').value;
    const estudianteId = document.getElementById('asistenciaEstudiante').value;

    let mensajeError = 'Por favor, corrige los siguientes errores:\n';
    let hayError = false;

    // Verificamos si la fecha está vacía
    if (!fecha) {
        mensajeError += '- La fecha de asistencia es requerida.\n';
        hayError = true;
    }

    // Verificamos si la hora está vacía
    if (!hora) {
        mensajeError += '- La hora de asistencia es requerida.\n';
        hayError = true;
    }

    // Verificamos si el ID del estudiante está vacío
    if (!estudianteId) {
        mensajeError += '- El ID del estudiante es requerido.\n';
        hayError = true;
    } else if (isNaN(parseInt(estudianteId, 10))) {
        mensajeError += '- El ID del estudiante debe ser un número.\n';
        hayError = true;
    }

    // Si hay algún error, mostramos el mensaje y detenemos la función
    if (hayError) {
        return alert(mensajeError);
    }

    const res = await fetch('/api/asistencias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fecha_asistencia: fecha, hora_asistencia: hora, id_estudiante: estudianteId })
    });

    if (!res.ok) {
        const error = await res.json();
        return alert(error.error || 'Error al registrar asistencia');
    }

    fetchAsistencias();
    document.getElementById('asistenciaFecha').value = '';
    document.getElementById('asistenciaHora').value = '';
    document.getElementById('asistenciaEstudiante').value = '';
}
// Agrega una nueva excusa después de validar los datos
// ----------- Excusas -----------
async function addExcusa() {
    const fecha = document.getElementById('excusaFecha').value;
    const hora = document.getElementById('excusaHora').value;
    const correo = document.getElementById('excusaCorreo').value.trim();
    const idMateria = document.getElementById('excusaMateria').value;
    const idProfesor = document.getElementById('excusaProfesor').value;
    const idEstudiante = document.getElementById('excusaEstudiante').value;
    const idSecretaria = document.getElementById('excusaSecretaria').value;

    let mensajeError = 'Por favor, corrige los siguientes errores:\n';
    let hayError = false;

    // Verificamos si la fecha está vacía
    if (!fecha) {
        mensajeError += '- La fecha de la excusa es requerida.\n';
        hayError = true;
    }

    // Verificamos si la hora está vacía
    if (!hora) {
        mensajeError += '- La hora de la excusa es requerida.\n';
        hayError = true;
    }

    // Verificamos si el correo de la secretaria está vacío y si termina con "@edu.co"
    if (!correo) {
        mensajeError += '- El correo de la secretaria es requerido.\n';
        hayError = true;
    } else if (!correo.endsWith('@edu.co')) {
        mensajeError += '- El correo de la secretaria debe terminar con "@edu.co".\n';
        hayError = true;
    }

    // Verificamos si el ID de la materia está vacío y es un número
    if (!idMateria) {
        mensajeError += '- El ID de la materia es requerido.\n';
        hayError = true;
    } else if (isNaN(parseInt(idMateria, 10))) {
        mensajeError += '- El ID de la materia debe ser un número.\n';
        hayError = true;
    }

    // Verificamos si el ID del profesor está vacío y es un número
    if (!idProfesor) {
        mensajeError += '- El ID del profesor es requerido.\n';
        hayError = true;
    } else if (isNaN(parseInt(idProfesor, 10))) {
        mensajeError += '- El ID del profesor debe ser un número.\n';
        hayError = true;
    }

    // Verificamos si el ID del estudiante está vacío y es un número
    if (!idEstudiante) {
        mensajeError += '- El ID del estudiante es requerido.\n';
        hayError = true;
    } else if (isNaN(parseInt(idEstudiante, 10))) {
        mensajeError += '- El ID del estudiante debe ser un número.\n';
        hayError = true;
    }

    // Verificamos si el ID de la secretaria está vacío y es un número
    if (!idSecretaria) {
        mensajeError += '- El ID de la secretaria es requerido.\n';
        hayError = true;
    } else if (isNaN(parseInt(idSecretaria, 10))) {
        mensajeError += '- El ID de la secretaria debe ser un número.\n';
        hayError = true;
    }

    // Si hay algún error, mostramos el mensaje y detenemos la función
    if (hayError) {
        return alert(mensajeError);
    }

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