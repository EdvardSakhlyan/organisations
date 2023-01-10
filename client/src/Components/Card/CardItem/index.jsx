import React, {useContext, useState} from 'react';
import {Card} from "@mui/material"
import MyCardHeader from "../MyCardHeader";
import MyCardContent from "../MyCardContent";
import BasicModal from "../../BasicModal";
import AddOrEditCard from "../AddOrEditCard";
import CardView from "../CardView";

const CardItem = () => {

    const [open , setOpen] = useState(false)

    const [isOenCard , setOpenCard] = useState(false)

    return (
        <Card>
            <MyCardHeader setOpenEit={setOpen} setOpenCard={setOpenCard}/>
                <MyCardContent/>
            <BasicModal setOpen={setOpen} open={open}>
                <AddOrEditCard setOpen={setOpen} isEdit={true}/>
            </BasicModal>
            <BasicModal setOpen={setOpenCard} open={isOenCard} big={true} >
                <CardView/>
            </BasicModal>
        </Card>
    );
};

export default CardItem;