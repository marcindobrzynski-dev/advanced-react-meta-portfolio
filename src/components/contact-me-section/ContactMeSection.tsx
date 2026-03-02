import FullScreenSection from "../shared/FullScreenSection.tsx";
import {
  Box,
  Heading,
  Text,
  Field,
  Input,
  Select,
  Portal,
  Textarea,
  Button
} from "@chakra-ui/react";
import { typeOfEnquiriesCollection } from "./constants.ts";
import { useFormik } from "formik";
import { validationSchema } from "./contact-me.schema.ts";
import useSubmit from "./hooks/useSubmit.ts";
import { useAlertContext } from "./context/alertContext.tsx";
import { useEffect } from "react";

const initialValues = {
  name: "",
  email: "",
  typeOfEnquiry: "",
  message: "",
};

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
    }

    if (response && response.type === "success") {
      formik.resetForm();
    }
  }, [response]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      submit(values);
    },
  });

  return (
    <FullScreenSection id="contact-me-section" isDarkBackground>
      <Box width="sm" margin="0 auto" textAlign="center">
        <Heading fontSize="2rem" fontWeight="bold" marginBottom="15px">Contact Me</Heading>

        <Text>Let's build a good future together.</Text>
      </Box>
      <Box width="600px" margin="0 auto" marginTop="30px">
        <form onSubmit={formik.handleSubmit}>
          <Field.Root 
            marginBottom="20px"
            invalid={Boolean(formik.touched.name && formik.errors.name)}
            required
          >
            <Field.Label>
              Name <Field.RequiredIndicator />
            </Field.Label>
            <Input 
              placeholder="Enter your name" 
              name="name" 
              value={formik.values.name} 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <Field.ErrorText>{formik.errors.name}</Field.ErrorText>
            )}
          </Field.Root>

          <Field.Root 
            marginBottom="20px"
            invalid={Boolean(formik.touched.email && formik.errors.email)}
            required
          >
            <Field.Label>
              Email <Field.RequiredIndicator />
            </Field.Label>
            <Input 
              placeholder="Enter your email" 
              name="email" 
              value={formik.values.email} 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <Field.ErrorText>{formik.errors.email}</Field.ErrorText>
            )}
          </Field.Root>

          <Field.Root
            marginBottom="20px"
            invalid={Boolean(formik.touched.typeOfEnquiry && formik.errors.typeOfEnquiry)}
            required
          >
            <Field.Label>
              Select type of enquiry <Field.RequiredIndicator />
            </Field.Label>

            <Select.Root
              collection={typeOfEnquiriesCollection}
              value={formik.values.typeOfEnquiry ? [formik.values.typeOfEnquiry] : []}
              onValueChange={({ value }) => formik.setFieldValue("typeOfEnquiry", value[0] ?? "")}
              onBlur={formik.handleBlur}
              size="sm"
              width="320px"
            >
              <Select.HiddenSelect name="typeOfEnquiry" />
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="Select type of enquiry" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {typeOfEnquiriesCollection.items.map((typeOfEnquiry) => (
                      <Select.ItemGroup key={typeOfEnquiry.value}>
                        <Select.Item item={typeOfEnquiry}>
                          {typeOfEnquiry.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      </Select.ItemGroup>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>

            {formik.touched.typeOfEnquiry && formik.errors.typeOfEnquiry && (
              <Field.ErrorText>{formik.errors.typeOfEnquiry}</Field.ErrorText>
            )}
          </Field.Root>

          <Field.Root 
            marginBottom="20px"
            invalid={Boolean(formik.touched.message && formik.errors.message)}
            required
          >
            <Field.Label>
              Your message <Field.RequiredIndicator />
            </Field.Label>
            <Textarea 
              placeholder="Start typing..." 
              variant="outline" 
              maxLength={500} 
              name="message" 
              value={formik.values.message} 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Field.HelperText>Max 500 characters.</Field.HelperText>
            {formik.touched.message && formik.errors.message && (
              <Field.ErrorText>{formik.errors.message}</Field.ErrorText>
            )}
          </Field.Root>

          <Button type="submit" width="100%" loading={isLoading}>Future is in your hands</Button>
        </form>
      </Box>
    </FullScreenSection>
  );
};

export default ContactMeSection;
