(function () {
  let renderedIframe = false;

  const checkRender = setInterval(() => {
    const belvoContainer = document.getElementById("belvo");

    // Once iframe loaded, start checking content
    if (belvoContainer.children.length > 0) {
      if (!renderedIframe) {
        renderedIframe = true;
      } else {
        const iframeDocument =
          belvoContainer.children[0].contentWindow.document;

        if (iframeDocument.getElementsByTagName("img").length > 0) {
          clearInterval(checkRender);
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
