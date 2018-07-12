var _ = require('lodash');

function add(x, y) {
    return x + y;
}

var increment = _.curry(add);

// console.log(increment(1));


function Container(x) {
    this.__value = x;
}

Container.prototype.map = function (f) {
    return Container.of(f(this.__value));
};

Container.of = function (x) {
    return new Container(x);
};


console.log(Container.of(5).map(x => x + 3));
