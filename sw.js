// Minimal service worker: gör appen installerbar. Hämtar alltid färskt från nätet.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
