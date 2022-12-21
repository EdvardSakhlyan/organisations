import React from 'react';
import {Box, CardActions, CardContent, Tooltip, Typography} from "@mui/material";

const MyCardContent = () => {
    return (
        <CardContent>
            <hr/>
            <Typography sx={{fontWeight: "600"}} variant="body2">
                Licenses
            </Typography>
            <CardActions sx={{display: "flex",justifyContent: "space-between"}}>
                <Box width={"40%"} justifyContent={"space-between"}>
                    <Typography sx={{fontWeight: "600"}} variant="body2">Tracking</Typography>
                    <Tooltip
                        title="Internal 140 | External 5"
                        placement="top"
                        componentsProps={{tooltip: {sx: {backgroundColor: "#232323", fontSize: ".9vw"}}}}
                    >
                        <Box width={"100%"} display="flex" justifyContent={"space-between"}>
                            <Typography color="text.secondary" variant="subtitle1">In use:</Typography>
                            <Typography color="red" variant="subtitle1">1245</Typography>
                        </Box>
                    </Tooltip>
                    <Tooltip title="Internal 322 | External 855"
                             placement="top"
                             componentsProps={{tooltip: {sx: {backgroundColor: "#232323", fontSize: ".9vw"}}}}
                    >
                        <Box width={"100%"} display="flex" justifyContent={"space-between"}>
                            <Typography color="text.secondary" variant="subtitle1">Assigned:</Typography>
                            <Typography color="text.secondary" variant="subtitle1">1200</Typography>
                        </Box>
                    </Tooltip>
                </Box>
                <Box width={"40%"}>
                    <Typography sx={{fontWeight: "600"}} variant="body2">Protection</Typography>
                    <Tooltip title="Internal 840 | External 405"
                             placement="top"
                             componentsProps={{tooltip: {sx: {backgroundColor: "#232323", fontSize: ".9vw"}}}}
                    >
                        <Box width={"100%"} display="flex" justifyContent={"space-between"}>
                            <Typography color="text.secondary" variant="subtitle1">In use:</Typography>
                            <Typography color="green" variant="subtitle1">300</Typography>
                        </Box>
                    </Tooltip>
                    <Tooltip title="Internal 700 | External 255"
                             placement="top"
                             componentsProps={{tooltip: {sx: {backgroundColor: "#232323", fontSize: ".9vw"}}}}
                    >
                        <Box width={"100%"} display="flex" justifyContent={"space-between"}>
                            <Typography color="text.secondary" variant="subtitle1">Assigned:</Typography>
                            <Typography color="text.secondary" variant="subtitle1">850</Typography>
                        </Box>
                    </Tooltip>
                </Box>
            </CardActions>
        </CardContent>
    );
};

export default MyCardContent;