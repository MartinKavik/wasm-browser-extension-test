use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: u32, b: u32) -> u32 {
    a + b
}

#[wasm_bindgen]
pub fn alert() {
    web_sys::window()
        .expect_throw("window")
        .alert_with_message("Window function called!")
        .expect_throw("alert");
}
