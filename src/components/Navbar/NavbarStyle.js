import styled from "styled-components";

export const Nav = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.navBg};
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${({ theme }) => theme.divider};
`;

export const NavInner = styled.nav`
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 32px;
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.a`
  font: 700 20px/1 ${({ theme }) => theme.headingFont};
  color: ${({ theme }) => theme.textPrimary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
  }

  span {
    color: ${({ theme }) => theme.primaryLight};
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 28px;

  @media (max-width: 860px) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: ${({ theme }) => theme.surface};
    border-bottom: 1px solid ${({ theme }) => theme.divider};
    padding: 8px 20px 16px;
  }
`;

export const NavLink = styled.a`
  font: 500 14px/1 ${({ theme }) => theme.bodyFont};
  position: relative;
  color: ${({ theme, $active }) => ($active ? theme.primary : theme.textSoft)};
  text-decoration: none;
  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -8px;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.primary};
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 860px) {
    padding: 14px 0;
    font-size: 16px;

    &::after {
      display: none;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.chipBorder};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.textPrimary};
  cursor: pointer;

  @media (max-width: 860px) {
    display: inline-flex;
  }
`;
