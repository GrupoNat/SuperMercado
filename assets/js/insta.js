let deferredPrompt;

// Captura o evento 'beforeinstallprompt' para exibir a instalação do PWA
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); // Evita que o prompt seja mostrado automaticamente
  deferredPrompt = e;

  // Espera uma leve interação do usuário (neste caso, scroll)
  window.addEventListener('scroll', showInstallPrompt);
});

function showInstallPrompt() {
  if (deferredPrompt) {
    // Remove o listener para evitar repetição
    window.removeEventListener('scroll', showInstallPrompt);

    // Exibe o prompt de instalação após uma interação
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou a instalação');
      } else {
        console.log('Usuário recusou a instalação');
      }
      deferredPrompt = null;
    });
  }
}

// Verifica se o app já está instalado
if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('Aplicativo já está instalado.');
}
