import React from "react";
import Layout from "../../src/components/Layout";
import Section from "../../src/components/Section";
import CategoryNav from "../../src/components/CategoryNav";
import data from "../../src/data";

const MetricsCategoryRoute = ({ sectionData }) => {
  if (!sectionData) {
    return (
      <Layout>
        <div>Section not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <CategoryNav 
        categories={data.metrics.sections.map(section => ({
          id: section.id,
          title: section.title,
          href: `/metrics/${section.id}`
        }))}
        activeId={sectionData.id}
      />
      <Section section={sectionData} completedLabel="Completed" />
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
  const data = (await import('../../src/data')).default;

  const sectionData = data.metrics.sections.find(section => section.id === params.id);

  return {
    props: { 
      sectionData: sectionData || null
    },
  };
}

export default MetricsCategoryRoute;