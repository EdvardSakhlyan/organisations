import React from 'react';
import {Box, CardActions, CardContent, Tooltip, Typography} from "@mui/material";
import {tooltip} from "../../../MUI/styledComponents";
import "../AddOrEditCard/AddOrEditCard.scss"

const MyCardContent = ({tracking_in_use,tracking_assigned,protection_in_use,protection_assigned}) => {

    const changeProtectionAssigned = ({target: {value}}) => {
        console.log(value)
    }

    const changeTrackingAssigned = ({target: {value}}) => {
        console.log(value)
    }

    return (
        <CardContent>
            <hr/>
            <Typography className="fw-600" variant="body2">Licenses</Typography>
            <CardActions className="cards-actions">
                <Box>
                    <Typography className="fw-600" variant="body2">Tracking</Typography>
                    <Tooltip title="Internal 140 | External 5" placement="top" componentsProps={{tooltip}}>
                        <Box className="card-info-box">
                            <Typography color="text.secondary" variant="subtitle1">In use:</Typography>
                            <Typography color="red" variant="subtitle1">{tracking_in_use}</Typography>
                        </Box>
                    </Tooltip>
                    <Tooltip title="Internal 322 | External 855" placement="top" componentsProps={{tooltip}}>
                        <Box className="card-info-box">
                            <Typography color="text.secondary" variant="subtitle1">Assigned:</Typography>
                            <input type="number" value={tracking_assigned} onChange={changeTrackingAssigned}/>
                        </Box>
                    </Tooltip>
                </Box>
                <Box>
                    <Typography className={"fw-600"} variant="body2">Protection</Typography>
                    <Tooltip title="Internal 840 | External 405" placement="top" componentsProps={{tooltip}}>
                        <Box className="card-info-box">
                            <Typography color="text.secondary" variant="subtitle1">In use:</Typography>
                            <Typography color="green" variant="subtitle1">{protection_in_use}</Typography>
                        </Box>
                    </Tooltip>
                    <Tooltip title="Internal 700 | External 255" placement="top" componentsProps={{tooltip}}>
                        <Box className="card-info-box">
                            <Typography color="text.secondary" variant="subtitle1">Assigned:</Typography>
                            <input type="number" value={protection_assigned} onChange={changeProtectionAssigned}/>
                        </Box>
                    </Tooltip>
                </Box>
            </CardActions>
        </CardContent>
    );
};

export default MyCardContent;