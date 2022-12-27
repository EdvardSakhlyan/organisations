import React from 'react';
import {Box, Modal} from "@mui/material";
import {modalChildren , bigModalChildren} from "../../MUI/styledComponents";

const BasicModal = ({children , setOpen , open , big}) => {

    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={big ? bigModalChildren :modalChildren}>
                {children}
            </Box>
        </Modal>
    );
};

export default BasicModal;