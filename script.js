body {
    font-family: 'Poppins', sans-serif;
    background-color: #f5f7fa;
    display: flex;
    justify-content: center;
    margin: 0;
}

.container {
    background-color: #fff;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    width: 100%;
    text-align: center;
    margin-top: 40px;
}

h1 {
    color: #333;
    font-size: 2.5em;
    margin-bottom: 20px;
    font-weight: bold;
    letter-spacing: 1px;
}

p {
    font-size: 1.2em;
    color: #666;
    margin-bottom: 20px;
}

input[type="number"] {
    width: 100%;
    padding: 15px;
    font-size: 1.2em;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    transition: border-color 0.3s ease;
}

input[type="number"]:focus {
    border-color: #007bff;
    outline: none;
}

button {
    background-color: #007bff;
    color: white;
    padding: 15px 30px;
    font-size: 1.2em;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

#resultado, #ultimoResultado {
    margin-top: 30px;
    font-size: 2.2em;
    font-weight: bold;
}

#resultado {
    color: #333;
}

#ultimoResultado {
    color: #666;
}

.shadow {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

#resultado.show, #ultimoResultado.show {
    opacity: 1;
}

#resultado, #ultimoResultado {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
}

/* Estilos para el mapa */
.mapa {
    position: relative;
    margin-top: 30px;
}

.mapa img {
    width: 100%;
    height: auto;
}

/* Zonas del mapa */
.zona {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

/* Añade las posiciones de cada zona */
#zona1 {
    top: 150px; /* Ajusta la posición */
    left: 250px; /* Ajusta la posición */
    width: 200px; /* Ajusta el tamaño */
    height: 100px; /* Ajusta el tamaño */
    background-color: rgba(255, 0, 0, 0.5);
}

#zona2 {
    top: 400px; /* Ajusta la posición */
    left: 50px; /* Ajusta la posición */
    width: 200px; /* Ajusta el tamaño */
    height: 100px; /* Ajusta el tamaño */
    background-color: rgba(0, 255, 0, 0.5);
}

#zona3 {
    top: 50px; /* Ajusta la posición */
    left: 50px; /* Ajusta la posición */
    width: 200px; /* Ajusta el tamaño */
    height: 100px; /* Ajusta el tamaño */
    background-color: rgba(0, 0, 255, 0.5);
}

#zona5 {
    top: 50px; /* Ajusta la posición */
    left: 300px; /* Ajusta la posición */
    width: 200px; /* Ajusta el tamaño */
    height: 100px; /* Ajusta el tamaño */
    background-color: rgba(255, 255, 0, 0.5);
}

#zona6 {
    top: 50px; /* Ajusta la posición */
    left: 550px; /* Ajusta la posición */
    width: 200px; /* Ajusta el tamaño */
    height: 100px; /* Ajusta el tamaño */
    background-color: rgba(255, 0, 255, 0.5);
}

.zona.active {
    opacity: 1;
}
