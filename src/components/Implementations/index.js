import styled from "styled-components";
import { implementations } from "../../data/constants";
import Section from "../Section";
import ImplementationCard from "../Cards/ImplementationCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 22px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Implementations = ({ tone }) => (
  <Section id="implementations" title="Salesforce Implementations" tone={tone}>
    <Grid>
      {implementations.map((item) => (
        <ImplementationCard key={item.title} item={item} />
      ))}
    </Grid>
  </Section>
);

export default Implementations;
