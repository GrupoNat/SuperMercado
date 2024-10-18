let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevenir que o navegador exiba automaticamente o prompt
  e.preventDefault();
  deferredPrompt = e;

  // Exibir o botão ou popup para o usuário
  document.getElementById('install-button').style.display = 'block';
});

document.getElementById('install-button').addEventListener('click', () => {
  // Quando o botão de instalação for clicado
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou a instalação do aplicativo');
      } else {
        console.log('Usuário recusou a instalação do aplicativo');
      }
      deferredPrompt = null;
    });
  }
});

// Verificar se o app já está instalado
if (window.matchMedia('(display-mode: standalone)').matches) {
  document.getElementById('install-button').style.display = 'none';
}
