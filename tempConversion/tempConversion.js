const ftoc = function (fahrenheit) {
  let tempc = (fahrenheit - 32) * 5 / 9;
  return Math.round(tempc * 10) / 10;

}

const ctof = function (celcius) {
  let tempf = (celcius * 9 / 5) + 32;
  return Math.round(tempf * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
