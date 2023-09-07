class Calcular  {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    get suma () {
        return this.sumar;
    }
    get resta () {
        return this.restar;
    }
    get multiplicacion () {
        return this.multiplicar;
    }
    get division () {
        return this.diividir;
    }


    //Metodos
    sumar () {
        return this.num1 + this.num2;
    }

    restar () {
        return this.num1 - this.num2;
    }

    multiplicar () {
        return this.num1 * this.num2;
    }

    division () {
        if (this.num2 != 0) {
            return this.num1/this.num2;
        } else {
            return console.log("No se puede dividir por 0");
        }
    }
}

const CALCULADORA = new Calcular (5, 3);

console.log ("La suma es igual a: " + CALCULADORA.suma());
console.log ("La resta es igual a: " + CALCULADORA.resta());
console.log ("La multiplicacion es igual a: " + CALCULADORA.multiplicacion());
console.log ("La division es igual a: " + CALCULADORA.division());