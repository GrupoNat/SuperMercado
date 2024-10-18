let deferredPrompt;

// Captura o evento 'beforeinstallprompt'
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();  // Impede o prompt automático
  deferredPrompt = e;

  // Exibe o banner após 3 segundos
  setTimeout(() => {
    document.getElementById('install-prompt-banner').style.display = 'block';
  }, 3000);
});

// Ação para exibir o prompt de instalação quando o usuário clicar em "Instalar"
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

    // Esconde o banner após a ação de instalar
    document.getElementById('install-prompt-banner').style.display = 'none';
  }
});

// Fecha o banner quando o usuário clicar no "X"
document.getElementById('close-banner').addEventListener('click', () => {
  document.getElementById('install-prompt-banner').style.display = 'none';
});

// Verifica se o app já está instalado
if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('Aplicativo já está instalado.');
}