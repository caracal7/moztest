function t()
{
  var a = arguments;
  Object.defineProperty(a, "length", { value: 0 });
  for (var i = 0; i < 5; i++)
    assertEq(a.length, 0);

  var desc = Object.getOwnPropertyDescriptor(a, "length");
  assertEq(desc.value, 0);
  assertEq(desc.writable, true);
  assertEq(desc.enumerable, false);
  assertEq(desc.configurable, true);
}
t();
