// Resposta para a pergunta 17 do capítulo 1 - Este algoritmo atesta o carácter tautológico das wffs (ou fbfs).

function TestaTautologia(A, B) {
  console.log(`A: ${!(!B && (!A || B)) || !A}`);
  console.log(`B: ${!((!A || B) && A) || B}`);
  console.log(`C: ${!((A || B) && !A) || B}`);
  console.log(`D: ${!((A && B) && !B) || A}`);
};

TestaTautologia(false, false); // Para qualquer par de booleans, as expressões dentro da função computarão 'true' como valor final.
