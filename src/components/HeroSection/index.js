import { Bio } from "../../data/constants";
import { CloudIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../Icons";
import {
  HeroWrapper,
  Dots,
  Cloud,
  HeroInner,
  HeroText,
  StatusPill,
  Eyebrow,
  Name,
  Tagline,
  Actions,
  ResumeButton,
  IconRow,
  IconLink,
  PhotoWrap,
  PhotoFrame,
  Photo,
  FloatChip,
} from "./HeroStyle";

const CloudShape = (props) => (
  <Cloud viewBox="0 0 200 110" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M52 100c-24 0-42-15-42-35 0-19 16-34 37-35C55 13 74 2 96 2c27 0 49 17 53 40 22 1 41 16 41 34 0 13-10 24-24 24H52z"
    />
  </Cloud>
);

const HeroSection = () => (
  <HeroWrapper id="home">
    <Dots aria-hidden="true" />
    <CloudShape width="190" style={{ top: 40, left: "4%" }} $speed={16} />
    <CloudShape width="130" style={{ bottom: 40, left: "38%", opacity: 0.7 }} $speed={12} />
    <CloudShape width="160" style={{ top: 24, right: "6%", opacity: 0.8 }} $speed={18} />

    <HeroInner>
      <HeroText>
        {Bio.openToWork && (
          <StatusPill>
            <span aria-hidden="true" />
            {Bio.openToWork}
          </StatusPill>
        )}
        <Eyebrow>{Bio.title}</Eyebrow>
        <Name>
          Hi, I'm <em>{Bio.name}</em>.
        </Name>
        <Tagline>{Bio.tagline}</Tagline>
        <Actions>
          <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
            <DownloadIcon width={18} height={18} />
            Get Resume
          </ResumeButton>
          <IconRow>
            <IconLink href={Bio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <LinkedInIcon />
            </IconLink>
            <IconLink href={Bio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <GitHubIcon />
            </IconLink>
            <IconLink href={Bio.trailhead} target="_blank" rel="noopener noreferrer" aria-label="Trailhead profile">
              <CloudIcon />
            </IconLink>
            <IconLink href={`mailto:${Bio.email}`} aria-label="Send email">
              <MailIcon />
            </IconLink>
          </IconRow>
        </Actions>
      </HeroText>

      <PhotoWrap>
        <PhotoFrame>
          <Photo src={Bio.image} alt={Bio.name} />
          {Bio.heroChips.map((chip) => (
            <FloatChip
              key={chip.label}
              style={chip.position}
              data-side={"right" in chip.position ? "right" : "left"}
              $delay={chip.delay}
              aria-hidden="true"
            >
              <i />
              {chip.label}
            </FloatChip>
          ))}
        </PhotoFrame>
      </PhotoWrap>
    </HeroInner>
  </HeroWrapper>
);

export default HeroSection;
