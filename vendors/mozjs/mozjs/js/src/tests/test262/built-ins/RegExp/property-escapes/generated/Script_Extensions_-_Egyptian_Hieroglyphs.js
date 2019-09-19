// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Egyptian_Hieroglyphs`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v11.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x013000, 0x01342E]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Egyptian_Hieroglyphs}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Egyptian_Hieroglyphs}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Egyp}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Egyp}"
);
testPropertyEscapes(
  /^\p{scx=Egyptian_Hieroglyphs}+$/u,
  matchSymbols,
  "\\p{scx=Egyptian_Hieroglyphs}"
);
testPropertyEscapes(
  /^\p{scx=Egyp}+$/u,
  matchSymbols,
  "\\p{scx=Egyp}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x012FFF],
    [0x01342F, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Egyptian_Hieroglyphs}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Egyptian_Hieroglyphs}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Egyp}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Egyp}"
);
testPropertyEscapes(
  /^\P{scx=Egyptian_Hieroglyphs}+$/u,
  nonMatchSymbols,
  "\\P{scx=Egyptian_Hieroglyphs}"
);
testPropertyEscapes(
  /^\P{scx=Egyp}+$/u,
  nonMatchSymbols,
  "\\P{scx=Egyp}"
);

reportCompare(0, 0);
