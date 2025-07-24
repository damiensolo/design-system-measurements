import React from "react";
import Layout from "../src/components/Layout";
import Section from "../src/components/Section";
import CategoryNav from "../src/components/CategoryNav";
import Link from "next/link";
import data from "../src/data";
import s from "./metrics.module.css";

const SectionRoute = ({ sectionData }) => {
  if (!sectionData) {
    return (
      <Layout>
        <div>Section not found</div>
      </Layout>
    );
  }

  const currentIndex = data.metrics.sections.findIndex(section => section.id === sectionData.id);
  const previousSection = currentIndex > 0 ? data.metrics.sections[currentIndex - 1] : null;
  const nextSection = currentIndex < data.metrics.sections.length - 1 ? data.metrics.sections[currentIndex + 1] : null;

  return (
    <Layout>
      <div className={s.container}>
        <CategoryNav 
          categories={data.metrics.sections.map(section => ({
            id: section.id,
            title: section.title,
            href: `/${section.id}`
          }))}
          activeId={sectionData.id}
        />
        <Section section={sectionData} completedLabel="Completed" />

        <div className={s.navigation}>
          {previousSection && (
            <Link href={`/${previousSection.id}`} className={s.navLink}>
              <div className={s.navItem}>
                <span className={s.navDirection}>← Previous</span>
                <span className={s.navTitle}>{previousSection.title}</span>
              </div>
            </Link>
          )}
          {nextSection && (
            <Link href={`/${nextSection.id}`} className={s.navLink}>
              <div className={s.navItem}>
                <span className={s.navDirection}>Next →</span>
                <span className={s.navTitle}>{nextSection.title}</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const data = (await import('../src/data')).default;

  const paths = data.metrics.sections.map((section) => ({
    params: { id: section.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = (await import('../src/data')).default;

  const sectionData = data.metrics.sections.find(
    (section) => section.id === params.id
  );

  return {
    props: {
      sectionData: sectionData || null,
    },
  };
}

export default SectionRoute;