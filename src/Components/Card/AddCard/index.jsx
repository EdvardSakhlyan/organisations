import React, {useContext, useRef, useState} from 'react';
import {Button, FormControl, FormHelperText, Input, InputLabel, Typography} from "@mui/material";
import context from "../../../Context/context";
import addOrganisation from "../../../Request/addOrganisation";
import {getOrganisations} from "../../../Request/getOrganisations";

const AddCard = ({setOpen}) => {

    const [newName , setNewName] = useState('')

    const {setCardsArray ,loadedUsersCount , setTotalCount} = useContext(context)

    const nameInput = useRef(null)

    const [focus , setFocus] = useState(false)

    const handleSubmit = async () => {
        if (newName){
            let newOrganisation = {
                id: (Math.random() * 10000).toFixed(),
                name: newName,

            }
            await addOrganisation(newOrganisation)
            // setCardsArray([...cardsArray,newOrganisation])
            await getOrganisations(setCardsArray , loadedUsersCount ,setTotalCount )
            setNewName('')
            setOpen(false)
        } else {
            setFocus(true)
        }
    }

    return (
        <>
            <Typography variant="body1" sx={{display: "block"}}>Add new organisation</Typography>
            <FormControl >
                <InputLabel htmlFor="my-input">Organisation name</InputLabel>
                <Input
                    id="my-input"
                    value={newName}
                    onChange={({target: {value}}) => {
                        setNewName(value)
                        setFocus(false)
                    }}
                    ref={nameInput}
                    autoFocus
                    aria-describedby="my-helper-text"
                    sx={{margin: "1rem"}}
                />
                {/*<Input type="submit"/>*/}
                <Button variant="outlined" type="submit" onClick={handleSubmit}>Add</Button>
                <FormHelperText id="my-helper-text" sx={{color: "red",margin: "1rem"}}>{focus && "You need to enter some name"}</FormHelperText>
            </FormControl>
        </>

    );
};

export default AddCard;