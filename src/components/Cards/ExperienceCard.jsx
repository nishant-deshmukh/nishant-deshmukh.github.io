import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { StarIcon } from "../Icons";

// How many award images show as thumbnails on the card.
// Any extra images are still shown in the viewer (Next / Previous).
const VISIBLE_THUMBNAILS = 2;

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

/* ---------- Award banner ---------- */

const Award = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding: 12px 12px 12px 16px;
  border-radius: 12px;
  background: linear-gradient(90deg, #fff8e6, ${({ theme }) => theme.highlightBg});
  border: 1px solid #f2d58a;
  margin-bottom: 20px;
`;

const Trophy = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #ffe7a3;
  color: #a86a00;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
`;

const AwardText = styled.div`
  flex: 1 1 200px;
  min-width: 0;
`;

const AwardTitle = styled.div`
  font: 600 15px/1.3 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textPrimary};
`;

const AwardSub = styled.div`
  font: 400 13px/1.4 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textBody};
  margin-top: 3px;
`;

const Thumbs = styled.div`
  display: flex;
  gap: 10px;
  flex: none;
`;

const ThumbOverlay = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background: rgba(1, 68, 134, 0.72);
  color: #ffffff;
  font: 600 11px/1 ${({ theme }) => theme.bodyFont};
  opacity: ${({ $always }) => ($always ? 1 : 0)};
  transition: opacity 0.2s ease;

  /* Phones have no hover, so always show the prompt there */
  @media (hover: none) {
    opacity: 1;
    background: rgba(1, 68, 134, 0.55);
  }
`;

const Thumb = styled.button`
  position: relative;
  width: 64px;
  height: 64px;
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid #ffffff;
  background: ${({ theme }) => theme.chip};
  box-shadow: 0 4px 12px rgba(3, 45, 96, 0.18);
  cursor: pointer;
  transition: transform 0.2s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
  }

  &:hover ${ThumbOverlay}, &:focus-visible ${ThumbOverlay} {
    opacity: 1;
  }
`;

const MoreCount = styled.span`
  font: 700 16px/1 ${({ theme }) => theme.headingFont};
`;

/* ---------- Full-size image viewer ---------- */

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(3, 22, 48, 0.86);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const Viewer = styled.div`
  width: min(920px, 100%);
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ViewerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  color: #ffffff;
  font: 600 14px/1.3 ${({ theme }) => theme.bodyFont};
`;

const ViewerButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-width: 44px;
  height: 44px;
  padding: 0 14px;
  border-radius: 10px;
  border: 0;
  background: rgba(255, 255, 255, 0.14);
  color: #ffffff;
  font: 500 14px/1 ${({ theme }) => theme.bodyFont};
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.24);
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
  }
`;

const ViewerImage = styled.img`
  width: 100%;
  max-height: calc(100vh - 170px);
  object-fit: contain;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
`;

const ViewerNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageViewer = ({ title, images, startIndex, onClose }) => {
  const [index, setIndex] = useState(startIndex);
  const closeRef = useRef(null);
  const total = images.length;

  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);
  const next = useCallback(() => setIndex((i) => Math.min(i + 1, total - 1)), [total]);

  useEffect(() => {
    closeRef.current?.focus();
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, prev, next]);

  const image = images[index];

  // Rendered at the end of <body> so it always covers the whole screen.
  return createPortal(
    <Backdrop onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <Viewer onClick={(event) => event.stopPropagation()}>
        <ViewerTop>
          <span>
            {title} · {index + 1} of {total}
          </span>
          <ViewerButton ref={closeRef} type="button" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </ViewerButton>
        </ViewerTop>
        <ViewerImage src={image.src} alt={image.alt} />
        {total > 1 && (
          <ViewerNav>
            <ViewerButton type="button" onClick={prev} disabled={index === 0}>
              ‹ Previous
            </ViewerButton>
            <ViewerButton type="button" onClick={next} disabled={index === total - 1}>
              Next ›
            </ViewerButton>
          </ViewerNav>
        )}
      </Viewer>
    </Backdrop>,
    document.body
  );
};

const AwardBanner = ({ award }) => {
  const [openAt, setOpenAt] = useState(null);
  const images = award.images || [];
  const visible = images.slice(0, VISIBLE_THUMBNAILS);
  const hiddenCount = images.length - visible.length;
  const close = useCallback(() => setOpenAt(null), []);

  return (
    <Award>
      <Trophy aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
          <path d="M17 5h3v2a4 4 0 0 1-4 4M7 5H4v2a4 4 0 0 0 4 4" />
        </svg>
      </Trophy>
      <AwardText>
        <AwardTitle>{award.title}</AwardTitle>
        {award.description && <AwardSub>{award.description}</AwardSub>}
      </AwardText>

      {visible.length > 0 && (
        <Thumbs>
          {visible.map((image, i) => {
            const isLast = i === visible.length - 1;
            const showMore = isLast && hiddenCount > 0;
            return (
              <Thumb
                key={i}
                type="button"
                onClick={() => setOpenAt(i)}
                aria-label={showMore ? `View all ${images.length} award images` : `View ${image.alt}`}
              >
                <img src={image.src} alt="" />
                <ThumbOverlay $always={showMore}>
                  {showMore ? (
                    <>
                      <MoreCount>+{hiddenCount}</MoreCount>
                      View all
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="11" cy="11" r="7" />
                        <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
                      </svg>
                      View
                    </>
                  )}
                </ThumbOverlay>
              </Thumb>
            );
          })}
        </Thumbs>
      )}

      {openAt !== null && (
        <ImageViewer title={award.title} images={images} startIndex={openAt} onClose={close} />
      )}
    </Award>
  );
};

/* ---------- Bullet points ---------- */

const Points = styled.ul`
  list-style: none;
`;

export const Point = styled.li`
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
  font: 400 17px/1.7 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textSoft};

  &::before {
    content: "";
    position: absolute;
    left: 4px;
    top: 11px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
  }

  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.textPrimary};
  }

  @media (max-width: 600px) {
    font-size: 16px;

    &::before {
      top: 10px;
    }
  }
`;

// Turns **text** inside a point into bold text.
// Example: "made workflows **up to 5x faster**"
export const withBold = (text) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part
  );

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
    {experience.award && <AwardBanner award={experience.award} />}
    {!experience.award && experience.highlight && (
      <Highlight>
        <StarIcon width={18} height={18} />
        {experience.highlight}
      </Highlight>
    )}
    <Points>
      {experience.points.map((point) => (
        <Point key={point}>{withBold(point)}</Point>
      ))}
    </Points>
  </Card>
);

export default ExperienceCard;
