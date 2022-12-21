import React from 'react';
import {Avatar, Card, CardHeader} from "@mui/material";
import MyCardContent from "./MyCardContent";

const CardView = ({name}) => {
    return (
        <Card sx={{width: "100%", height: "100%"}}>
            <CardHeader
                avatar={<Avatar aria-label="recipe">R</Avatar>}
                titleTypographyProps={{variant:'body1' , fontWeight: "700"}}
                title={name}
            />
            <MyCardContent/>
        </Card>
    );
};

export default CardView;