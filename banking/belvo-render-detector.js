(function () {
  let renderedIframe = false;

  const checkRender = setInterval(() => {
    const belvoContainer = document.getElementById("belvo");

    // Once iframe loaded, start checking content
    if (belvoContainer.children.length > 0) {
      if (!renderedIframe) {
        renderedIframe = true;
      } else {
        const iframeDocument = belvoContainer.children[0].contentWindow.document;

        if (iframeDocument.getElementsByTagName("img").length > 0) {
          clearInterval(checkRender);
          displayReconnectScreen(iframeDocument);
          window.ReactNativeWebView.postMessage("${MESSAGE}");
        }
      }
    }
  }, 10);

  // 5 seconds fallback to render if render check fails
  const fallback = setTimeout(() => {
    clearInterval(checkRender);
    window.ReactNativeWebView.postMessage("${MESSAGE}");
  }, 5000);
})();

// TODO: Remove this function once bug is fixed by Belvo.
// If a user tries to reconnect a bank account marked as invalid
// (when password changed for example), the screen is not fully rendered
// due to a problem with the "height" CSS property on ".credentials-form__content"
// element. This function is a temporary fix for that.
function displayReconnectScreen(iframeDocument) {
  const container = iframeDocument.querySelector('.credentials-form__content');
  if (container) {
    container.style.height = 'auto';
  }
}
