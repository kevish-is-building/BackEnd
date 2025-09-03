const test = () => {
  return "You got this test";
};

const sum = (num1, num2) => {
  return Number(num1) + Number(num2);
};

// exports.example = "exports is working successfully"

module.exports = {
    test,
    sum,
}