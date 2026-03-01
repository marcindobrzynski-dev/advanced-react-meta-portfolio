import { VStack, type StackProps } from "@chakra-ui/react";

interface FullScreenSectionProps extends StackProps {
  children: React.ReactNode;
  isDarkBackground: boolean;
}

const FullScreenSection: React.FC<FullScreenSectionProps> = ({ children, isDarkBackground, ...stackProps }) => {
  return (
    <VStack
      backgroundColor={stackProps.backgroundColor ?? "transparent"}
      color={isDarkBackground ? "#FFFFFF" : "#000000"}
    >
      <VStack width="100vw" height="100vh" maxHeight="100%" maxWidth="100%" {...stackProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
