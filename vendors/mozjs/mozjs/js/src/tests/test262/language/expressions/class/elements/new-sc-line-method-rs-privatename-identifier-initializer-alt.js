// |reftest| skip -- class-fields-private,class-fields-public is not supported
// This file was procedurally generated from the following sources:
// - src/class-elements/rs-privatename-identifier-initializer-alt.case
// - src/class-elements/productions/cls-expr-new-sc-line-method.template
/*---
description: Valid PrivateName (field definitions followed by a method in a new line with a semicolon)
esid: prod-FieldDefinition
features: [class-fields-private, class, class-fields-public]
flags: [generated]
includes: [propertyHelper.js]
info: |
    ClassElement :
      MethodDefinition
      static MethodDefinition
      FieldDefinition ;
      ;

    FieldDefinition :
      ClassElementName Initializer _opt

    ClassElementName :
      PropertyName
      PrivateName

    PrivateName ::
      # IdentifierName

    IdentifierName ::
      IdentifierStart
      IdentifierName IdentifierPart

    IdentifierStart ::
      UnicodeIDStart
      $
      _
      \ UnicodeEscapeSequence

    IdentifierPart::
      UnicodeIDContinue
      $
      \ UnicodeEscapeSequence
      <ZWNJ> <ZWJ>

    UnicodeIDStart::
      any Unicode code point with the Unicode property "ID_Start"

    UnicodeIDContinue::
      any Unicode code point with the Unicode property "ID_Continue"


    NOTE 3
    The sets of code points with Unicode properties "ID_Start" and
    "ID_Continue" include, respectively, the code points with Unicode
    properties "Other_ID_Start" and "Other_ID_Continue".

---*/


var C = class {
  #$ = 1; #_ = 1; #\u{6F} = 1; #℘ = 1; #ZW_‌_NJ = 1; #ZW_‍_J = 1;
  m() { return 42; }
  $() {
    return this.#$;
  }
  _() {
    return this.#_;
  }
  \u{6F}() {
    return this.#\u{6F};
  }
  ℘() {
    return this.#℘;
  }
  ZW_‌_NJ() {
    return this.#ZW_‌_NJ;
  }
  ZW_‍_J() {
    return this.#ZW_‍_J;
  }
}

var c = new C();

assert.sameValue(c.m(), 42);
assert.sameValue(c.m, C.prototype.m);
assert.sameValue(Object.hasOwnProperty.call(c, "m"), false);

verifyProperty(C.prototype, "m", {
  enumerable: false,
  configurable: true,
  writable: true,
});

assert.sameValue(c.$(), 1);
assert.sameValue(c._(), 1);
assert.sameValue(c.\u{6F}(), 1);
assert.sameValue(c.℘(), 1);
assert.sameValue(c.ZW_‌_NJ(), 1);
assert.sameValue(c.ZW_‍_J(), 1);


reportCompare(0, 0);
