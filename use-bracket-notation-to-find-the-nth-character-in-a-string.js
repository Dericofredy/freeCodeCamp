/* Usar notação de colchetes para encontrar o enésimo caractere em uma string

Você também pode usar notação de colchetes para pegar caracteres em outras posições em uma string.

Lembre-se de que computadores começam contando do 0. Então, o primeiro caractere é na verdade o caractere na posição 0.

Exemplo:

const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];

secondLetterOfFirstName teria o valor da string d.

Vamos tentar definir thirdLetterOfLastName para ser igual a terceira letra da variável lastName usando notação de colchetes.

Dica: tente olhar o exemplo acima se você ficar travado.
Testes

Falhou: A variável thirdLetterOfLastName deve ter o valor de v.
Falhou: Você deve usar notação de colchetes. 

// Atividade
const lastName = "Lovelace";

// Altere apenas o código abaixo desta linha
const thirdLetterOfLastName = lastName; // Altere esta linha*/



// Execução da atividade
const lastName = "Lovelace";

// Altere apenas o código abaixo desta linha
const thirdLetterOfLastName = lastName[2]; // Altere esta linha
console.log("A terceira letra da palavra Lovelace é '"+thirdLetterOfLastName+"'");/* isso imprimirá na tela o valor da variável*/
