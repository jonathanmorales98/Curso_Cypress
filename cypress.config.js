module.exports = {
  //cambiando el tamaño de la ventana
  viewportWidth: 1200,
  viewportHeight: 660,
  //Quitar bloqueo de seguridad https
  chromewebsecurity:false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
}; 

