chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
  function(tabs){
    url = tabs[0].url;
    new QRCode("qrcode", {
      text: url,
      width: 256,
      height: 256,
      colorDark : "#000",
      colorLight : "#fff",
      correctLevel : QRCode.CorrectLevel.H
    });
  }
);

