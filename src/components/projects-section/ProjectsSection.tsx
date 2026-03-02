import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import FullScreenSection from "../shared/FullScreenSection.tsx";
import { projects } from "./constants.ts";
import AppCard from "../shared/AppCard.tsx";

const ProjectsSection = () => {
  return (
    <FullScreenSection id="projects-section" backgroundColor="#121212" isDarkBackground>
      <Box width="sm" margin="0 auto" textAlign="center">
        <Heading fontSize="2rem" fontWeight="bold" marginBottom="15px">My Projects</Heading>

        <Text>My learning has a vision: help people with my technology skills in their lives.</Text>
      </Box>

      <Box width="1200px" margin="0 auto" marginTop="30px">
        <Grid templateColumns="repeat(3, 1fr)" gap="4">
          {projects.map((project) => (
            <AppCard 
              key={project.title}
              title={project.title} 
              description={project.description} 
              image={project.image} 
              link={project.link} 
            />
          ))}
        </Grid>
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
