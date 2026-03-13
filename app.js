// ==========================================
// 1. FUNCIONES CALLBACK: VALIDACIÓN DE NÚMERO
// ==========================================

/**
 * Función que solicita un número y ejecuta un callback para validar.
 */
function solicitarDato(callback) {
    let ingreso = prompt("Ingresa un número"); 
    callback(ingreso);
}

/**
 * Función callback que valida si el valor es un número o no.
 */
function validarNumero(valor) {
    // Verificamos si la entrada es un número válido y no está vacía
    if (!isNaN(valor) && valor !== null && valor.trim() !== "") {
        console.log("Ud. ingresó el número: " + valor);
    } else {
        console.log("Ud. ingresó caracteres incorrectos"); 
    }
}

// Ejecución del primer ejercicio
solicitarDato(validarNumero);


// ==========================================
// 2. SUMATORIA DE IMPARES CON RETRASO
// ==========================================

/**
 * Calcula sumatoria de impares y espera 5 segundos para avisar.
 */
function calcular_y_avisar_despues(numero, callback) {
    let sumatoria = 0;
    
    // Sumar números impares entre 1 y el número dado 
    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            sumatoria += i;
        }
    }
    
    console.log("Calculando sumatoria de impares... esperando 5 segundos.");
    
    // Esperar 5 segundos antes de ejecutar el callback 
    setTimeout(() => {
        callback(sumatoria);
    }, 5000);
}

/**
 * Callback para mostrar el resultado final.
 */
function mostrarResultadoImpares(resultado) {
    console.log(`El valor de la sumatoria es ${resultado}. Este resultado se obtuvo hace 5 segundos`); 
}

// Ejemplo de ejecución: Calcular impares hasta 10 (1+3+5+7+9 = 25)
calcular_y_avisar_despues(10, mostrarResultadoImpares);


// ==========================================
// 3. SUMATORIAS SUCESIVAS (ERROR Y ÉXITO)
// ==========================================

/**
 * Calcula la suma de sumatorias sucesivas y decide qué callback usar.
 */
function calcular_y_avisar_dependiendo(numero, callback, callback_error) {
    let resultadoFinal = 0;

    // Lógica de sumatorias sucesivas (Ej: para 5 es 1 + (1+2) + (1+2+3) + ...) 
    for (let i = 1; i <= numero; i++) {
        let sumaParcial = 0;
        for (let j = 1; j <= i; j++) {
            sumaParcial += j;
        }
        resultadoFinal += sumaParcial;
    }

    // Siempre se debe mostrar el resultado obtenido 
    console.log("Resultado de sumatorias sucesivas: " + resultadoFinal);

    // Validación del objetivo (límite 1000)
    if (resultadoFinal < 1000) {
        callback(numero, resultadoFinal); 
    } else {
        callback_error();
    }
}

/**
 * Callback de éxito: se ejecuta si el resultado < 1000.
 */
function exitoSumatoria(numero, resultado) {
    console.log(`Las sumatorias sucesivas de ${numero} es ${resultado}`); 
}

/**
 * Callback de error: se ejecuta si el resultado >= 1000.
 */
function errorSumatoria() {
    console.log("El número sobrepasa el objetivo de la función"); 
}

// Ejemplo de ejecución: Para 5 el resultado es 35 
calcular_y_avisar_dependiendo(5, exitoSumatoria, errorSumatoria);