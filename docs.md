# Comandos para iniciar un Nuevo Proyecto en Node.js
## 1. Iniciar un nuevo proyecto en Node
- creará un archivo (package.json) con la configuración por defecto de npm
```
npm init --y
```

## 2. Instalamos el Framework express.js
- descargará e instalará el framework express
```
npm i express
```
- además creará una carpeta (node_modules) desde esta todas las dependencias de express y modifica el archivo package.json con la version de express

## 3. Crear una carpeta llamada (src) en el directorio raiz
- En esta carpeta estará el codigo en entorno de desarrollo (dev)

## 4. (opcional) Configuración GIT
### iniciar un nuevo repositorio GIT
```
git init
```
### creamos dos archivo (.gitignore, README.md)
- .gitignore : ignora los archivos para no subir a un repositorio remoto (github, gitlab, bitbucket)
- README.md : agremos la descripción del proyecto y otros...

### Subir el codigo a GITHUB 
```
git add .
git commit -m "Proyecto Inicial"
```

