function Flux(x) {
    this.value = x;
}

Flux.prototype.map = function (f) {
    if (this.value instanceof Array) {
        return Flux.of(this.value.map(f))
    }
    else {
        return Flux.of(f(this.value));
    }
};

Flux.of = function (x) {
    return new Flux(x);
};



console.log(Flux.of([1, 2, 3, 4]).map(x => x + 4));