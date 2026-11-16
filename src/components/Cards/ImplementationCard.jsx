import styled from "styled-components";
import { CloudIcon } from "../Icons";
import { Point, withBold } from "./ExperienceCard";

const Card = styled.article`
  background: ${({ theme }) => theme.surface};
  border-top: 4px solid ${({ theme }) => theme.primary};
  border-radius: 16px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: ${({ theme }) => theme.cardShadow};
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.cardShadowHover};
  }

  @media (max-width: 600px) {
    padding: 22px;
  }
`;

const Product = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  height: 30px;
  padding: 0 12px;
  border-radius: 999px;
  background: ${({ theme }) => theme.tagBg};
  color: ${({ theme }) => theme.tagText};
  font: 600 12px/1 ${({ theme }) => theme.bodyFont};
`;

const Title = styled.h3`
  font: 600 21px/1.3 ${({ theme }) => theme.headingFont};
  color: ${({ theme }) => theme.textPrimary};
`;

const Client = styled.div`
  font: 500 13px/1.4 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textMuted};
`;

const Points = styled.ul`
  list-style: none;

  li {
    margin-bottom: 8px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
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

const ImplementationCard = ({ item }) => (
  <Card>
    <Product>
      <CloudIcon width={14} height={14} />
      {item.product}
    </Product>
    <Title>{item.title}</Title>
    <Client>{item.client}</Client>
    <Points>
      {item.points.map((point) => (
        <Point key={point}>{withBold(point)}</Point>
      ))}
    </Points>
    <Tags>
      {item.tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Tags>
  </Card>
);

export default ImplementationCard;
