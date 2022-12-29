import React, {useState} from 'react';
import {Card} from "@mui/material"
import MyCardHeader from "../MyCardHeader";
import MyCardContent from "../MyCardContent";
import BasicModal from "../../BasicModal";
import EditCard from "../EditCard";
import CardView from "../CardView";

const CardItem = ({name,id,tracking_in_use,tracking_assigned,protection_in_use,protection_assigned}) => {

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
            <MyCardContent
                tracking_in_use={tracking_in_use}
                tracking_assigned={tracking_assigned}
                protection_in_use={protection_in_use}
                protection_assigned={protection_assigned}
            />
            <BasicModal setOpen={setOpenEdit} open={isOpenEdit}>
                <EditCard name={name} setOpenEdit={setOpenEdit} id={id}/>
            </BasicModal>
            <BasicModal setOpen={setOpenCard} open={isOenCard} big={true}>
                <CardView name={name} id={id}/>
            </BasicModal>
        </Card>
    );
};

export default CardItem;