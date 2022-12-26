import React, {useState} from 'react';
import {Card} from "@mui/material"
import MyCardHeader from "../MyCardHeader";
import MyCardContent from "../MyCardContent";
import BasicModal from "../../BasicModal";
// import EditCard from "../EditCard";
import CardView from "../CardView";
import AddOrEitCard from "../AddOrEitCard";

const CardItem = ({name,id , licenses : {tracking , protection}}) => {

    const [isOpenEdit , setOpenEdit] = useState(false)

    const [isOenCard , setOpenCard] = useState(false)

    return (
        <Card>
            <MyCardHeader
                name={name}
                id={id}
                setOpenEdit={setOpenEdit}
                setOpenCard={setOpenCard}
            />
            <MyCardContent tracking={tracking} protection={protection}/>
            <BasicModal setOpen={setOpenEdit} open={isOpenEdit}>
                <AddOrEitCard name={name} setOpenEdit={setOpenEdit} id={id} isEdit={true} tracking={tracking} protection={protection} setOpen={setOpenEdit}/>
            </BasicModal>
            <BasicModal setOpen={setOpenCard} open={isOenCard} big={true}>
                <CardView name={name} id={id} tracking={tracking} protection={protection}/>
            </BasicModal>
        </Card>
    );
};

export default CardItem;