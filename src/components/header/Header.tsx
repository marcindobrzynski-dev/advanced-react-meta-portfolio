import { socials, headerLinks } from './constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Link, HStack, Text } from "@chakra-ui/react"

const Header = () => {
  return (
    <header>
      <Box 
        position="fixed" 
        top={0} 
        left={0} 
        right={0} 
        bg="#121212"
        color="#FFF"
        w="100%"
        py="25px"
        px="50px"
        borderBottom="1.5px solid #D79244"
      >
        <nav className="flex justify-between items-center">
          <HStack 
            color="white"
            gap={8}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            {headerLinks.map((headerLink, index) => (
              <Link href={headerLink.url} key={index} fontWeight={index === 0 ? "bold" : "normal"} fontSize={index === 0 ? "1.2rem" : "1rem"} textDecoration="none">
                {headerLink.icon && <FontAwesomeIcon icon={headerLink.icon} />}
                <Text>{headerLink.label}</Text>
              </Link>
            ))}
          </HStack>
          <HStack>
            {socials.map((social, index) => (
              <Link href={social.url} key={index} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon size="lg" icon={social.icon} />
              </Link>
            ))}
          </HStack>
        </nav>
      </Box>
    </header>
  );
};

export default Header;
