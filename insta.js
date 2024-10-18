let deferredPrompt;

// Captura o evento 'beforeinstallprompt'
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Exibe o popup automaticamente após 3 segundos
  setTimeout(() => {
    document.getElementById('install-prompt-popup').style.display = 'block';
  }, 3000);
});

// Ação para exibir o prompt de instalação quando o usuário clicar no botão
document.getElementById('install-button').addEventListener('click', () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou a instalação');
      } else {
        console.log('Usuário recusou a instalação');
      }
      deferredPrompt = null;
    });

    // Esconde o popup após clicar no botão
    document.getElementById('install-prompt-popup').style.display = 'none';
  }
});

// Verifica se o aplicativo já está instalado
if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('Aplicativo já está instalado.');
}