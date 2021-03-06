// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.setUTCFullYear property "length" has { ReadOnly, !
    DontDelete, DontEnum } attributes
esid: sec-date.prototype.setutcfullyear
es5id: 15.9.5.41_A3_T2
description: Checking DontDelete attribute
---*/

if (delete Date.prototype.setUTCFullYear.length !== true) {
  $ERROR('#1: The Date.prototype.setUTCFullYear.length property does not have the attributes DontDelete');
}

if (Date.prototype.setUTCFullYear.hasOwnProperty('length')) {
  $ERROR('#2: The Date.prototype.setUTCFullYear.length property does not have the attributes DontDelete');
}

reportCompare(0, 0);
