import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Ciszko Contracting | Bathroom Renovations | Ancaster",
  description:"Ciszko Contracting specializes in bathroom renovations in Burlington, Oakville, Hamilton, Ancaster, Dundas, Waterdown"
     
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Ciszko Contracting specializes in bathroom renovations in Burlington, Oakville, Hamilton, Ancaster, Dundas, Waterdown"
      />
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
