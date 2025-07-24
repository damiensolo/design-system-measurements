import React from "react";
import { useTheme } from "../../utilities/themeContext";
import s from "./Footer.module.css";

const Footer = ({ t }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={s.root}>
      <div className={s.content}>
        <h2 className={s.title}>Design System Checklist</h2>
        <p className={s.text}>An open-source checklist to help you plan, build and grow your design system.</p>
      </div>
    </div>
  );
};

export default Footer;