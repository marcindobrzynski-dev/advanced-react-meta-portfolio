import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import FullScreenSection from "../shared/FullScreenSection.tsx";
import { projects } from "./constants.ts";
import AppCard from "../shared/AppCard.tsx";

const ProjectsSection = () => {
  return (
    <FullScreenSection id="projects-section" backgroundColor="#121212" isDarkBackground>
      <Box maxW="sm" w="full" px={{ base: 4, md: 0 }} margin="0 auto" textAlign="center">
        <Heading fontSize="2rem" fontWeight="bold" marginBottom="15px">My Projects</Heading>

        <Text>My learning has a vision: help people with my technology skills in their lives.</Text>
      </Box>

      <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        maxW="1200px" 
        w="full" 
        px={{ base: 4, lg: 0 }} 
        margin="0 auto" 
        marginTop="30px"
      >
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="4">
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
