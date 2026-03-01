import { Box, Card, Grid, Heading, Text } from "@chakra-ui/react";
import FullScreenSection from "../shared/FullScreenSection.tsx";
import { projects } from "./constants.ts";
import { Image, Button, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectsSection = () => {
  return (
    <FullScreenSection id="projects" backgroundColor="#121212" isDarkBackground>
      <Box width="sm" margin="0 auto" textAlign="center">
        <Heading fontSize="2rem" fontWeight="bold" marginBottom="15px">My Projects</Heading>

        <Text>My learning has a vision: help people with my technology skills in their lives.</Text>
      </Box>

      <Box width="1200px" margin="0 auto" marginTop="30px">
        <Grid templateColumns="repeat(3, 1fr)" gap="4">
          {projects.map((project) => (
            <Card.Root maxW="sm" overflow="hidden" boxShadow="md">
              <Image
                src={project.image}
                alt={project.title}
                width="100%"
                height="200px"
                objectFit="cover"
              />
              <Card.Body gap="2">
                <Card.Title>{project.title}</Card.Title>
                <Card.Description>
                  {project.description}
                </Card.Description>
              </Card.Body>
              <Card.Footer gap="2">
                <Button variant="surface" asChild>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">Explore <FontAwesomeIcon icon={faArrowRight} size="1x" /></Link>
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </Grid>
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
