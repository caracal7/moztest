// This file was procedurally generated from the following sources:
// - src/annex-b-fns/global-existing-global-init.case
// - src/annex-b-fns/global/block.template
/*---
description: Variable binding is left in place by legacy function hoisting. CreateGlobalVariableBinding leaves the binding as non-enumerable even if it has the chance to change it to be enumerable. (Block statement in the global scope containing a function declaration)
esid: sec-web-compat-globaldeclarationinstantiation
es6id: B.3.3.2
flags: [generated, noStrict]
includes: [fnGlobalObject.js, propertyHelper.js]
info: |
    B.3.3.3 Changes to GlobalDeclarationInstantiation

    [...]
    Perform ? varEnvRec.CreateGlobalVarBinding(F, true).
    [...]

---*/
var global = fnGlobalObject();
Object.defineProperty(global, 'f', {
  value: 'x',
  enumerable: true,
  writable: true,
  configurable: false
});

$262.evalScript(`
assert.sameValue(f, 'x');
verifyProperty(global, 'f', {
  enumerable: true,
  writable: true,
  configurable: false
}, { restore: true });
`);

$262.evalScript(`

{
  function f() { return 'inner declaration'; }
}

`);

$262.evalScript(`
verifyProperty(global, 'f', {
  enumerable: true,
  writable: true,
  configurable: false
});
`);

reportCompare(0, 0);
