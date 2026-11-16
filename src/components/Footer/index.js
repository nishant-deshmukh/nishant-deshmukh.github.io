import styled from "styled-components";
import { Bio } from "../../data/constants";

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.surface};
  border-top: 1px solid ${({ theme }) => theme.divider};
  padding: 40px 0;
`;

const Inner = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

const Copyright = styled.p`
  font: 400 14px/1.5 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textMuted};
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const Link = styled.a`
  font: 500 14px/1 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textSoft};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Footer = () => (
  <Wrapper>
    <Inner>
      <Copyright>
        © {new Date().getFullYear()} {Bio.name} · Salesforce Developer
      </Copyright>
      <Links>
        <Link href={Bio.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</Link>
        <Link href={Bio.trailhead} target="_blank" rel="noopener noreferrer">Trailhead</Link>
        <Link href={Bio.github} target="_blank" rel="noopener noreferrer">GitHub</Link>
        <Link href={`mailto:${Bio.email}`}>Email</Link>
      </Links>
    </Inner>
  </Wrapper>
);

export default Footer;
