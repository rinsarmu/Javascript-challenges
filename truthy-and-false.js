//  Falsy  values are values which not exactly  false, but they become false when they  converted into boolean.
// they are 5 false values in js.
/*
those are 
1. zero
2. empty string
3. Undefined
4. Null
5. NaN
*/
console.log(Boolean(0));
// output ->

console.log(Boolean(undefined));
// output ->
console.log(Boolean("Robera"));
// output ->

console.log(Boolean({}));
// output ->

console.log(Boolean(""));
// output ->

// NB. Conversion to boolean is explicit not implicity.
