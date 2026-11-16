import styled from "styled-components";
import { projects } from "../../data/constants";
import Section from "../Section";
import ProjectCard from "../Cards/ProjectCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const Projects = ({ tone }) => (
  <Section id="projects" title="Projects" tone={tone}>
    <Grid>
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} number={String(index + 1).padStart(2, "0")} />
      ))}
    </Grid>
  </Section>
);

export default Projects;
