
import React from "react";
import Hero from "../src/components/Hero";
import Layout from "../src/components/Layout";
import Button from "../src/components/Button";
import Link from "next/link";

const IndexRoute = ({ t }) => {
  return (
    <Layout t={t}>
      <Hero
        title="Design System Metrics Checklist"
        subtitle="Measure the impact and effectiveness of your design system with these key performance indicators and metrics."
      >
        <Link href="/metrics">
          <Button text="Get started" />
        </Link>
      </Hero>
    </Layout>
  );
};

export async function getStaticProps() {
  const t = (await import('../src/translations/en/index')).default;

  return {
    props: { t },
  };
}

export default IndexRoute;
