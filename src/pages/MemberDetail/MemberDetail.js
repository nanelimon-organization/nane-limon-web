import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function MemberDetail(){
    let location = useLocation()
    return <Typography marginTop={30}>{location.state.name}</Typography>
}

export default MemberDetail;