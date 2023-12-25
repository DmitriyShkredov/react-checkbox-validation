import * as yup from "yup";

const rulesCheckbox = yup
  .mixed()
  .oneOf([true], "Необходимо согласие с условиями акции");

const mailingsCheckbox = yup
  .mixed()
  .oneOf([true], "Необходимо согласие на рассылку");

export const schemaSignUp = yup.object({
  rules: rulesCheckbox,
  mailings: mailingsCheckbox,
});
