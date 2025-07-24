import React from "react";
import Hero from "../../src/components/Hero";
import ExportButton from "../../src/components/ExportButton";
import Layout from "../../src/components/Layout";
import s from "./share.module.css";

const ShareRoute = () => {
  return (
    <Layout>
      <div className={s.container}>
        <Hero title="Spread the word" subtitle="Design systems are best built together. This is why it's possible to share this checklist including the items you've already checked. Share your progress with your team so you can all keep track together.">
          <ExportButton
            text="Share your progress"
            feedbackText="Link copied"
          />
        </Hero>
      </div>
    </Layout>
  );
};

export default ShareRoute;
