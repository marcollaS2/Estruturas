let cargo = 'gerente';
let salario = 2000;

switch (cargo){
    case 'gerente':
        salario = salario  * 1.15;
        document.write(salario + '<br>');
    break;

    case 'supervisor':
        salario = salario  * 1.10;
        document.write(salario + '<br>');
    break;

    default:
        salario = salario * 1.05;
        document.write(salario + '<br>');
    break;
}

document.write('Funcão sem parâmetro' + '<br>');

function imprimirConsole(){
    document.write('Olá mundo!' + '<br>');
}

imprimirConsole();

document.write('Função com parâmetro' + '<br>');

function calc(n1, n2){
    return n1 * n2;
}

let resultado = calc(15, 5);
document.write(resultado + '<br>');

document.write('Função por variável' + '<br>');
const textPorParametro = function(texto){
    document.write(texto);
}

textPorParametro('teste' + '<br>');

document.write('Escopo' + '<br>');

let y = 10;

function imprimir(){
    let y = 150;
    document.write(y);
}

imprimir(y);

document.write('<br>');

document.write(y);
document.write('<br>');

document.write('Função Arrow Function' + '<br>');

let teste = () => {
    document.write('testando arrow function');
}

teste();

document.write('Array' + '<br>');

let num = [1,2,5,7];
let nome = ['Ana', 'Paula', 'Pedro'];
let bool = [true, false];
let misturado = [1, 'Matheus', true];

document.write(num[2]);

document.write('Propriedade' + '<br>');

let nomes = 'José';
document.write(nomes.length);

document.write('<br>');

let marca = bike;

document.write(marca.toLocaleUpperCase());
document.write('<br>');
document.write(marca.toLocaleLowerCase());