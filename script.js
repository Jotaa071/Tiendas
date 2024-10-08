document.addEventListener("DOMContentLoaded", function() {
    const tiendasRojas = [9, 22, 147, 17, 29, 44, 55, 59, 63, 85, 132, 135, 161, 162, 165, 179, 180, 282, 283, 284, 285, 286, 287, 288, 289, 290, 18, 24, 53, 112, 142, 157, 171, 175, 178, 235, 240, 259, 700, 45, 110, 114, 119, 125, 128, 130, 137, 139, 141, 143, 146, 167, 168, 176, 177, 184, 191, 249, 255, 263, 264, 266, 295, 296, 601, 707, 31, 32, 33, 46, 48, 50, 54, 57, 123, 136, 149, 156, 159, 229, 233, 243, 244, 268, 292, 502, 504, 506, 507, 41, 134, 138, 181, 256, 262];
    const tiendas = {
        1: "Muelles", 2: "Muelles", 5: "Muelles", 6: "Muelles", 7: "Muelles", 8: "Muelles", 10: "Muelles", 11: "Muelles", 12: "Muelles", 15: "Muelles", 16: "Muelles", 20: "Muelles", 21: "Muelles", 23: "Muelles", 25: "Muelles",
        9: "Zona 1", 18: "Zona 1", 22: "Zona 3", 26: "Zona 4", 28: "Zona 4", 30: "Zona 4", 36: "Zona 4", 40: "Zona 4", 47: "Zona 4", 49: "Zona 4", 51: "Zona 4", 52: "Zona 4", 56: "Zona 4", 183: "Zona 4", 204: "Zona 4", 210: "Zona 4",
        214: "Zona 4", 217: "Zona 4", 220: "Zona 4", 227: "Zona 4", 231: "Zona 4", 232: "Zona 4", 241: "Zona 4", 234: "Zona 5", 503: "Zona 5", 505: "Zona 5", 508: "Zona 5", 509: "Zona 5", 510: "Zona 5", 511: "Zona 5", 512: "Zona 5",
        515: "Zona 5", 516: "Zona 5", 519: "Zona 5", 701: "Zona 5", 702: "Zona 5", 703: "Zona 5", 704: "Zona 5", 705: "Zona 5", 706: "Zona 5", 708: "Zona 5", 709: "Zona 5", 896: "Zona 5", 216: "Zona 6", 218: "Zona 6", 219: "Zona 6",
        221: "Zona 6", 226: "Zona 6", 228: "Zona 6", 237: "Zona 6", 239: "Zona 6", 252: "Zona 6", 253: "Zona 6", 254: "Zona 6", 258: "Zona 6", 271: "Zona 6", 272: "Zona 6", 277: "Zona 6", 278: "Zona 6", 294: "Zona 6", 297: "Zona 6",
        381: "Zona 6", 385: "Zona 6", 386: "Zona 6", 388: "Zona 6", 389: "Zona 6", 390: "Zona 6", 490: "Zona 6", 491: "Zona 6", 42: "Zona 7", 62: "Zona 7", 101: "Zona 7", 109: "Zona 7", 115: "Zona 7", 116: "Zona 7", 118: "Zona 7",
        120: "Zona 7", 144: "Zona 7", 147: "Zona 2", 148: "Zona 7", 150: "Zona 7", 151: "Zona 7", 182: "Zona 7", 187: "Zona 7", 189: "Zona 7", 195: "Zona 7", 198: "Zona 7", 201: "Zona 7", 202: "Zona 7", 203: "Zona 7", 205: "Zona 7",
        206: "Zona 7", 208: "Zona 7", 209: "Zona 7", 211: "Zona 7", 212: "Zona 7", 215: "Zona 7", 17: "Zona 1 Fondo", 29: "Zona 1 Fondo", 44: "Zona 1 Fondo", 55: "Zona 1 Fondo", 59: "Zona 1 Fondo", 63: "Zona 1 Fondo", 85: "Zona 1 Fondo",
        132: "Zona 1 Fondo", 135: "Zona 1 Fondo", 161: "Zona 1 Fondo", 162: "Zona 1 Fondo", 165: "Zona 1 Fondo", 179: "Zona 1 Fondo", 180: "Zona 1 Fondo", 282: "Zona 1 Fondo", 283: "Zona 1 Fondo", 284: "Zona 1 Fondo", 285: "Zona 1 Fondo",
        286: "Zona 1 Fondo", 287: "Zona 1 Fondo", 288: "Zona 1 Fondo", 289: "Zona 1 Fondo", 290: "Zona 1 Fondo", 24: "Zona 1", 53: "Zona 1", 112: "Zona 1", 142: "Zona 1", 157: "Zona 1", 171: "Zona 1", 175: "Zona 1", 178: "Zona 1",
        235: "Zona 1", 240: "Zona 1", 259: "Zona 1", 700: "Zona 1", 45: "Zona 2", 110: "Zona 2", 114: "Zona 2", 119: "Zona 2", 125: "Zona 2", 128: "Zona 2", 130: "Zona 2", 137: "Zona 2", 139: "Zona 2", 141: "Zona 2", 143: "Zona 2",
        146: "Zona 2", 167: "Zona 2", 168: "Zona 2", 176: "Zona 2", 177: "Zona 2", 184: "Zona 2", 191: "Zona 2", 249: "Zona 2", 255: "Zona 2", 263: "Zona 2", 264: "Zona 2", 266: "Zona 2", 295: "Zona 2", 296: "Zona 2", 601: "Zona 2",
        707: "Zona 2", 31: "Zona 3", 32: "Zona 3", 33: "Zona 3", 46: "Zona 3", 48: "Zona 3", 50: "Zona 3", 54: "Zona 3", 57: "Zona 3", 123: "Zona 3", 136: "Zona 3", 149: "Zona 3", 156: "Zona 3", 159: "Zona 3", 229: "Zona 3",
        233: "Zona 3", 243: "Zona 3", 244: "Zona 3", 268: "Zona 3", 292: "Zona 3", 502: "Zona 8", 504: "Zona 8", 506: "Zona 8", 507: "Zona 8", 41: "Zona 9", 134: "Zona 9", 138: "Zona 9", 181: "Zona 9", 256: "Zona 9", 262: "Zona 9"
    };

    const buscarTienda = () => {
        const numeroTienda = document.getElementById("numeroTienda").value;
        if (!numeroTienda) {
            alert("Por favor, ingresa un número de tienda.");
            return;
        }

        const resultadoElement = document.getElementById("resultado");
        const ultimoResultadoElement = document.getElementById("ultimoResultado");

        const lugar = tiendas[numeroTienda];
        const ultimoNumero = localStorage.getItem("ultimoNumeroTienda");
        const ultimoLugar = localStorage.getItem("ultimoLugar");

        // Limpiar las zonas activas
        document.querySelectorAll('.zona').forEach(zona => zona.classList.remove('active'));

        if (lugar) {
            resultadoElement.innerHTML = `${numeroTienda} - ${lugar}`;
            resultadoElement.style.color = tiendasRojas.includes(parseInt(numeroTienda)) ? "red" : "blue";
            
            // Resaltar la zona correspondiente
            if (lugar.includes("Zona")) {
                const zonaId = 'zona' + lugar.match(/\d+/)[0]; // Extracción de número de zona
                const zonaElement = document.getElementById(zonaId);
                if (zonaElement) {
                    zonaElement.classList.add('active');
                }
            }
        } else {
            resultadoElement.innerHTML = `${numeroTienda} - Tienda no encontrada.`;
            resultadoElement.style.color = "#333";
        }

        if (ultimoNumero && ultimoLugar) {
            ultimoResultadoElement.innerHTML = `${ultimoNumero} - ${ultimoLugar}`;
            ultimoResultadoElement.style.color = tiendasRojas.includes(parseInt(ultimoNumero)) ? "red" : "blue";
        } else {
            ultimoResultadoElement.innerHTML = '';
        }

        localStorage.setItem("ultimoNumeroTienda", numeroTienda);
        localStorage.setItem("ultimoLugar", lugar);

        resultadoElement.classList.add('show');
        ultimoResultadoElement.classList.add('show');

        document.getElementById("numeroTienda").value = "";
    };

    document.getElementById("buscarButton").addEventListener("click", buscarTienda);
    document.getElementById("numeroTienda").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            buscarTienda();
        }
    });
});
