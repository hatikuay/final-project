import React from 'react';
import "./privateYachtDetail.scss"
import PrivateYachtInfo from "../../components/PrivateYachtInfo/PrivateYachtInfo";
import {useLocation} from "react-router";
import {YachtDetail} from "./yachtDetail";

function PrivateYachtDetail(props) {
  const location = useLocation()
  const yachtId = location.state.yachtId;
  const yachtDetail = YachtDetail.data[yachtId][0];

  return (
    <div className={"private-yacht-detail"}>
      <PrivateYachtInfo yachtDetail={yachtDetail}/>
    </div>
  );
}

export default PrivateYachtDetail;