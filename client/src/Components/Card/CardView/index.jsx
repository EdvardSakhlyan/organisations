import React, {useContext} from 'react';
import {Avatar, Card, CardHeader} from "@mui/material";
import MyCardContent from "../MyCardContent";
import "./CardView.scss"
import {titleTypographyProps} from "../../../MUI/styledComponents";
import {UnitContext} from "../../../Context/context";

const CardView = () => {

    const {name} = useContext(UnitContext)

    return (
        <Card className="card-view" >
            <CardHeader
                avatar={<Avatar aria-label="recipe">{name.charAt(0)}</Avatar>}
                titleTypographyProps={titleTypographyProps}
                title={name}
            />
            <MyCardContent/>
        </Card>
    );
};

export default CardView;