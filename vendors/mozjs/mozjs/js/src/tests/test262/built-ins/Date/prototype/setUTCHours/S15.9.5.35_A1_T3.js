// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "setUTCHours" has { DontEnum } attributes
esid: sec-date.prototype.setutchours
es5id: 15.9.5.35_A1_T3
description: Checking DontEnum attribute
---*/

if (Date.prototype.propertyIsEnumerable('setUTCHours')) {
  $ERROR('#1: The Date.prototype.setUTCHours property has the attribute DontEnum');
}

for (var x in Date.prototype) {
  if (x === "setUTCHours") {
    $ERROR('#2: The Date.prototype.setUTCHours has the attribute DontEnum');
  }
}

reportCompare(0, 0);
