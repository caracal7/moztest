// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-evaldeclarationinstantiation
description: Initialization of new global property
info: |
    [...]
    16. For each String vn in declaredVarNames, in list order do
        a. If varEnvRec is a global Environment Record, then
           i. Perform ? varEnvRec.CreateGlobalVarBinding(vn, true).
    [...]

    8.1.1.4.17 CreateGlobalVarBinding

    [...]
    5. Let extensible be ? IsExtensible(globalObject).
    6. If hasProperty is false and extensible is true, then
       a. Perform ? ObjRec.CreateMutableBinding(N, D).
       b. Perform ? ObjRec.InitializeBinding(N, undefined).
    [...]
flags: [noStrict]
includes: [propertyHelper.js]
---*/

var initial = null;

eval('initial = x; var x;');

verifyEnumerable(this, 'x');
verifyWritable(this, 'x');
verifyConfigurable(this, 'x');

assert.sameValue(initial, undefined);

reportCompare(0, 0);
