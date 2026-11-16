import styled from "styled-components";
import { Bio, certifications } from "../../data/constants";
import Section from "../Section";
import { CloudIcon } from "../Icons";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1px ${({ $placeholder }) => ($placeholder ? "dashed" : "solid")}
    ${({ theme, $placeholder }) => ($placeholder ? theme.chipBorder : "transparent")};
  border-radius: 16px;
  padding: 24px;
  display: flex;
  gap: 20px;
  align-items: center;
  box-shadow: ${({ theme }) => theme.cardShadow};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.cardShadowHover};
  }
`;

const Badge = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 16px;
  object-fit: contain;
  flex: none;
`;

const Name = styled.div`
  font: 600 17px/1.3 ${({ theme }) => theme.headingFont};
  color: ${({ theme, $placeholder }) => ($placeholder ? theme.textMuted : theme.textPrimary)};
  margin-bottom: 8px;
`;

const Status = styled.span`
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  background: ${({ theme, $placeholder }) => ($placeholder ? theme.tagMutedBg : theme.tagBg)};
  color: ${({ theme, $placeholder }) => ($placeholder ? theme.tagMutedText : theme.tagText)};
  font: 500 12px/1 ${({ theme }) => theme.bodyFont};
`;

const TrailheadCard = styled(Card).attrs({ as: "a" })`
  text-decoration: none;

  svg {
    color: ${({ theme }) => theme.primary};
    flex: none;
  }
`;

const Sub = styled.div`
  font: 400 14px/1.4 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textMuted};
`;

const Certifications = ({ tone }) => (
  <Section id="certifications" title="Certifications" tone={tone}>
    <Grid>
      {certifications.map((cert) => (
        <Card key={cert.name} $placeholder={cert.placeholder}>
          <Badge src={cert.image} alt={`${cert.name} badge`} />
          <div>
            <Name $placeholder={cert.placeholder}>{cert.name}</Name>
            <Status $placeholder={cert.placeholder}>{cert.status}</Status>
          </div>
        </Card>
      ))}
      <TrailheadCard href={Bio.trailhead} target="_blank" rel="noopener noreferrer">
        <CloudIcon width={40} height={40} strokeWidth={1.8} />
        <div>
          <Name>Trailhead Profile</Name>
          <Sub>Badges, superbadges and points →</Sub>
        </div>
      </TrailheadCard>
    </Grid>
  </Section>
);

export default Certifications;
