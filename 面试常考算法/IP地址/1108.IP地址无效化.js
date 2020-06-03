var defangIPaddr1 = function(address) {
  return address.split(".").join("[.]");
}

var defangIPaddr1 = function(address) {
  return address.replace(/\./g, "[.]");
}

