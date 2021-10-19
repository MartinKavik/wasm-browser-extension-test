const worker = new Worker(chrome.runtime.getURL('worker.js'));

worker.onmessage = (e => ViaReceiver.OnMessage(e.data));
ViaReceiver.postMessage = (data => worker.postMessage(data));

fetch(chrome.runtime.getURL("pkg/lib_bg.wasm"))
  .then(response => response.arrayBuffer())
  .then(wasm_bytes => worker.postMessage(wasm_bytes, [wasm_bytes]))
