// Referências aos elementos
var modal = document.getElementById("journalModal");
var btn = document.getElementById("journal-button");
var span = document.getElementsByClassName("close")[0];
var gallery = document.querySelector(".gallery");
var images = gallery.querySelectorAll("img");

// Função para abrir o modal e exibir a imagem selecionada
function openModal(image) {
  modal.style.display = "block";
  var modalImage = document.createElement("img");
  modalImage.src = image.src;
  modalImage.alt = image.alt;
  modal.querySelector(".modal-content").appendChild(modalImage);
  document.getElementById("caption").innerHTML = image.alt;
}

// Função para fechar o modal
function closeModal() {
  modal.style.display = "none";
  modal.querySelector(".modal-content").innerHTML = "";
}

// Adicione um evento de clique às imagens para abrir o modal
images.forEach(function(image) {
  image.addEventListener("click", function() {
    openModal(image);
  });
});

// Adicione um evento de clique ao botão de fechar para fechar o modal
span.addEventListener("click", closeModal);

// Fecha o modal se o usuário clicar fora da imagem/modal
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});