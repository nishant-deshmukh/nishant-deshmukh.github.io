import { useEffect, useState } from "react";
import { navLinks } from "../../data/constants";
import { CloseIcon, MenuIcon } from "../Icons";
import { Nav, NavInner, Logo, Links, NavLink, MenuButton } from "./NavbarStyle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Underline the menu link for the section currently on screen.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["home", ...navLinks.map((link) => link.id)].forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Nav>
      <NavInner aria-label="Main">
        <Logo href="#home">
          nishant<span>.dev</span>
        </Logo>
        <Links $open={open}>
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              href={`#${link.id}`}
              $active={active === link.id}
              aria-current={active === link.id ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.title}
            </NavLink>
          ))}
        </Links>
        <MenuButton
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </MenuButton>
      </NavInner>
    </Nav>
  );
};

export default Navbar;
