import React, {useContext, useRef, useState} from 'react';
import {Box, Button, FormHelperText, Input, InputLabel, Typography} from "@mui/material";
import context from "../../../Context/context";
import addOrganisation from "../../../Request/addOrganisation";
import {getOrganisations} from "../../../Request/getOrganisations";
import './AddCard.scss'

const AddCard = ({setOpen}) => {

    const [name , setName] = useState('')
    const [trackingInUse , setTrackingInUse] = useState(0)
    const [trackingAssigned , setTrackingAssigned] = useState(0)
    const [protectionInUse , setProtectionInUse] = useState(0)
    const [protectionAssigned , setProtectionAssigned] = useState(0)

    const {setCardsArray ,loadedUsersCount , setTotalCount} = useContext(context)

    const nameInput = useRef(null)

    const [focus , setFocus] = useState(false)

    const handleSubmit = async () => {
        if (name && trackingInUse && trackingAssigned && protectionInUse && protectionAssigned) {

            const newOrganisation = {
                "name": name,
                "licenses": {
                    "tracking": {
                        "in-use": trackingInUse,
                        "assigned": trackingAssigned
                    },
                    "protection": {
                        "in-use": protectionInUse,
                        "assigned": protectionAssigned
                    }

                }
            }

            await addOrganisation(newOrganisation)
            await getOrganisations(setCardsArray , loadedUsersCount ,setTotalCount )
            setName('');
            setProtectionAssigned(0);
            setTrackingAssigned(0)
            setTrackingInUse(0)
            setProtectionInUse(0)
            setOpen(false)
        } else {
            setFocus(true)
        }
    }

    const handleChange = ({target : {value}} , setState) => {
        setState(value)
    }

    return (
        <Box className="add-card-body">
            <Typography variant="h5">Add new organisation</Typography>
            <InputLabel htmlFor="my-input">Organisation name</InputLabel>
            <Input
                id="my-input"
                value={name}
                onChange={(event) => handleChange(event , setName)}
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
                    onChange={(event) => handleChange(event , setTrackingInUse)}/>
                <InputLabel htmlFor="tracking-in-use">Assigned</InputLabel>
                <Input
                    id="tracking-assigned"
                    type="number"
                    onChange={(event) => handleChange(event , setTrackingAssigned)}/>
            </Box>
            <Box className="add-card-box">
                <Typography variant="body2">Protection</Typography>
                <InputLabel htmlFor="protection-in-use">In-use</InputLabel>
                <Input
                    id="protection-in-use"
                    type="number"
                    onChange={(event) => handleChange(event , setProtectionInUse)}
                />
                <InputLabel htmlFor="protection-in-use">Assigned</InputLabel>
                <Input
                    id="protection-assigned"
                    type="number"
                    onChange={(event) => handleChange(event , setProtectionAssigned)}
                />
            </Box>
            <Button variant="outlined" type="submit" onClick={handleSubmit}>Add</Button>
            <FormHelperText id="my-helper-text">{focus && "You need fill in all fields"}</FormHelperText>
        </Box>
    );
};

export default AddCard;