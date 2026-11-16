import styled from "styled-components";
import { experiences } from "../../data/constants";
import Section from "../Section";
import ExperienceCard from "../Cards/ExperienceCard";

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-left: 3px solid ${({ theme }) => theme.primaryLight};
  padding-left: 32px;
  margin-left: 8px;

  @media (max-width: 600px) {
    padding-left: 22px;
    margin-left: 6px;
  }
`;

const Experience = ({ tone }) => (
  <Section id="experience" title="Experience" tone={tone}>
    <Timeline>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.role} experience={experience} />
      ))}
    </Timeline>
  </Section>
);

export default Experience;
