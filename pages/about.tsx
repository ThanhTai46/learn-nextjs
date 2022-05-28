import { MainLayout } from "@/components/layout";
import dynamic from "next/dynamic";

import React from "react";

const Header = dynamic(() => import("../components/common/header"), {
  ssr: false,
});
export interface AboutPageProps {}

const AboutPage = (props: AboutPageProps) => {
  return (
    <div>
      <MainLayout>
        <h2>About Page</h2>
        <Header />
      </MainLayout>
    </div>
  );
};

AboutPage.Layout = MainLayout;
export default AboutPage;
