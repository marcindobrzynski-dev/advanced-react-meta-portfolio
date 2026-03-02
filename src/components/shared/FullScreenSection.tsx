import { VStack, type StackProps } from "@chakra-ui/react";

interface FullScreenSectionProps extends StackProps {
  children: React.ReactNode;
  isDarkBackground: boolean;
}

const FullScreenSection: React.FC<FullScreenSectionProps> = ({
  children,
  isDarkBackground,
  ...stackProps
}) => {
  return (
    <VStack
      w="full"
      minH="100vh"
      backgroundColor={stackProps.backgroundColor ?? "transparent"}
      color={isDarkBackground ? "#FFFFFF" : "#000000"}
      py={{ base: "80px", md: "125px" }}
      {...stackProps}
    >
      {children}
    </VStack>
  );
};

export default FullScreenSection;
