import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// Shared layout used by every section: a centered title with a short
// gradient line underneath, then the section content.
// - tone="white" gives the section a white band; otherwise it is pale blue.
// - Content fades up gently the first time it scrolls into view.

export const SectionWrapper = styled.section`
  padding: 96px 0;
  background: ${({ theme, $white }) => ($white ? theme.surface : theme.bg)};

  @media (max-width: 768px) {
    padding: 64px 0;
  }
`;

export const Container = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

const Reveal = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? "none" : "translateY(24px)")};
  transition: opacity 0.7s ease, transform 0.7s ease;
`;

const Title = styled.h2`
  font: 700 44px/1.1 ${({ theme }) => theme.headingFont};
  color: ${({ theme }) => theme.textPrimary};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const Rule = styled.div`
  width: 120px;
  height: 4px;
  border-radius: 4px;
  background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primaryLight});
  margin: 18px auto 48px;
`;

const useReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const Section = ({ id, title, tone, children }) => {
  const [ref, visible] = useReveal();

  return (
    <SectionWrapper id={id} $white={tone === "white"}>
      <Container>
        <Reveal ref={ref} $visible={visible}>
          <Title>{title}</Title>
          <Rule aria-hidden="true" />
          {children}
        </Reveal>
      </Container>
    </SectionWrapper>
  );
};

export default Section;
