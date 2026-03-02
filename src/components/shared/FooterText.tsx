import { Link, Text } from "@chakra-ui/react";
import { footerInfo } from "../footer/constants";

const FooterText = () => {
  return (
    <Text>{footerInfo.yearText} <Link href={footerInfo.authorLink} target="_blank" rel="noopener noreferrer">
      {footerInfo.authorName}
    </Link>. {footerInfo.copyrightText}</Text>
  );
};

export default FooterText;
