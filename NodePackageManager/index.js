const lodash = require("lodash");

const names = ["abhinav", "jestin", "loathbrok"];
const capitalize = lodash.map(names, lodash.capitalize);
console.log(capitalize);
