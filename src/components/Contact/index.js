import styled from "styled-components";
import { Bio, contact } from "../../data/constants";
import Section from "../Section";
import { CloudIcon, GitHubIcon, LinkedInIcon, LocationIcon, MailIcon, PhoneIcon } from "../Icons";

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
`;

const Intro = styled.div`
  flex: 1 1 360px;
  min-width: 0;
`;

const Heading = styled.h3`
  font: 700 30px/1.2 ${({ theme }) => theme.headingFont};
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: 14px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const Text = styled.p`
  font: 400 16px/1.65 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textBody};
  margin-bottom: 26px;
`;

const EmailButton = styled.a`
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
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    color: #ffffff;
    background: ${({ theme }) => theme.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(1, 118, 211, 0.3);
  }
`;

const Cards = styled.div`
  flex: 1.4 1 480px;
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  border-radius: 14px;
  background: ${({ theme }) => theme.surface};
  box-shadow: ${({ theme }) => theme.cardShadow};
  text-decoration: none;
  min-width: 0;
  grid-column: ${({ $wide }) => ($wide ? "1 / -1" : "auto")};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.cardShadowHover};
  }
`;

const IconBox = styled.span`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ theme }) => theme.tagBg};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
`;

const Label = styled.span`
  display: block;
  font: 500 12px/1 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textMuted};
  margin-bottom: 6px;
`;

const Value = styled.span`
  display: block;
  font: 600 15px/1.3 ${({ theme }) => theme.bodyFont};
  color: ${({ theme }) => theme.textPrimary};
  overflow-wrap: anywhere;
`;

const ContactCard = ({ icon, label, value, href, wide }) => (
  <Card
    href={href}
    $wide={wide}
    {...(href && href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    as={href ? "a" : "div"}
  >
    <IconBox>{icon}</IconBox>
    <span>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </span>
  </Card>
);

const Contact = ({ tone }) => (
  <Section id="contact" title="Contact" tone={tone}>
    <Layout>
      <Intro>
        <Heading>{contact.heading}</Heading>
        <Text>{contact.text}</Text>
        <EmailButton href={`mailto:${Bio.email}`}>
          <MailIcon width={18} height={18} />
          Email Me
        </EmailButton>
      </Intro>
      <Cards>
        <ContactCard icon={<MailIcon />} label="Email" value={Bio.email} href={`mailto:${Bio.email}`} wide />
        {Bio.phone && (
          <ContactCard
            icon={<PhoneIcon />}
            label="Phone"
            value={Bio.phone}
            href={`tel:${Bio.phone.replace(/\s/g, "")}`}
          />
        )}
        <ContactCard icon={<LocationIcon />} label="Location" value={Bio.location} />
        <ContactCard icon={<LinkedInIcon />} label="LinkedIn" value="nishant-deshmukh-dev" href={Bio.linkedin} />
        <ContactCard icon={<CloudIcon />} label="Trailhead" value="Trailblazer profile" href={Bio.trailhead} />
        <ContactCard icon={<GitHubIcon />} label="GitHub" value="nishant-deshmukh" href={Bio.github} />
      </Cards>
    </Layout>
  </Section>
);

export default Contact;
