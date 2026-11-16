import styled from "styled-components";
import { about } from "../../data/constants";
import Section from "../Section";

const Text = styled.p`
  max-width: 920px;
  margin: 0 auto;
  text-align: center;
  font: 400 22px/1.75 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textSoft};

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const About = ({ tone }) => (
  <Section id="about" title="About Me" tone={tone}>
    <Text>{about}</Text>
  </Section>
);

export default About;
