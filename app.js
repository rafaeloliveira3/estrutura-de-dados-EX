'use strict'

import { showArray } from "./showArray.js"

const precos = [ 23, 5, 9, 10, 100, 45]

/* Funções Exercícios */

const somarCem = (number) => number +100
const ex1 = precos.map(somarCem)

const pares = (number) => number % 2 == 0  
const ex2 = precos.filter(pares)

const descontoEx = (number) => number - 4
const somarEx3 = (a, b) => a+b
const ex3 = precos.map(descontoEx).reduce(somarEx3, 0)

const impares = (number) => number % 2 != 0
const somar21 = (number) => number + 21
const ex4= precos.filter(impares).map(somar21)

/* Fim Funções Exercícios */

// Saída padrão

showArray(precos, 'main', 'Iniciais')

/* Saídas dos Exercícios */

showArray(ex1, 'main', 'EX1')
showArray(ex2, 'main', 'EX2')
showArray([ex3], 'main', 'EX3')
showArray(ex4, 'main', 'EX4')
