import React, {useContext, useRef, useState} from 'react';
import {Box, Button, FormHelperText, Input, InputLabel, Typography} from "@mui/material";
import context, {UnitContext} from "../../../Context/context";
import addOrganisation from "../../../Request/addOrganisation";
import {getOrganisations} from "../../../Request/getOrganisations";
import './AddOrEditCard.scss'
import {updateOrganisation} from "../../../Request/updateOrganisation";

const AddOrEditCard = ({setOpen, isEdit}) => {

    const {
        name,
        id,
        tracking_in_use,
        tracking_assigned,
        protection_in_use,
        protection_assigned
    } = useContext(UnitContext)

    const [newName, setNewName] = useState(isEdit ? name : '')
    const [trackingInUse, setTrackingInUse] = useState(isEdit ? tracking_in_use : 0)
    const [trackingAssigned, setTrackingAssigned] = useState(isEdit ? tracking_assigned : 0)
    const [protectionInUse, setProtectionInUse] = useState(isEdit ? protection_in_use : 0)
    const [protectionAssigned, setProtectionAssigned] = useState(isEdit ? protection_assigned : 0)

    const {setCardsArray, loadedUsersCount, setTotalCount} = useContext(context)

    const nameInput = useRef(null)

    const [focus, setFocus] = useState(false)

    const handleSubmit = async () => {
        if (newName && trackingInUse && trackingAssigned && protectionInUse && protectionAssigned) {

            const newOrganisation = {
                name: newName,
                tracking_in_use: trackingInUse,
                tracking_assigned: trackingAssigned,
                protection_in_use: protectionInUse,
                protection_assigned: protectionAssigned
            }
            if (isEdit) {
                await updateOrganisation(id, newOrganisation)
            } else {
                await addOrganisation(newOrganisation)
            }
            await getOrganisations(setCardsArray, loadedUsersCount, setTotalCount)
            setNewName('');
            setProtectionAssigned(0);
            setTrackingAssigned(0)
            setTrackingInUse(0)
            setProtectionInUse(0)
            setOpen(false)
        } else {
            setFocus(true)
        }
    }

    const handleChange = ({target: {value}}, setState) => {
        setState(value)
    }

    return (
        <Box className="add-card-body">
            <Typography variant="h5">{isEdit ? "Edit organisation" : "Add new organisation"}</Typography>
            <InputLabel htmlFor="my-input">Organisation name</InputLabel>
            <Input
                id="my-input"
                value={newName}
                onChange={(event) => handleChange(event, setNewName)}
                ref={nameInput}
                aria-describedby="my-helper-text"
            />
            <Typography variant="h6">Licences</Typography>
            <Box className="add-card-box">
                <Typography variant="body2">Tracking</Typography>
                <InputLabel htmlFor="tracking-in-use" variant="standard">In-use</InputLabel>
                <Input
                    id="tracking-in-use"
                    type="number"
                    value={trackingInUse}
                    onChange={(event) => handleChange(event, setTrackingInUse)}/>
                <InputLabel htmlFor="tracking-in-use">Assigned</InputLabel>
                <Input
                    id="tracking-assigned"
                    type="number"
                    value={trackingAssigned}
                    onChange={(event) => handleChange(event, setTrackingAssigned)}/>
            </Box>
            <Box className="add-card-box">
                <Typography variant="body2">Protection</Typography>
                <InputLabel htmlFor="protection-in-use">In-use</InputLabel>
                <Input
                    id="protection-in-use"
                    type="number"
                    value={protectionInUse}
                    onChange={(event) => handleChange(event, setProtectionInUse)}
                />
                <InputLabel htmlFor="protection-in-use">Assigned</InputLabel>
                <Input
                    id="protection-assigned"
                    type="number"
                    value={protectionAssigned}
                    onChange={(event) => handleChange(event, setProtectionAssigned)}
                />
            </Box>
            <Button
                variant="outlined"
                sx={{marginTop: "20px"}}
                type="submit"
                onClick={handleSubmit}
            >
                {isEdit ? "Save" : "Add"}
            </Button>
            <FormHelperText id="my-helper-text">{focus && "You need fill in all fields"}</FormHelperText>
        </Box>
    );
};

export default AddOrEditCard;