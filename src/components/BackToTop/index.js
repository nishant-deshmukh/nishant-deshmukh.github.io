import { useEffect, useState } from "react";
import styled from "styled-components";
import { ArrowUpIcon } from "../Icons";

// Small button in the bottom-right corner that appears after scrolling down.
const Button = styled.a`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 20;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.primary};
  color: #ffffff;
  box-shadow: 0 10px 24px rgba(1, 118, 211, 0.3);
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  pointer-events: ${({ $show }) => ($show ? "auto" : "none")};
  transform: ${({ $show }) => ($show ? "none" : "translateY(12px)")};
  transition: opacity 0.25s ease, transform 0.25s ease, background 0.2s ease;

  &:hover {
    color: #ffffff;
    background: ${({ theme }) => theme.primaryDark};
  }
`;

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Button href="#home" $show={show} aria-label="Back to top" tabIndex={show ? 0 : -1}>
      <ArrowUpIcon />
    </Button>
  );
};

export default BackToTop;
