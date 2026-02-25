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
    { label: "WINDOWS", href: "https://printerconnect.online/" },
    { label: "MAC OS", href: "https://printerconnect.online/" },
    { label: "CHROMEBOOK", href: "https://printerconnect.online/" },
  ];
  return (
    <>
 <PrinterCategories />
   <GettingStarted links={printerLinks} />
  
  <EasyPrintingSetup
        imageSrc={Printer02}
        ctaHref="https://printerconnect.online/"
      />
      <PrintingInfoSection />
    <SmartPrintingSetup
        imageSrc={Printer01}
        ctaHref="https://printerconnect.online/"
      />
      <HomePrintingConcepts />
    </>
  );
}