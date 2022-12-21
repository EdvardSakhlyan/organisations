import React, {useContext, useRef, useState} from 'react';
import {Button, FormControl, FormHelperText, Input, InputLabel, Typography} from "@mui/material";
import context from "../../Context/context";

const EditCard = ({name , setOpenEdit , id}) => {

    const [newName,setNewName] = useState(name)
    const [focus , setFocus] = useState(false)

    const nameInput = useRef(null)

    const {cardsArray,setCardsArray} = useContext(context)

    const handleSubmit = () => {
        if (newName){
            setCardsArray(cardsArray.map(card => {
                if (card.id === id){
                    card.name = newName
                    return card
                }else{
                    return card
                }
            }))
            setNewName('')
            setOpenEdit(false)
        } else {
            setFocus(true)
        }
    }

    return (
        <>
            <Typography variant="body1" sx={{display: "block"}}>Edit organisation</Typography>
            <FormControl >
                <InputLabel htmlFor="edit-input">Organisation name</InputLabel>
                <Input
                    id="edit-input"

                    onChange={({target: {value}}) => {
                        setNewName(value)
                        setFocus(false)
                    }}
                    ref={nameInput}
                    autoFocus
                    aria-describedby="edit-helper-text"
                    sx={{margin: "1rem"}}
                    defaultValue={name}
                />
                {/*<Input type="submit"/>*/}
                <Button variant="outlined" type="submit" onClick={handleSubmit}>Save</Button>
                <FormHelperText id="edit-helper-text" sx={{color: "red",margin: "1rem"}}>{focus && "You need to enter some name"}</FormHelperText>
            </FormControl>
        </>
    );
};

export default EditCard;