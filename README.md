# Proyecto Base Front

Este proyecto es una aplicación móvil construida con React Native utilizando Expo.

## Tabla de Contenidos

- [Introducción](#introducción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Uso](#uso)
- [Scripts](#scripts)
- [Dependencias](#dependencias)
- [Contribuyendo](#contribuyendo)
- [Licencia](#licencia)

## Introducción

Esta aplicación es un proyecto de [React Native](https://reactnative.dev/) iniciado con [Expo](https://expo.dev/). 
El propósito es crear una base para proyectos futuros.

## Estructura del Proyecto

El proyecto sigue una estructura modular para mantener el código limpio y organizado:

### Carpetas y Archivos

- **.expo/** y **.expo-shared/**: Carpetas generadas automáticamente por Expo.
- **assets/**: Contiene recursos estáticos como fuentes, imágenes e íconos.
  - **fonts/**: Fuentes personalizadas utilizadas en la app.
  - **images/**: Imágenes utilizadas en la app.
  - **icons/**: Íconos utilizados en la app.
- **node_modules/**: Dependencias del proyecto instaladas a través de npm.
- **src/**: Contiene el código fuente de la aplicación.
  - **components/**: Componentes reutilizables.
  - **constants/**: Constantes utilizadas en toda la app.
  - **hooks/**: Hooks personalizados de React.
  - **navigation/**: Configuraciones de navegación y navegadores.
  - **screens/**: Componentes de pantalla.
  - **services/**: Lógica de negocio y servicios.
  - **store/**: Configuración de gestión de estado (ej., Redux).
  - **styles/**: Estilos globales y temas.
  - `App.tsx`: Punto de entrada principal de la aplicación.
- **.gitignore**: Especifica qué archivos y directorios ignorar en el control de versiones.
- **app.json**: Archivo de configuración de Expo.
- **babel.config.js**: Archivo de configuración de Babel.
- **package.json**: Metadatos del proyecto y dependencias.
- **README.md**: Documentación del proyecto (este archivo).

## Instalación

Para configurar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tuusuario/my-react-native-app.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd my-react-native-app
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

Para ejecutar la aplicación en modo desarrollo, utiliza el siguiente comando:
```sh
npx expo start
```

Esto iniciará el servidor de desarrollo de Expo. Luego, puedes usar la aplicación Expo Go en tu dispositivo móvil para escanear el código QR y ejecutar la app.

## Scripts

- `start`: Inicia el servidor de desarrollo de Expo.
- `android`: Abre la app en un emulador de Android.
- `ios`: Abre la app en un simulador de iOS.
- `web`: Ejecuta la app en un navegador web.

Para ejecutar cualquiera de estos scripts, usa:
```sh
npm run <nombre-del-script>

## Dependencias

El proyecto depende de varias dependencias clave, incluyendo pero no limitándose a:

- `react`: ^18.0.0
- `react-native`: ^0.72.0
- `expo`: ^48.0.0
- `react-navigation`: ^6.0.0
- `redux`: ^4.2.0

Para una lista completa de dependencias, consulta el archivo `package.json`.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

