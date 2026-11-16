import styled from "styled-components";
import { StarIcon } from "../Icons";

const Card = styled.article`
  position: relative;
  background: ${({ theme }) => theme.surface};
  border-radius: 16px;
  padding: 28px;
  box-shadow: ${({ theme }) => theme.cardShadow};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.cardShadowHover};
  }

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

// Dot sitting on the timeline line, filled and glowing for the current job
const Dot = styled.span`
  position: absolute;
  top: 30px;
  left: -41.5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.primaryLight};
  background: ${({ theme, $current }) => ($current ? theme.primaryLight : theme.surface)};
  box-shadow: ${({ $current }) => ($current ? "0 0 0 6px rgba(27, 150, 255, 0.2)" : "none")};

  @media (max-width: 600px) {
    left: -31.5px;
    top: 24px;
  }
`;

const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 6px;
`;

const Role = styled.h3`
  font: 600 20px/1.3 ${({ theme }) => theme.headingFont};
  color: ${({ theme }) => theme.textPrimary};
`;

const DateTag = styled.span`
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  background: ${({ theme, $current }) => ($current ? theme.tagBg : theme.tagMutedBg)};
  color: ${({ theme, $current }) => ($current ? theme.tagText : theme.tagMutedText)};
  font: 500 12px/1 ${({ theme }) => theme.bodyFont};
  white-space: nowrap;
`;

const Company = styled.div`
  font: 400 14px/1.4 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textMuted};
  margin-bottom: 18px;
`;

const Highlight = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 12px 16px;
  border-radius: 10px;
  background: ${({ theme }) => theme.highlightBg};
  border: 1px solid ${({ theme }) => theme.highlightBorder};
  margin-bottom: 20px;
  font: 500 14px/1.4 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.chipText};

  svg {
    color: ${({ theme }) => theme.primary};
    flex: none;
  }
`;

const Points = styled.ul`
  list-style: none;
`;

export const Point = styled.li`
  position: relative;
  padding-left: 22px;
  margin-bottom: 10px;
  font: 400 15px/1.6 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textBody};

  &::before {
    content: "";
    position: absolute;
    left: 4px;
    top: 9px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
  }
`;

const ExperienceCard = ({ experience }) => (
  <Card>
    <Dot $current={experience.current} aria-hidden="true" />
    <Top>
      <Role>{experience.role}</Role>
      <DateTag $current={experience.current}>{experience.date}</DateTag>
    </Top>
    <Company>
      {experience.company} · {experience.location}
    </Company>
    {experience.highlight && (
      <Highlight>
        <StarIcon width={18} height={18} />
        {experience.highlight}
      </Highlight>
    )}
    <Points>
      {experience.points.map((point) => (
        <Point key={point}>{point}</Point>
      ))}
    </Points>
  </Card>
);

export default ExperienceCard;
