let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();  // Evita que o navegador mostre o prompt automaticamente
  deferredPrompt = e;

  // Exibe o prompt automaticamente após um leve atraso ou interação
  window.addEventListener('scroll', showInstallPrompt);
});

function showInstallPrompt() {
  if (deferredPrompt) {
    // Remove o listener para evitar que o prompt seja exibido novamente
    window.removeEventListener('scroll', showInstallPrompt);

    // Exibe o prompt de instalação
    deferredPrompt.prompt();
    
    // Verifica a escolha do usuário
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
