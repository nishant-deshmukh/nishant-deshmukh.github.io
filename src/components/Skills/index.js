import styled from "styled-components";
import { exposure, skills } from "../../data/constants";
import Section from "../Section";
import SkillChip from "../Cards/SkillChip";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const Group = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme, $highlight }) => ($highlight ? theme.primary : theme.cardBorder)};
  border-radius: 16px;
  padding: 26px;
  box-shadow: ${({ theme }) => theme.cardShadow};
`;

const GroupTitle = styled.h3`
  font: 600 18px/1.2 ${({ theme }) => theme.headingFont};
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: 16px;
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

/* ---------- Wide "Exposure & Training" box under the six groups ---------- */

const WideBox = styled(Group)`
  grid-column: 1 / -1;
  border-style: dashed;
  border-color: ${({ theme }) => theme.chipBorder};
  background: linear-gradient(90deg, ${({ theme }) => theme.surface}, ${({ theme }) => theme.highlightBg});
`;

const WideHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 12px;
  margin-bottom: 16px;

  h3 {
    margin: 0;
  }
`;

const WideNote = styled.span`
  font: 400 13px/1.4 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textMuted};
`;

const Label = styled.span`
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 8px;
  margin-left: 2px;
  border-radius: 999px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.chipBorder};
  color: ${({ theme }) => theme.textMuted};
  font: 600 10px/1 ${({ theme }) => theme.bodyFont};
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

const Skills = ({ tone }) => (
  <Section id="skills" title="Skills" tone={tone}>
    <Grid>
      {skills.map((group) => (
        <Group key={group.title} $highlight={group.highlight}>
          <GroupTitle>{group.title}</GroupTitle>
          <Chips>
            {group.skills.map((skill) => (
              <SkillChip key={skill.name} skill={skill} />
            ))}
          </Chips>
        </Group>
      ))}

      {exposure && exposure.items.length > 0 && (
        <WideBox>
          <WideHeader>
            <GroupTitle as="h3">{exposure.title}</GroupTitle>
            <WideNote>Tools I've trained on or worked with alongside client projects</WideNote>
          </WideHeader>
          <Chips>
            {exposure.items.map((item) => (
              <SkillChip key={item.name} skill={item}>
                {item.label && <Label>{item.label}</Label>}
              </SkillChip>
            ))}
          </Chips>
        </WideBox>
      )}
    </Grid>
  </Section>
);

export default Skills;
