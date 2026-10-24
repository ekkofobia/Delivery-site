// Service worker mínimo: só existe para o navegador liberar a instalação do app.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { /* sem cache: sempre busca na rede */ });
