var square = x => x * x;
console.log(square(4));

var user = {
    name: 'sameer',
    sayHi: () => {
       // console.log(arguments);
        console.log('hi how r u ', this.name);
    },
    sayHiAlt() {
        //console.log(arguments);
        console.log(`hi how r u ${this.name}`);
    }
};
console.log(user.sayHi);
user.sayHiAlt(1, 2, 3);