import { Image, Button, Link, Card } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface AppCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const AppCard = ({ title, description, image, link }: AppCardProps) => {
  return (
    <Card.Root maxW="sm" overflow="hidden" boxShadow="md">
      <Image
        src={image}
        alt={title}
        width="100%"
        height={{ base: "160px", md: "200px" }}
        objectFit="cover"
      />
      <Card.Body gap="2">
        <Card.Title>{title}</Card.Title>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="surface" asChild>
          <Link href={link} target="_blank" rel="noopener noreferrer">Explore <FontAwesomeIcon icon={faArrowRight} size="1x" /></Link>
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default AppCard;
