# Demo ejercicio SHOUTBOX de Node Js in Action

Ruta:

v1/api

## Sign In y Sign Up:

|    Path     | Method |       Description       |            Body            |
| :---------: | :----: | :---------------------: | :------------------------: |
| auth/signin |  POST  |     Iniciar sesión      |     username, password     |
| auth/signup |  POST  | Registrar nuevo usuario | username, password y gmail |

## Artículos

|            Path            | Method |                Description                |             Body             | Authorization |
| :------------------------: | :----: | :---------------------------------------: | :--------------------------: | :-----------: |
|          article/          |  GET   |             Obtener artículos             |                              |     false     |
|     article/:idArticle     |  GET   |        Obtener un artículo por id         |                              |     false     |
|    article/user/:idUser    |  GET   | Obtener artículos por el id de un usuario |                              |     true      |
|          article/          |  POST  |          Crear un nuevo artículo          | name, slug, content, author  |     true      |
| article/comment/:idArticle |  POST  | Agregar un nuevo comentario a un artículo | comment, description, author |     true      |
|     article/:idArticle     |  PUT   |      Modificar un artículo por su id      |     name, slug, content      |     true      |
|          article/          | DELETE |      Eliminar un artículo por su id       |                              |     true      |
