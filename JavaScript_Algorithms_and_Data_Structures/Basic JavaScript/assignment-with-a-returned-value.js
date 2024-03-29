/* Atribuir com o valor retornado
Se você se lembrar de nossa discussão sobre como armazenar valores com o operador de atribuição, tudo à direita do sinal de igual é resolvido antes de o valor ser atribuído. Isso significa que podemos pegar o valor de retorno de uma função e atribuí-lo a uma variável.

Assuma que temos uma função definida chamada sum, que soma dois números.

ourSum = sum(5, 12);
Chamar a função sum com os argumentos 5 e 12 produz um valor de retorno de 17. Esse valor de retorno é atribuído à variável ourSum.

Chame a função processArg com um argumento de 7 e atribui o retorno do seu valor para a variável processed.

 */

// Configuração
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Altere apenas o código abaixo desta linha
processed=processArg(7);

console.log(processed);//Metodo indicado
console.log(processArg(7));//parece gambiara
