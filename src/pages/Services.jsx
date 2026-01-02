import React from 'react';
import PrinterCategories from "../components/services/PrinterCategories";
import GettingStarted from "../components/services/GettingStarted"
import EasyPrintingSetup from "../components/services/EasyPrintingSetup";
import PrintingInfoSection from "../components/services/PrintingInfoSection";
import SmartPrintingSetup from "../components/services/SmartPrintingSetup";
import HomePrintingConcepts from "../components/services/HomePrintingConcepts";
import Printer02 from "../img/printer02.png";
import Printer01 from "../img/printer01.png";

export default function ServicesPage() {
     const printerLinks = [
    { label: "WINDOWS", href: "https://fastprintercoonect.online/" },
    { label: "MAC OS", href: "https://fastprintercoonect.online/" },
    { label: "CHROMEBOOK", href: "https://fastprintercoonect.online/" },
  ];
  return (
    <>
 <PrinterCategories />
   <GettingStarted links={printerLinks} />
  
  <EasyPrintingSetup
        imageSrc={Printer02}
        ctaHref="https://fastprintercoonect.online/"
      />
      <PrintingInfoSection />
    <SmartPrintingSetup
        imageSrc={Printer01}
        ctaHref="https://fastprintercoonect.online/"
      />
      <HomePrintingConcepts />
    </>
  );
}