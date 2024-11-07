const operaciones = ["suma", "resta", "multiplicacion", "division"];

const calculadora = (a: number, b: number, operacion: "suma" | "resta" | "division" | "multiplicacion"): number => {

    /*
    if (!operaciones.includes(operacion)) {
        console.log("Operación no válida");
        return 0;
    }
*/

    if (operacion == "suma") {
        return a + b;
    }
    if (operacion == "resta") {
        return a - b;
    }
    if (operacion == "multiplicacion") {
        return a * b;
    }
    if (operacion == "division") {

        if (b == 0) {
            console.log("No se puede dividir entre 0");
            return 0;
        }
        return a / b;
    }

}

console.log(calculadora(2, 4, "suma"));

