
function hitungKalkulator(angka1, operator, angka2) {
  let hasil;
  if (operator === '/' && angka2 === 0) {
    return "Error: Tidak bisa membagi dengan angka 0!";
  }
  if (operator === '+') {
    hasil = angka1 + angka2;
  } else if (operator === '-') {
    hasil = angka1 - angka2;
  } else if (operator === '*') {
    hasil = angka1 * angka2;
  } else if (operator === '/') {
    hasil = angka1 / angka2;
  } else {
    return "Error: Operator tidak valid! Harap gunakan +, -, *, atau /.";
  }
  return `Hasil dari ${angka1} ${operator} ${angka2} adalah ${hasil}`;
}
console.log("=== Demo Kalkulator Backend ===");
