# Cambios por hacer

## En `index.html` y `style.css`

- Las opciones del dashboard **no deben tener scroll** ni estar **flotantes**.
- Deben mostrarse como parte **integrada del dashboard**.
- Ejemplo visual proporcionado:  
  ![alt text](image.png)
- Al abrir el dashboard, este debe estar **vacío** o mostrar un **mensaje tenue** como _"Bienvenido"_.
- La fuente de la opción **CRUD** está **demasiado grande**, debe ajustarse.
- En general, se debe **mejorar la UI** para que sea más limpia y profesional.

---

## En `script.js`

- Actualmente, los datos del estudiante se obtienen correctamente con `document.getElementById(...)`.
- Sin embargo, para otros usuarios, **algunos campos se están obteniendo con `prompt`**, lo cual **no debe usarse**.
- Todos los datos deben obtenerse únicamente con `document.getElementById(...)`.

### Validaciones y Alertas

- Mejorar los **mensajes de error**:
  - En lugar de mensajes genéricos como _"Error al agregar estudiante"_, debe especificar, por ejemplo:  
    _"Error: El correo ingresado no es válido."_
- Mejorar la **interfaz visual de los `alerts`**:
  - Que tengan un diseño más amigable, con **colores apropiados** según el tipo de mensaje (error, éxito, advertencia).
- **Validar todos los campos** antes de enviar la información.
- Asegurar que todos los datos **se ingresen en mayúsculas**, para que se guarden en la base de datos en ese formato.
- **Comentar más el código**, explicando qué hace cada sección importante.

---

# Próxima entrega

- Todas las observaciones anteriores deben estar implementadas.
- Continuar con el desarrollo de las funciones del CRUD:
  - [ ] **Eliminar**
  - [ ] **Actualizar**
  - [ ] **Ver**
