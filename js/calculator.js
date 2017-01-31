module.exports = function (input) {
  if(input === '') {
    return 0;
  }

  let result = input.split('+')
                    .map((el) => parseInt(el))
                    .reduce((sum,el) => sum+el, 0);

  return result;
};
