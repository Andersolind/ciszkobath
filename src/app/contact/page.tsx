import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Ciszko Contracting  Ancaster Bathroom renovations",
  description:"Ciszko Contracting specializes in bathroom renovations in Burlington, Oakville, Hamilton, Ancaster, Dundas, Waterdown"
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Ciszko Contracting specializes in bathroom renovations in Burlington, Oakville, Hamilton, Ancaster, Dundas, Waterdown"
       />

      <Contact />
    </>
  );
};

export default ContactPage;
