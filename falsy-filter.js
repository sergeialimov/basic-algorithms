function bouncer(arr) {
  const result = arr.filter(Boolean)
  return result;
}

bouncer([true, null, 0, NaN, undefined, ""]); // true
// bouncer([1, null, NaN, 2, undefined]); // 1, 2