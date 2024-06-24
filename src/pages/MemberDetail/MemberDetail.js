import { Navigate, useLocation, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { members, validMembers } from "../../constants/members";
import MemberDetailContainer from "./components/MemberDetailContainer";
import BreadCrumbs from "./components/BreadCrumbs";
import DetailCardContainer from "./components/DetailCardContainer";
import CardDetail from "./components/CardContent";
import { useLoading } from "../../contexts/LoadingContext";

function MemberDetail() {
  const { memberDetail } = useParams();
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    hideLoading();
    return () => showLoading();
  }, []);

  let location = useLocation();

  if (!validMembers.includes(memberDetail)) {
    return <Navigate to="/error" />;
  }

  if (location.state == null && validMembers.includes(memberDetail)) {
    const member = members.find((member) => member.slug === memberDetail);
    location.state = member;
  }

  return (
    <MemberDetailContainer>
      <BreadCrumbs location={location} />
      <DetailCardContainer>
        <CardDetail location={location} />
      </DetailCardContainer>
    </MemberDetailContainer>
  );
}

export default MemberDetail;
