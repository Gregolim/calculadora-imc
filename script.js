function resetCampos() {
  document.getElementById("altura").value = 170;
  document.getElementById("peso").value = 50;

  const imcValor = document.getElementById("imcValor");
  const statusTexto = document.getElementById("statusTexto");
  const categoriaTexto = document.getElementById("categoriaTexto");
  const diferencaTexto = document.getElementById("diferencaTexto");
  const gauge = document.querySelector(".gauge-ring");

  imcValor.textContent = "0.0";
  statusTexto.textContent = "Normal";
  categoriaTexto.textContent = "Normal";
  diferencaTexto.textContent = "0.0 kg";
  gauge.style.background = "conic-gradient(#27c98b 0 50%, #e5e7eb 50% 100%)";
}

function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const alturaCm = parseFloat(document.getElementById("altura").value);
  const altura = alturaCm / 100;

  const imcValor = document.getElementById("imcValor");
  const statusTexto = document.getElementById("statusTexto");
  const categoriaTexto = document.getElementById("categoriaTexto");
  const diferencaTexto = document.getElementById("diferencaTexto");
  const gauge = document.querySelector(".gauge-ring");

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    statusTexto.textContent = "Dados inválidos";
    categoriaTexto.textContent = "Verifique";
    diferencaTexto.textContent = "--";
    imcValor.textContent = "0.0";
    gauge.style.background = "conic-gradient(#d1d5db 0 100%)";
    return;
  }

  const imc = peso / (altura * altura);
  const pesoIdeal = 22.5 * (altura * altura);
  const diferenca = peso - pesoIdeal;

  let categoria = "";
  let status = "";
  let cor = "#27c98b";

  if (imc < 18.5) {
    categoria = "Abaixo do peso";
    status = "Leve";
    cor = "#2f9fe9";
  } else if (imc < 25) {
    categoria = "Normal";
    status = "Normal";
    cor = "#27c98b";
  } else if (imc < 30) {
    categoria = "Sobrepeso";
    status = "Alerta";
    cor = "#f4c542";
  } else {
    categoria = "Obesidade";
    status = "Cuidados";
    cor = "#f26b5b";
  }

  const porcentagem = Math.min((imc / 40) * 100, 100);

  gauge.style.background = `conic-gradient(${cor} 0 ${porcentagem}%, #e5e7eb ${porcentagem}% 100%)`;

  imcValor.textContent = imc.toFixed(1);
  statusTexto.textContent = status;
  categoriaTexto.textContent = categoria;

  const diferencaAbs = Math.abs(diferenca).toFixed(1);
  if (Math.abs(diferenca) < 0.05) {
    diferencaTexto.textContent = "0.0 kg";
  } else if (diferenca > 0) {
    diferencaTexto.textContent = `${diferencaAbs} kg acima`;
  } else {
    diferencaTexto.textContent = `${diferencaAbs} kg abaixo`;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  calcularIMC();

  document.getElementById("peso").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      calcularIMC();
    }
  });

  document.getElementById("altura").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      calcularIMC();
    }
  });
});