import { Box } from "@chakra-ui/react";
import FooterText from "../shared/FooterText";

const Footer = () => {
  return (
    <Box
      width="100%"
      backgroundColor="#121212"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      py="25px"
      px="15px"
      borderTop="1.5px solid #D79244"
    >
      <FooterText />
    </Box>
  );
};

export default Footer;
