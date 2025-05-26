import { body } from "express-validator";

const userRegistrationValidator = () => {
  return [
    body("email")
      .trim()
      .isEmpty()
      .withMessage("Email field required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("username")
      .trim()
      .isEmpty()
      .withMessage("Username is required")
      .isLength({ min: 3 })
      .withMessage("Username must more than 3 char")
      .isLength({ max: 12 })
      .withMessage("Username cannot exceed 12 char"),
  ];
};


const userLoginValidator = () => {
  return [
    body("email")
      .trim()
      .isEmpty()
      .withMessage("Email field required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("password")
      .trim()
      .isEmpty()
      .withMessage("Password is required")
  ];
};

export { userRegistrationValidator, userLoginValidator };
