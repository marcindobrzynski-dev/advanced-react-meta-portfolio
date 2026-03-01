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

const ContactMeSection = () => {
  return (
    <FullScreenSection id="contact-me" isDarkBackground>
      <Box width="sm" margin="0 auto" textAlign="center">
        <Heading fontSize="2rem" fontWeight="bold" marginBottom="15px">Contact Me</Heading>

        <Text>Let's build a good future together.</Text>
      </Box>
      <Box width="600px" margin="0 auto" marginTop="30px">
        <form>
          <Field.Root marginBottom="25px" required>
            <Field.Label>
              Name <Field.RequiredIndicator />
            </Field.Label>
            <Input placeholder="Enter your name" />
          </Field.Root>

          <Field.Root  marginBottom="25px" required>
            <Field.Label>
              Email <Field.RequiredIndicator />
            </Field.Label>
            <Input placeholder="Enter your email" />
            <Field.HelperText>We'll never share your email.</Field.HelperText>
          </Field.Root>

          <Select.Root collection={typeOfEnquiriesCollection} size="sm" width="320px" marginBottom="25px">
            <Select.HiddenSelect />
            <Select.Label>Select type of enquiry</Select.Label>
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
                      </Select.Item>
                    </Select.ItemGroup>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>

          <Field.Root marginBottom="25px" required>
            <Field.Label>
              Your message <Field.RequiredIndicator />
            </Field.Label>
            <Textarea placeholder="Start typing..." variant="outline" maxLength={500} />
            <Field.HelperText>Max 500 characters.</Field.HelperText>
          </Field.Root>

          <Button type="submit" width="100%">Future is in your hands</Button>
        </form>
      </Box>
    </FullScreenSection>
  );
};

export default ContactMeSection;
