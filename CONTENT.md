# Index of Content

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

-----

# Content

## ¿Qué es React?

Es una librería de javascript basada en Ecma Scrip de código abierto desarrollada por Facebook enfocada en la creación de interfaces de usuarios, a través del desarrollo de componentes reutilizables. React puede ser empleado no solo en el lado del cliente si no que también puede ser representado en el servidor.

React permite desarrollar todo tipo de aplicaciones web e incluso aplicaciones para móviles. React por si misma es considerada una librería y no un framework de desarrollo, pero sus funcionalidades pueden igualar a cualquier framework de frontend en el mercado debido a la infinidad de módulos, y componentes disponibles en todo su ecosistema.

## ¿Cómo funciona React? 

React permite identificar el estado de los componentes y actualizar el DOM en tiempo real, de forma rápida y sencilla. Cada vez que un estado es modificado, React ejecuta sus disparadores para evaluar los cambios aplicado, identificando a través del DOM virtual los segmentos modificados y representarolos sobre el DOM real reflejando así la actualización de la página.

A pesar de parecer un proceso largo, React tiene un algoritmo optimizado para identificar las modificaciones en el DOM, empleando sub árboles en la estructura del DOM, recorriendo de forma jerárquica para alcanzar los nodos a actualizar de forma más eficiente previendo así el recorrido innecesario a través del DOM.

## Componentes

React se enfoca en componentes. Pero ¿Qué es un componente? en el entorno de ReactJS se puede definir como un elemento visual que es capaz de recibir propiedad externas y posee un estado propio siendo capaz de implementar su propia lógica de renderizado. Los componentes en React pueden ser de diversos tipos, entre ellos están los statefull y stateless.

Los componentes statefull son basado en clases encapsuladas y poseen un estado que permite manipular la actualización del dom. Cada cambio en el estado o en las propiedades recibidas resultan en un renderizado nuevo.

Los componentes stateless, son componentes más simples que los statefull, son simples funciones de javascript que los parámetros recibidos son las propiedades externas, de igual manera cada modificación en estas propiedades resultan en un nuevo renderizado. Los componente stateless no manejan un estado propio.

## Ciclo de vida de React.

Todos los componentes de React tienen un ciclo de vida. La diferencia de los componentes stateless y statefull en este aspecto, es que los stateless no permiten intervenir en las etapas de forma directa aún cuando estos también las implementan.

El ciclo de vida de un componente se puede definir en tres etapas:
1. Construcción y Montaje
1. Actualización
1. Destrucción

Estas etapas poseen a su vez diferentes momentos que pueden repetirse entre ellas.

Existe una excepción para el ciclo de vida conocido como Manejo de errores.

Los métodos son abstractos, permitiendo estos declararlo solo si van a ser modificados. 

### Construcción y montado

Esta fase ocurre solo una vez cuando el componente es montado en la interfaz, esta fase se divide en 4 funciones, las cuales se ejecutan en orden secuencial.

#### constructor(props)
Este método es propio de las clases de javascript, es ejecutado al instanciar la clase. Permite definir el estado inicial, y configurar las diferentes funciones, variables y propiedades internas que se deseen emplear.

#### componentWillMount()
Es llamado justo antes que el componente sea montado en el DOM, permite manipular las propiedades y el estado inicial antes de ser renderizado.

#### render()
Genera la interfaz gráfica, retorna una etiqueta JSX que envuelve el contenido HTML a mostrar en la página. Generar modificaciones de estado desde este método puede causar un ciclo infinito.

#### componentDidMount()
Se ejecuta una vez el componente fue renderizado y es mostrado por el navegador. Permite interactuar con el componente, el DOM y las otras APIS del navegador.

### Actualización
Esta fase es ejecutada cada vez que un estado o propiedad es actualizada.

#### componentWillReceiveProps(nextProps)
Cada vez que un nuevo grupo de propiedades es enviado al componente este método es ejecutado incluso si las propiedades no han cambiado.

#### shouldComponentUpdate(nextProps, nextState)
Este componente permite manipular la actualización (renderización) del componente como tal, debe retornar un booleando que identifica si se debe ejecutar el método de render.

#### componentWillUpdate(nextProps, nextState)
Una vez el método anterior retornó true, permite manejar las propiedades y el estado previo a ser renderizado.

#### render()
Genera la interfaz gráfica, el comportamiento es el mismo que el render() explicado en la fase de montaje.

#### componentDidUpdate(prevProps, prevState)
Es similar al método componentDidMount.

### Desmontado

#### componentWillUnmount()
Este método permite limpiar cualquier funcionalidad que pueda quedar persistente cuando ya el componente no exista justo antes de su destrucción. Es importante realizar la limpieza para preveer que algún hilo quede abierto y al terminar su ejecución intente actualizar un componente que no existe generando un error.

### Manejo de errores

Esta fase auxiliar solo es ejecutada si existe algún error al intentar renderizar un componente.

#### componentDidCatch()
Al detectar un error este método es ejecutado, siendo presentado solo de padre a hijo.

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



# TODO

## Usando librerías externas

React es una librería que cuenta con un extenso ecosistema de aplicaciones que le permiten implementar funcionalidades de forma fácil y sencilla. Estos componentes se encuentra publicados en el registry de npm. (https://www.npmjs.com/)

Las librerías son instaladas a través de npm o yarn, los cuales son gestores de paquetes y estas son importada a para su uso desde el código fuente.

## ¿Qué es redux?

Es un patrón arquitectónico, que permite manejar el estado de la aplicación manteniendo un flujo de datos sencillo. Al igual que los estados del componente, redux permite almacenar y modificar estados, con la ventaja que este almacenamiento es capaz.

Redux interactúa con los componetes a través de tres elementos:

## Actions
Permite ejecutar acciones con las que el usuario es capaz de interactuar.

## Reducers
Permite modificar el estado, recibiendo los datos desde los actions y retornando el nuevo estado.

## Store
Almacena los datos.

## View
Es la capa de visualización.

## Estructuras y directorio

React no restringe el directorio, el desarrollador tiene la libertad de usar la estructura que desee. En el curso emplearemos la siguiente estructura:
- actions
- components
- containers
- reducers

## Componentes vs contenedores

Para emplear redux, separaremos los componentes en dos tipos, componentes funcionales y representacionales.

### Componentes

Los componentes funcionales se encargan de recibir los datos y procesarlos, así como renderizarlos.

### Contenedores

Los contenedores, emplean los componentes para organizar la vista final y procesar los datos.

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

## React Router
## Implementando un menú.

## Task 5:
* Implementar react-redux manteninendo las opciones de menú.


## Links

https://desarrolloweb.com/articulos/que-es-react-motivos-uso.html

https://devcode.la/blog/como-funciona-reactjs/

https://medium.com/@alonsus91/tipos-de-componentes-en-reactjs-f387a6f8e2b7