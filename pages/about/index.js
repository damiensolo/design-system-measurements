import React from "react";
import Hero from "../../src/components/Hero";
import Layout from "../../src/components/Layout";
import s from "./about.module.css";

const AboutText = () => {
  return (
    <span className={s.text}>
      <br />
      I've spent years building design systems and tracking their impact. They
      all share common measurement challenges and opportunities. This guide
      collects proven metrics to help you demonstrate value and drive adoption
      at any company. Your measurement strategy might look different from our
      categories. That's fine. This isn't a checklist for every team. It's a
      guide to help you cover the key data points that prove strong user
      experiences and business value.
      <br />
      <br />
      Measuring a design system's impact is essential for demonstrating value
      and ensuring continued success. By tracking quantitative metrics like
      component reusability, time savings, and adoption rates alongside
      qualitative data such as user satisfaction, teams can objectively assess
      efficiency gains, consistency improvements, and overall effectiveness.
      This data-driven approach enables organizations to align their design
      system with business objectives, justify investments, and continuously
      iterate to enhance user experience across product development.
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
