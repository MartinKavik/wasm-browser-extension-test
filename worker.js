self.addEventListener("message", handleMessageFromMainThread, false);
self.importScripts('pkg/lib.js');

function handleMessageFromMainThread(event) {
  wasm_bindgen(event.data)
  .then(module => {
    console.log("Invoke 'add' function of WASM module");
    console.log(module.add(41,1));
    console.log("Window exists:", module.window_exists());
  })
  .catch(console.error);
}
