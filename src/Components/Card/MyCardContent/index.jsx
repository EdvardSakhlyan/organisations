import React from 'react';
import {Box, CardActions, CardContent, Tooltip, Typography} from "@mui/material";
import "./MyCardContent.scss"
import {toolTip} from "../../../MUI/styledComponents";

const MyCardContent = ({tracking , protection}) => {

    const handleChangeNumber = () => {}

    return (
        <CardContent>
            <hr/>
            <Typography className="fw-600" variant="body2">
                Licenses
            </Typography>
            <CardActions className="card-actions">
                <Box className="card-actions-box">
                    <Typography className="fw-600" variant="body2">Tracking</Typography>
                    <Tooltip title="Internal 140 | External 5" placement="top" componentsProps={toolTip}>
                        <Box className="card-actions-small-box">
                            <Typography color="text.secondary" variant="subtitle1">In use:</Typography>
                            <Typography color="red" variant="subtitle1">{tracking["in-use"]}</Typography>
                        </Box>
                    </Tooltip>
                    <Tooltip title="Internal 322 | External 855" placement="top" componentsProps={toolTip}>
                        <Box className="card-actions-small-box">
                            <Typography color="text.secondary" variant="subtitle1">Assigned:</Typography>
                            <input value={tracking["assigned"]} type="number" className="assigned-input" onChange={handleChangeNumber}/>
                        </Box>
                    </Tooltip>
                </Box>
                <Box className="card-actions-box">
                    <Typography className="fw-600" variant="body2">Protection</Typography>
                    <Tooltip title="Internal 840 | External 405" placement="top" componentsProps={toolTip}>
                        <Box className="card-actions-small-box" >
                            <Typography color="text.secondary" variant="subtitle1">In use:</Typography>
                            <Typography color="green" variant="subtitle1">{protection["in-use"]}</Typography>
                        </Box>
                    </Tooltip>
                    <Tooltip title="Internal 700 | External 255" placement="top" componentsProps={toolTip}>
                        <Box className="card-actions-small-box">
                            <Typography color="text.secondary" variant="subtitle1">Assigned:</Typography>
                            <input value={protection["assigned"]} type="number" className="assigned-input" onChange={handleChangeNumber}/>
                        </Box>
                    </Tooltip>
                </Box>
            </CardActions>
        </CardContent>
    );
};

export default MyCardContent;