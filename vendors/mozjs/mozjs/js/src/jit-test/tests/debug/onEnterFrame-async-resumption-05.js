// A Debugger can {return:} from the first onEnterFrame for an async generator.
// (The exact behavior is undocumented; we're testing that it doesn't crash.)

ignoreUnhandledRejections();

let g = newGlobal({newCompartment: true});
g.hit2 = false;
g.eval(`async function* f(x) { await x; return "ponies"; }`);

let dbg = new Debugger;
let gw = dbg.addDebuggee(g);
let hits = 0;
let resumption = undefined;
dbg.onEnterFrame = frame => {
    if (frame.type == "call" && frame.callee.name === "f") {
        frame.onPop = completion => {
            assertEq(completion.return, resumption.return);
            hits++;
        };

        // If we force-return a generator object here, the caller will never
        // receive an async generator object.
        resumption = frame.eval(`(function* f2() { hit2 = true; })()`);
        assertEq(resumption.return.class, "Generator");
        return resumption;
    }
};

let it = g.f(0);
assertEq(hits, 1);
assertEq(gw.makeDebuggeeValue(it), resumption.return);
assertEq(g.hit2, false);
