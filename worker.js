
importScripts(
  "via/controller/object.js",
  "via/controller/property.js",
  "via/controller/controller.js"
);

// overwrite objects and types defined in pkg/lib.js
window = via;
Window = Object;

self.importScripts('pkg/lib.js');

let first_message = true;

self.addEventListener("message", event => {
  if (first_message) {
    first_message = false;
    Via.postMessage = (data => self.postMessage(data));
    handleMessageFromMainThread(event);
  } else 
    Via.OnMessage(event.data);
  }
);

function handleMessageFromMainThread(event) {
  wasm_bindgen(event.data)
  .then(module => {
    console.log("Invoke 'add' function of WASM module");
    console.log(module.add(41,1));
    module.alert();
  })
  .catch(console.error);
}
