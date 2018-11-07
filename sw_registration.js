document.addEventListener("DOMContentLoaded", event => {
  /*     Service Worker */
  if (navigator.serviceWorker) {
    navigator.serviceWorker
      .register("sw.js")
      .then(registration => console.log("SW registered", registration))
      .catch(e => console.log("Registration failed :(", e));
  }
});
