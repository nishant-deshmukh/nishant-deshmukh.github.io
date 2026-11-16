import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const drift = keyframes`
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(18px); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(46, 132, 74, 0.45); }
  70% { box-shadow: 0 0 0 8px rgba(46, 132, 74, 0); }
  100% { box-shadow: 0 0 0 0 rgba(46, 132, 74, 0); }
`;

export const HeroWrapper = styled.section`
  position: relative;
  overflow: hidden;
  background: radial-gradient(900px 500px at 78% 30%, rgba(1, 118, 211, 0.16), rgba(244, 247, 251, 0) 70%),
    linear-gradient(180deg, #e6f0fb 0%, ${({ theme }) => theme.bg} 100%);
  padding: 88px 0 104px;

  @media (max-width: 768px) {
    padding: 48px 0 72px;
  }
`;

// Faint dot grid behind the hero
export const Dots = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(1, 118, 211, 0.14) 1px, transparent 1px);
  background-size: 22px 22px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6), transparent 85%);
  -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6), transparent 85%);
  pointer-events: none;
`;

// Soft cloud shapes drifting slowly in the background
export const Cloud = styled.svg`
  position: absolute;
  color: #ffffff;
  opacity: 0.9;
  pointer-events: none;
  animation: ${drift} ${({ $speed }) => $speed || 14}s ease-in-out infinite;
  filter: drop-shadow(0 8px 18px rgba(1, 118, 211, 0.08));
`;

export const HeroInner = styled.div`
  position: relative;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 56px;

  @media (max-width: 600px) {
    padding: 0 20px;
    gap: 48px;
  }
`;

export const HeroText = styled.div`
  flex: 999 1 520px;
  min-width: 0;
  animation: ${fadeUp} 0.7s ease both;
`;

export const StatusPill = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 34px;
  padding: 0 14px;
  border-radius: 999px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.chipBorder};
  box-shadow: ${({ theme }) => theme.cardShadow};
  font: 500 13px/1 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 22px;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.success};
    animation: ${pulse} 2s infinite;
  }
`;

export const Eyebrow = styled.p`
  font: 600 13px/1.3 ${({ theme }) => theme.bodyFont};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 14px;
`;

export const Name = styled.h1`
  font: 700 64px/1.05 ${({ theme }) => theme.headingFont};
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: 20px;

  em {
    font-style: normal;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primaryLight});
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

export const Tagline = styled.p`
  font: 400 19px/1.65 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textBody};
  max-width: 600px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 52px;
  padding: 0 26px;
  border-radius: 12px;
  background: ${({ theme }) => theme.primary};
  color: #ffffff;
  font: 600 15px/1 ${({ theme }) => theme.bodyFont};
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    color: #ffffff;
    background: ${({ theme }) => theme.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(1, 118, 211, 0.3);
  }
`;

export const IconRow = styled.div`
  display: flex;
  gap: 12px;
`;

export const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.chipBorder};
  color: ${({ theme }) => theme.textSoft};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    color: #ffffff;
    transform: translateY(-3px);
  }
`;

export const PhotoWrap = styled.div`
  flex: 1 1 320px;
  display: flex;
  justify-content: center;
`;

export const PhotoFrame = styled.div`
  position: relative;
  width: 340px;
  height: 420px;

  /* Blue offset panel behind the photo */
  &::before {
    content: "";
    position: absolute;
    inset: 22px -22px -22px 22px;
    border-radius: 28px;
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primaryLight});
    opacity: 0.9;
  }

  @media (max-width: 600px) {
    width: 260px;
    height: 320px;
  }
`;

export const Photo = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  border: 4px solid #ffffff;
  box-shadow: 0 24px 60px rgba(3, 45, 96, 0.18);
`;

// Small skill tags floating around the photo
export const FloatChip = styled.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 14px;
  border-radius: 12px;
  background: ${({ theme }) => theme.surface};
  box-shadow: 0 10px 28px rgba(3, 45, 96, 0.14);
  font: 600 13px/1 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textPrimary};
  white-space: nowrap;
  animation: ${float} ${({ $speed }) => $speed || 4}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || 0}s;

  i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primaryLight};
  }

  @media (max-width: 600px) {
    height: 34px;
    font-size: 12px;

    /* Keep the tags inside small screens */
    &[data-side="left"] {
      left: -14px !important;
    }
    &[data-side="right"] {
      right: -14px !important;
    }
  }
`;
