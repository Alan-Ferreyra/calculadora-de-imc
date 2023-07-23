function MeuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  function recebeEventoform(evento) {
    evento.preventDefault();

    const peso = form.querySelector(".peso").value;
    const altura = form.querySelector(".altura").value;
    let peso1 = parseFloat(peso.replace(",", "."));
    let altura1 = parseFloat(altura.replace(",", "."));

    console.log(`${peso1}, ${altura1}`);

    let resultadoimc = peso1 / (altura1 * altura1);

    if (peso1 <= 25) {
      resultado.innerHTML = `Insira um peso valido`;
    } else if (altura1 >= 2.6 || altura1 < 0) {
      resultado.innerHTML = `Insira uma altura valida. Exemplo: 1.70`;
    } else if (resultadoimc >= 40) {
      resultado.innerHTML = `<div class="resultadoMuitoGrave">Seu IMC é de ${resultadoimc.toFixed(
        2
      )} <br> OBESIDADE MÓRBIDA | RISCO: MUITO GRAVE </div>`;
    } else if (resultadoimc >= 35 && resultadoimc <= 39.9) {
      resultado.innerHTML = `<div class="resultadoGrave">Seu IMC é de ${resultadoimc.toFixed(
        2
      )} <br> OBESIDADE MÓRBIDA | RISCO: GRAVE</div> `;
    } else if (resultadoimc >= 30 && resultadoimc <= 34.9) {
      resultado.innerHTML = `<div class="resultadoModerado">Seu IMC é de ${resultadoimc.toFixed(
        2
      )} <br> OBESIDADE | RISCO: Moderado </div>`;
    } else if (resultadoimc >= 25 && resultadoimc <= 29.9) {
      resultado.innerHTML = `<div class="resultadoAumentado">Seu IMC é de ${resultadoimc.toFixed(
        2
      )} <br> Sobrepeso | RISCO: Aumentado </div> `;
    } else if (resultadoimc >= 18.5 && resultadoimc <= 24.9) {
      resultado.innerHTML = `<div class="resultadoNormal">Seu IMC é de ${resultadoimc.toFixed(
        2
      )} <br> Peso Normal | RISCO: Normal </div> `;
    } else if (resultadoimc <= 18.5) {
      resultado.innerHTML = `<div class="resultadoBaixo"> Seu IMC é de ${resultadoimc.toFixed(
        2
      )} <br> Baixo peso |  RISCO: Baixo </div>`;
    }
  }

  form.addEventListener("submit", recebeEventoform);
}

MeuEscopo();
