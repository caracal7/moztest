// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The "interface" token can be used as identifier in
    non-strict code
es5id: 7.6.1.2_A1.18ns
description: >
    Checking if execution of "interface = 1" succeeds in  non-strict
    code
flags: [noStrict]
---*/

var interface = 1;

reportCompare(0, 0);
