// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Adlam`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v11.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000640
  ],
  ranges: [
    [0x01E900, 0x01E94A],
    [0x01E950, 0x01E959],
    [0x01E95E, 0x01E95F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Adlam}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Adlam}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Adlm}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Adlm}"
);
testPropertyEscapes(
  /^\p{scx=Adlam}+$/u,
  matchSymbols,
  "\\p{scx=Adlam}"
);
testPropertyEscapes(
  /^\p{scx=Adlm}+$/u,
  matchSymbols,
  "\\p{scx=Adlm}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00063F],
    [0x000641, 0x00DBFF],
    [0x00E000, 0x01E8FF],
    [0x01E94B, 0x01E94F],
    [0x01E95A, 0x01E95D],
    [0x01E960, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Adlam}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Adlam}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Adlm}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Adlm}"
);
testPropertyEscapes(
  /^\P{scx=Adlam}+$/u,
  nonMatchSymbols,
  "\\P{scx=Adlam}"
);
testPropertyEscapes(
  /^\P{scx=Adlm}+$/u,
  nonMatchSymbols,
  "\\P{scx=Adlm}"
);

reportCompare(0, 0);
