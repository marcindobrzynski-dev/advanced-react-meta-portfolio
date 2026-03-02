import { Button, CloseButton, Drawer, Link, Portal, Box } from "@chakra-ui/react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { headerLinks, socials } from "./constants"
import useHeaderScroll from "./hooks/useHeaderScroll"
import FooterText from "../shared/FooterText"

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const { handleClick } = useHeaderScroll();

  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Menu</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body
              display="flex"
              flexDirection="column"
              gap="10px"
            >
              {headerLinks.map((headerLink) => (
                <Link 
                  href={headerLink.url} 
                  key={headerLink.label}
                  backgroundColor="rgba(255, 255, 255, 0.1)"
                  color="white"
                  py="10px"
                  px="20px"
                  borderRadius="5px"
                  fontSize={{ base: "0.85rem", md: "0.95rem" }}
                  textDecoration="none"
                  onClick={(e) => {
                    e.preventDefault();

                    handleClick(headerLink.url);

                    setOpen(false);
                  }}
                >
                  {headerLink.label}
                </Link>
              ))}

              <Box display="flex" gap="10px" marginTop="15px">
                {socials.map((social, index) => (
                  <Link href={social.url} key={index} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon size="xl" icon={social.icon} />
                  </Link>
                ))}
              </Box>
            </Drawer.Body>
            <Drawer.Footer>
              <FooterText />
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default MobileMenu;
