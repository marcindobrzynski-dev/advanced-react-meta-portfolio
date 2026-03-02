import { useAlertContext } from "@/components/contact-me-section/context/alertContext.tsx";
import { Alert } from "@chakra-ui/react";
import { useEffect } from "react";

const AppAlert = () => {
  const { isOpen, onClose, type, message } = useAlertContext();
  const isSuccess = type === "success";

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => onClose(), 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Alert.Root 
          status={type}
          position="fixed"
          top="25px"
          left="50%"
          transform="translateX(-50%)"
          zIndex="10000"
          width="100%"
          maxWidth="400px"
          minHeight="100px"
          borderRadius="md"
          padding="4"
        >
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title fontSize="lg" fontWeight="bold">
              {isSuccess ? 'All good!' : 'Oops!'}
              </Alert.Title>
            <Alert.Description>{message}</Alert.Description>
          </Alert.Content>
        </Alert.Root>
      )}      
    </>
  );
};

export default AppAlert;
