import styled from "styled-components";
import { ArrowIcon } from "../Icons";

const Card = styled.article`
  background: ${({ theme }) => theme.surface};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.cardShadow};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.cardShadowHover};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 190px;
  object-fit: contain;
  padding: 12px;
  background: #f5f8fc;
  border-bottom: 1px solid ${({ theme }) => theme.cardBorder};
`;

const Body = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Meta = styled.div`
  font: 700 13px/1 ${({ theme }) => theme.headingFont};
  color: ${({ theme }) => theme.primary};
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font: 600 20px/1.3 ${({ theme }) => theme.headingFont};
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: 10px;
`;

const Description = styled.p`
  font: 400 15px/1.65 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textBody};
  margin-bottom: 16px;
  flex: 1;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.tagBg};
  color: ${({ theme }) => theme.tagText};
  font: 500 12px/1 ${({ theme }) => theme.bodyFont};
`;

const CodeLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font: 600 14px/1 ${({ theme }) => theme.bodyFont};
  text-decoration: none;
  min-height: 44px;
`;

const ProjectCard = ({ project, number }) => (
  <Card>
    <Image src={project.image} alt={`${project.title} screenshot`} />
    <Body>
      <Meta>
        {number} · {project.date}
      </Meta>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <Tags>
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <CodeLink href={project.github} target="_blank" rel="noopener noreferrer">
        View code <ArrowIcon width={16} height={16} />
      </CodeLink>
    </Body>
  </Card>
);

export default ProjectCard;
