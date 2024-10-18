let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevenir que o navegador exiba o prompt padrão
  e.preventDefault();
  deferredPrompt = e;

  // Definir um atraso para exibir automaticamente o prompt
  setTimeout(() => {
    if (deferredPrompt) {
      // Exibir o prompt de instalação automaticamente
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
  }, 3000); // Espera 3 segundos antes de mostrar o prompt
});

// Verificar se o app já está instalado
if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('Aplicativo já está instalado.');
}
