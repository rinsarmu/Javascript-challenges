const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);

console.log(hasDriverLicense || hasGoodVision);

console.log(!hasDriverLicense);
// And checks both variables for it's to be true

// For  or, one of the variable become true for truth value.

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Martha can drive.");
} else {
  console.log("Someone else shoud drive.");
}

const isTired = true; // C
console.log(hasDriverLicense || hasGoodVision || isTired);
// Output -> true

if (shouldDrive && !isTired) {
  console.log("Martha can drive.");
} else {
  console.log("Someone else shoud drive.");
}
