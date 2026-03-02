import { Box, Link, Text } from "@chakra-ui/react";
import { footerInfo } from "./constants";

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
      <Text>
      {footerInfo.yearText} <Link href={footerInfo.authorLink} target="_blank" rel="noopener noreferrer">
          {footerInfo.authorName}
        </Link>. {footerInfo.copyrightText}
      </Text>
    </Box>
  );
};

export default Footer;
