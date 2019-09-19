// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: The head's bound names may include "let"
esid: sec-for-in-and-for-of-statements-static-semantics-early-errors
es6id: 13.7.5
flags: [noStrict]
---*/

var iterCount = 0;

for (var let in { attr: null }) {
  assert.sameValue(let, 'attr');
  iterCount += 1;
}

assert.sameValue(iterCount, 1);

reportCompare(0, 0);
