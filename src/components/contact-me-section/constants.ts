import type { typeOfEnquiry } from "./types.ts";
import { createListCollection } from "@chakra-ui/react";

const typeOfEnquiries: typeOfEnquiry[] = [
  {
    label: "Freelance project proposal",
    value: "hireMe",
  },
  {
    label: "Open source consultancy session",
    value: "openSource",
  },
  {
    label: "Other enquiry",
    value: "other",
  },
];

const typeOfEnquiriesCollection = createListCollection({
  items: typeOfEnquiries,
});

export { typeOfEnquiriesCollection };
