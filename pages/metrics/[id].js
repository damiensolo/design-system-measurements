import React from "react";
import Layout from "../../src/components/Layout";
import Section from "../../src/components/Section";
import CategoryNav from "../../src/components/CategoryNav";
import data from "../../src/data";

const MetricsCategoryRoute = ({ t, sectionData }) => {
  if (!sectionData) {
    return (
      <Layout t={t}>
        <div>Section not found</div>
      </Layout>
    );
  }

  return (
    <Layout t={t}>
      <CategoryNav 
        categories={data.metrics.sections.map(section => ({
          id: section.id,
          title: section.title,
          href: `/metrics/${section.id}`
        }))}
        activeId={sectionData.id}
      />
      <Section section={sectionData} completedLabel={t.core.completed} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const data = (await import('../../src/data')).default;

  const paths = data.metrics.sections.map((section) => ({
    params: { id: section.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const t = (await import('../../src/translations/en/index')).default;
  const data = (await import('../../src/data')).default;

  const sectionData = data.metrics.sections.find(section => section.id === params.id);

  return {
    props: { 
      t,
      sectionData: sectionData || null
    },
  };
}

export default MetricsCategoryRoute;