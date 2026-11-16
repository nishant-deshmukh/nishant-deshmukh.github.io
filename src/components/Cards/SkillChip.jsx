import styled from "styled-components";

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 15px;
  border-radius: 999px;
  background: ${({ theme }) => theme.chip};
  border: 1px solid ${({ theme }) => theme.chipBorder};
  color: ${({ theme }) => theme.chipText};
  font: 500 13px/1 ${({ theme }) => theme.bodyFont};
  white-space: nowrap;
  cursor: default;
  transition: transform 0.18s ease, border-color 0.18s ease, background 0.18s ease, box-shadow 0.18s ease;

  img {
    width: 16px;
    height: 16px;
    transition: transform 0.18s ease;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.chipHover};
    box-shadow: 0 8px 18px rgba(1, 118, 211, 0.18);
  }

  &:hover img {
    transform: scale(1.18);
  }
`;

// children: optional extra content after the name (e.g. a small label)
const SkillChip = ({ skill, children }) => (
  <Chip>
    {skill.icon && <img src={skill.icon} alt="" />}
    {skill.name}
    {children}
  </Chip>
);

export default SkillChip;
