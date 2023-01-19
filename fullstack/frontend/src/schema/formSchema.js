import * as yup from "yup";
export const formSchema =
 yup.object().shape({
  name: yup
  .string("pls enter string type")
  .required("name is required"),
  price: yup
    .number("pls enter number type")
    .positive("pls enter positive number")
    .required("unitsInStock is required"),
});