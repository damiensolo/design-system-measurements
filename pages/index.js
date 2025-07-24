import React from "react";
import Link from "next/link";
import Layout from "../src/components/Layout";
import Hero from "../src/components/Hero";
import Button from "../src/components/Button";
import SectionTitle from "../src/components/SectionTitle";
import { useCheckedIds } from "../src/utilities/checklistsContext";
import { IconArrowRight } from "../src/icons/arrowRight";
import data from "../src/data";
import s from "../pages/metrics/metrics.module.css";

const IndexRoute = () => {
  const { checkedIds } = useCheckedIds();

  return (
    <Layout>
      <div className={s.container}>
        <Hero 
          title="Design System Metrics"
          subtitle="Measure the impact and effectiveness of your design system with these key performance indicators and metrics."
        >
          <Link href="/business-financial">
            <Button text="Get started" />
          </Link>
        </Hero>
        <div className={s.list}>
          {data.metrics.sections.map((sectionData) => {
            const total = sectionData.checklist.length;
            const completed = sectionData.checklist.filter((item) =>
              checkedIds.includes(item.id)
            ).length;

            return (
              <Link key={sectionData.id} href={`/${sectionData.id}`}>
                <div className={s.listItem}>
                  <div className={s.sectionOverview}>
                    <SectionTitle
                      title={sectionData.title}
                      total={total}
                      completed={completed}
                      completedLabel="Completed"
                    />
                    <p className={s.sectionDescription}>{sectionData.description}</p>
                    <span className={s.arrowRight}>
                      <IconArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default IndexRoute;