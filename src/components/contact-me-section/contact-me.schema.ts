import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().min(3, "Name must be at least 3 characters.").required("Name is required."),
  email: Yup.string().email("Invalid email.").required("Email is required."),
  typeOfEnquiry: Yup.string().required("Type of enquiry is required."),
  message: Yup.string().min(10, "Message must be at least 10 characters.").required("Message is required."),
});

export { validationSchema };
