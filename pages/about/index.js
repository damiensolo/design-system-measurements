import React from "react";
import Hero from "../../src/components/Hero";
import Layout from "../../src/components/Layout";
import s from "./about.module.css";

const AboutText = () => {
  return (
    <span className={s.text}>
      <br />
      I've spent years building design systems. They all share common patterns
      and challenges. This site collects proven practices to help you create
      strong, complete design systems at any company.
      <br />
      <br />
      Your system might look different from our categories. That's fine. This
      isn't a checklist for every team. It's a guide to help you cover the key
      elements that create good user experiences.
      <br />
      <br />
      <br />
    </span>
  );
};

const AboutRoute = () => {
  return (
    <Layout>
      <div className={s.container}>
        <Hero title="About" subtitle={<AboutText />} />
      </div>
    </Layout>
  );
};

export default AboutRoute;
