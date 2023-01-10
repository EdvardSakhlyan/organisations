import React, {useContext, useState} from 'react';
import {Box, CardActions, CardContent, Tooltip, Typography} from "@mui/material";
import {tooltip} from "../../../MUI/styledComponents";
import "./MyCardContent.scss"
import {isMobile} from 'react-device-detect';
import {UnitContext} from "../../../Context/context";

const MyCardContent = () => {

    const {tracking_in_use, tracking_assigned, protection_in_use, protection_assigned} = useContext(UnitContext)

    const [trackingAssigned, setTrackingAssigned] = useState(tracking_assigned)
    const [protectionAssigned, setProtectionAssigned] = useState(protection_assigned)

    const handleChange = ({target : {value}} , setState) => setState(value)

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
                            <input
                                className={isMobile ? "assignedInputMobile" : "assignedInput"}
                                type="number"
                                defaultValue={trackingAssigned}
                                onChange={(event) => handleChange(event,setTrackingAssigned)}/>
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
                            <input
                                className={isMobile ? "assignedInputMobile" : "assignedInput"}
                                type="number"
                                defaultValue={protectionAssigned}
                                onChange={(event) => handleChange(event,setProtectionAssigned)}/>
                        </Box>
                    </Tooltip>
                </Box>
            </CardActions>
        </CardContent>
    );
};

export default MyCardContent;