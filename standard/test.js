import {stringFoo, functionFoo} from "./foo.js";
import ss from "./foo.js";

function show() {
    functionFoo(stringFoo);
}

show();

let aa = 'hello';
const baz = {aa};

alert(JSON.stringify(ss))