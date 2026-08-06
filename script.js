function converterDecParaBin() {
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

function converterBinParaDec() {
  const input = document.getElementById("binInput");
  const resultado = document.getElementById("resultadoBinario");

  // Pega o valor digitado
  const bin = input.value.trim();

  // Verifica se o campo está vazio
  if (bin === "") {
    alert("Por favor, digite um número binário.");
    return;
  }

if (!/^[01]+$/.test(input.value.trim())) {
  alert("Por favor, digite apenas os números 0 e 1");
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
// ___________________________________________________________________________
function converterDecParaOct() {
  const input = document.getElementById("decParaOctInput");
  const resultado = document.getElementById("resultado2");

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
  const oct = dec.toString(8);

  // Mostra o resultado na tela
  resultado.innerText = `O número ${dec} em octal é: ${oct}`;

  // Limpa o campo de entrada para a próxima digitação
  input.value = "";
}

function converterOctParaDec() {
  const input = document.getElementById("octInput");
  const resultado = document.getElementById("resultadoOctal");

  const oct = input.value.trim();

  if (oct === "") {
    alert("Por favor, digite um número octal.");
    return;
  }

  // Validação: Garante que só existam números de 0 a 7
  const regexOctal = /^[0-7]+$/;
  if (!regexOctal.test(oct)) {
    alert("Por favor, digite apenas números de 0 a 7.");
    return;
  }

  // Converte usando a base 8
  const dec = parseInt(oct, 8);

  // Exibe o resultado na tela
  resultado.innerText = `O número ${oct} em decimal é: ${dec}`;

  // Limpa o campo de entrada
  input.value = "";
}
// ---------------------------------------------------------------------------
// 1. Converte de Decimal para Hexadecimal
function converterDecParaHex() {
    const input = document.getElementById('decParaHexInput');
    const resultado = document.getElementById('resultado3'); 

    // Verifica se está vazio
    if (input.value.trim() === '') {
        alert('Por favor, digite um número antes de converter.');
        return;
    }

    const dec = parseInt(input.value, 10);

    // Valida se é um número inteiro válido
    if (isNaN(dec)) {
        alert('Por favor, digite um número inteiro válido.');
        return;
    }

    // Converte para base 16 (hexadecimal) em letras maiúsculas
    const hex = dec.toString(16).toUpperCase();

    // Mostra o resultado
    resultado.innerText = `O número ${dec} em hexadecimal é: ${hex}`;
    
    // Limpa o campo
    input.value = '';
}

// 2. Converte de Hexadecimal para Decimal
function converterHexParaDec() {
    const input = document.getElementById('hexInput');
    const resultado = document.getElementById('resultadoHexadecimal');
    const hex = input.value.trim();

    // Verifica se está vazio
    if (hex === '') {
        alert('Por favor, digite um número hexadecimal.');
        return;
    }

    // Valida se contém apenas caracteres hexadecimais válidos (0-9, A-F)
    const regexHex = /^[0-9A-Fa-f]+$/;
    if (!regexHex.test(hex)) {
        alert('Por favor, digite apenas caracteres hexadecimais válidos (0-9 e A-F).');
        return;
    }

    // Converte de base 16 para decimal
    const dec = parseInt(hex, 16);

    // Exibe o resultado
    resultado.innerText = `O número ${hex} em decimal é: ${dec}`;

    // Limpa o campo
    input.value = '';
}
