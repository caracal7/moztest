#[macro_use]
extern crate mozjs;

use mozjs::conversions::ConversionResult;
use mozjs::conversions::FromJSValConvertible;
use mozjs::jsapi::{ JS_NewGlobalObject };
use mozjs::jsapi::OnNewGlobalHookOption;
use mozjs::jsval::UndefinedValue;
use mozjs::rust::{ JSEngine, RealmOptions, Runtime, SIMPLE_GLOBAL_CLASS};

use std::ptr;



fn main() {
    println!("Hello, moz-js!");

    let engine = JSEngine::init().unwrap();
    let runtime = Runtime::new(engine);
    let context = runtime.cx();



    unsafe {
        let options = RealmOptions::default();
        let global = JS_NewGlobalObject(context, &SIMPLE_GLOBAL_CLASS, ptr::null_mut(),
                               OnNewGlobalHookOption::FireOnNewGlobalHook,
                               &*options);
        rooted!(in(context) let global_root = global);
        let global = global_root.handle();  

        rooted!(in(context) let mut rval = UndefinedValue());
        let _ = runtime.evaluate_script(global, "1 + 1", "test.js", 0, rval.handle_mut());

        let s = match String::from_jsval(context, rval.handle(), ()) {
            Ok(ConversionResult::Success(v)) => v,
            _ => String::from(""),
        };

        println!("SpiderMonkey says: {}", s);
    }

}
