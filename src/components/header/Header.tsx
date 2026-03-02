import { socials, headerLinks } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Link, HStack, Text } from "@chakra-ui/react";
import useHeaderScroll from "./hooks/useHeaderScroll";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { headerRef, handleClick } = useHeaderScroll();

  return (
    <header>
      <Box
        ref={headerRef}
        position="fixed"
        top={0}
        left={0}
        right={0}
        bg="#121212"
        color="#FFF"
        w="100%"
        py={{ base: "15px", md: "25px" }}
        px={{ base: "16px", md: "40px" }}
        borderBottom="1.5px solid #D79244"
        zIndex={1000}
        transform="translateY(0px)"
        transition="transform 0.3s ease-in-out"
      >
        <nav className="flex justify-between items-center">
          <Box display="flex" alignItems="center">
            <Link
              href="https://marcindobrzynski.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text fontSize="1.2rem" fontWeight="bold">
                Marcin Renald Dobrzyński
              </Text>
            </Link>

            <HStack
              display={{ base: "none", md: "flex" }}
              color="white"
              gap={6}
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              marginLeft="25px"
            >
              {headerLinks.map((headerLink, index) => (
                <Link
                  href={headerLink.url}
                  key={index}
                  fontSize={{ base: "0.85rem", md: "0.95rem" }}
                  textDecoration="none"
                  onClick={(e) => {
                    e.preventDefault();

                    handleClick(headerLink.url);
                  }}
                >
                  {headerLink.icon && (
                    <FontAwesomeIcon icon={headerLink.icon} />
                  )}
                  <Text>{headerLink.label}</Text>
                </Link>
              ))}
            </HStack>
          </Box>

          <HStack display={{ base: "none", md: "flex" }}>
            {socials.map((social, index) => (
              <Link
                href={social.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon size="lg" icon={social.icon} />
              </Link>
            ))}
          </HStack>

          <HStack display={{ base: "flex", md: "none" }}>
            <MobileMenu />
          </HStack>
        </nav>
      </Box>
    </header>
  );
};

export default Header;
