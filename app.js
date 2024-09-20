document.getElementById("adicionarBtn").addEventListener("click", function () {
  const textoInput = document.getElementById("textoInput");
  const texto = textoInput.value.trim();

  if (texto !== "") {
    adicionarItem(texto);
    textoInput.value = "";
  }
});

function adicionarItem(texto) {
  const lista = document.getElementById("lista");

  const li = document.createElement("li");
  const spanTexto = document.createElement("span");
  spanTexto.classList.add("texto");
  spanTexto.textContent = texto;

  const botaoEditar = document.createElement("button");
  botaoEditar.textContent = "Editar";
  botaoEditar.classList.add("editar");
  botaoEditar.addEventListener("click", function () {
    const inputEdicao = document.createElement("input");
    inputEdicao.type = "text";
    inputEdicao.value = spanTexto.textContent;

    li.replaceChild(inputEdicao, spanTexto);
    inputEdicao.focus();

    const botaoSalvar = document.createElement("button");
    botaoSalvar.textContent = "Salvar";
    botaoSalvar.classList.add("salvar");

    botaoSalvar.addEventListener("click", function () {
      const novoTexto = inputEdicao.value.trim();
      if (novoTexto !== "") {
        spanTexto.textContent = novoTexto;
        li.replaceChild(spanTexto, inputEdicao);
        li.replaceChild(botaoEditar, botaoSalvar);
      }
    });

    li.replaceChild(botaoSalvar, botaoEditar);
  });

  const botaoApagar = document.createElement("button");
  botaoApagar.textContent = "Apagar";
  botaoApagar.classList.add("apagar");
  botaoApagar.addEventListener("click", function () {
    lista.removeChild(li);
  });

  li.appendChild(spanTexto);
  li.appendChild(botaoEditar);
  li.appendChild(botaoApagar);
  lista.appendChild(li);
}
