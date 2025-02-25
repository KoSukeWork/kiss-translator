export const isIframe = window.self !== window.top;

export const sendIframeMsg = (action, args) => {
  document.querySelectorAll("iframe").forEach((iframe) => {
    iframe.contentWindow.postMessage({ action, args }, "*");
  });
};
