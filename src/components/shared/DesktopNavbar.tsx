"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowButton from "../pages/blog-details/ArrowButton";

export const navbarData = [
  {
    id: "menu1",
    menuTitle: "Startseite",
    path: "/",
  },
  {
    id: "about-page",
    menuTitle: "Über Uns",
    path: "/about-us",
  },
  {
    id: "menu2",
    menuTitle: "Artikel",
    path: "/blogs", // Direkt zur Blog-Seite
  },
  {
    id: "contact-page",
    menuTitle: "Kontakt",
    path: "/contact",
  },
];

const DesktopNavbar = () => {
  const pathName = usePathname();
  return (
    <div className="desktop-navbar-container">
      <div>
        <Link href={`/`} className="logo-main">
          Möller<span>Visions</span>
        </Link>
      </div>
      <ul className="desktop-menu-items" id="primary">
        {navbarData.map(({ id, menuTitle, path }) => (
          <li key={id} className={`menu-item`}>
            <Link
              href={path}
              className={`textL font-medium navbar-hover-text ${
                pathName === path ? "text-secondary" : "menu-item-text-white"
              }`}
            >
              {menuTitle}
            </Link>
          </li>
        ))}
      </ul>
      <ArrowButton link="/contact" />
    </div>
  );
};

export default DesktopNavbar;
