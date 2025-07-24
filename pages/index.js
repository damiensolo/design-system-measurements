
import React from "react";
import Hero from "../src/components/Hero";
import Layout from "../src/components/Layout";
import Button from "../src/components/Button";
import SectionTitle from "../src/components/SectionTitle";
import Link from "next/link";
import { useCheckedIds } from "../src/utilities/checklistsContext";
import data from "../src/data";
import s from "./metrics.module.css";
import IconArrowRight from "../src/icons/arrowRight";

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
