/*
    Closure from MDN

    A closure is the combination of a function bundled together (enclosed)
    with references to its surrounding state (the lexical environment).
    In other words, a closure gives you access to an outer function’s scope
    from an inner function. In JavaScript, closures are created every time
    a function is created, at function creation time.
*/

/*
    Closure from my point of view 

    However outer function is executed and inner function is defined within
    that scope, inner function is able to hold on to the reference of
    outer scope (outer function), and whatever you pass to the
    function (outer function), it continues to have access to it.
    inner function have a linkage to the outer scope or whatever
    a variable is defined in it.
*/

function outer(x) {
    function inner() {
        console.log(x)
    }
    inner()
}

outer(1) // 1

var y = 20;

function outer2() {
    function inner2() {
        console.log(y)
    }
    inner2()
}

outer2() // 20


/*
    Since closure is capture the variable not the value
    so even after inner3 function is executed it still capture
    the variable z not it's value.
*/

var z = 20;

function outer3() {
    function inner3() {
        console.log(z)
    }
    inner3()
}

z = 30

outer3() // 30