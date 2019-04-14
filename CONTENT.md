# Content

## Día 1:
1. ¿Qué es react?
1. ¿Cómo funciona React? 
1. Ciclo de vida de React.
1. Ejemplo básico
1. Task 1
1. Task 2

## Día 2:
1. Usando librerías externas
1. ¿Qué es redux?
1. Estructuras y directorio
1. Componentes vs contenedores
1. Acciones y reducers
1. Task 3
1. Task 4


## Día 3
1. React Router
1. Implementando un menú.
1. Task 5
1. Mi primera app

# Tasks

## Task 1:
* Instalar nodeJs.
* Instalar create-react-app.
* Crear una aplicación usando create-react-app.
* Crear una página con el título de la app usando las propiedades del componente App.

## Task 2:
* Crear un formulario:
  * Debe tener un input tipo text.
  * Debe tener un botón de aceptar.
* El formulario debe tener el siguiente comportamiento:
  * Por defecto el botón desactivado.
  * El botón debe activarse solo si el input contiene un string mayor o igual a 3 caracteres.
  * Al dar click en el botón de aceptar el texto del input debe mostrarse en pantalla.

## Task 3:
* Instalar [react-contextmenu](https://www.npmjs.com/package/react-contextmenu)
* Se debe modificar el formulario para que:
  * El input sea tipo password
  * Al darle click en el botón aceptar debe validar que el texto introducido sea "Activar"
* Si el texto es "Activar" debe mostrar un botón para desplegar un menú contextual usando react-contextmenu.
* Si el texto no es "Activar" mostrar mensaje indicando "Error en clave"

## Task 4:
* Implementar redux
  * Instalar redux, redux-thunk y react-redux
  * Crear los directorios para los containers, components, actions, reducer.
  * Crear el store.
  * Crear containers para Home y para Menu.
  * Crear componente para Formulario.
  * Agregar menú para navegar entre el container de Home y de Menu (usando state)
* La aplicación debe contener el siguiente comportamiento:
  * Nombre de la App en todo el sistema
  * Menú de navegación en todo el sistema
  * En Home se mostrará el formulario.
  * En Menú se mostrará el menú contextual.
  * El menú contextual solo debe mostrarse si el texto introducido en el input es "Activar" y se dió click en el botón.

## Task 5:
* Implementar react-redux manteninendo las opciones de menú.

## Task 6:
* Implementar react-native