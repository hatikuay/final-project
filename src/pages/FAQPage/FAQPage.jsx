import React from 'react';
import FAQ from "../../components/FAQ/FAQ";

function FaqPage({faqPageData}) {

  const dropDownMenuData = faqPageData.dropDownMenuData;
  return (
    <div className={"faq-page"}>
      <FAQ dropdownMenuData={dropDownMenuData}/>
    </div>
  );
}

export default FaqPage;