import React from 'react';
import "./PrivateYachtCharter.scss"
import Review from "../../components/Review/Review";
import YachtCharterFilter from "../../components/YachtCharter/YachtCharterFilter";
import ProductList from "../../components/YachtCharter/ProductList";
function PrivateYachtCharter(props) {
  return (
    <div className={"private-yacht-charter"}>
          <Review/>
          <div className={"yacht-charter-page"}>
            <YachtCharterFilter/>
            <ProductList/>
          </div>
    </div>
  );
}

export default PrivateYachtCharter;