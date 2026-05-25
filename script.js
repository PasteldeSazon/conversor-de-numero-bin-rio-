function converter() {
  const input = document.getElementById("decInput");
  const resultado = document.getElementById("resultado");

  // Verifica se o campo está totalmente vazio
  if (input.value.trim() === "") {
    alert("Por favor, digite um número antes de converter.");
    return;
  }

  const dec = parseInt(input.value, 10);

  // Verifica se o que foi digitado é um número válido
  if (isNaN(dec)) {
    alert("Por favor, digite um número inteiro válido.");
    return;
  }

  // Faz a conversão para a base 2 (binário)
  const bin = dec.toString(2);

  // Mostra o resultado na tela
  resultado.innerText = `O número ${dec} em binário é: ${bin}`;

  // Limpa o campo de entrada para a próxima digitação
  input.value = "";
}

function converterParaDecimal() {
  const input = document.getElementById("binInput");
  const resultado = document.getElementById("resultadoBinario");

  // Pega o valor digitado
  const bin = input.value.trim();

  // Verifica se o campo está vazio
  if (bin === "") {
    alert("Por favor, digite um número binário.");
    return;
  }

  // Converte o binário para base 10 (decimal)
  const dec = parseInt(bin, 2);

  // Verifica se o usuário digitou números que não são 0 ou 1
  if (isNaN(dec)) {
    alert("Por favor, digite apenas 0 e 1.");
    return;
  }

  // Mostra o resultado na tela

  resultado.innerText = `O número ${bin} em binário é: ${dec}`;

  // Limpa o campo
  input.value = "";
}
