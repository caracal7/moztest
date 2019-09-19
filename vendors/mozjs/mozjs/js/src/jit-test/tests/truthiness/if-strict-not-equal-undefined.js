var counterF = 0;

function f(v, value)
{
  if (v !== undefined)
    counterF++;
  assertEq(counterF, value,
           "failed: " + v + " " + value);
}

f({}, 1);
f({}, 2);
f(null, 3);
f(null, 4);
f(undefined, 4);
f(undefined, 4);
f(createIsHTMLDDA(), 5);
f(createIsHTMLDDA(), 6);
f(Object.prototype, 7);
f(Object.prototype, 8);

var counterG = 0;

function g(v, value)
{
  if (v !== undefined)
    counterG++;
  assertEq(counterG, value,
           "failed: " + v + " " + value);
}

g({}, 1);
g({}, 2);

var counterH = 0;

function h(v, value)
{
  if (v !== undefined)
    counterH++;
  assertEq(counterH, value,
           "failed: " + v + " " + value);
}

h(createIsHTMLDDA(), 1);
h(createIsHTMLDDA(), 2);
