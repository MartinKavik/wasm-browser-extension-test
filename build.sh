#!/bin/sh
wasm-pack build --release --target no-modules --out-name lib
sed -i '/var ret = self.self;/c\var ret = window;' pkg/lib.js
