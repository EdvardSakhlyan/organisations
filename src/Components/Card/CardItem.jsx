import React, {useState} from 'react';
import {Card} from "@mui/material"
import MyCardHeader from "./MyCardHeader";
import MyCardContent from "./MyCardContent";
import BasicModal from "../BasicModal/BasicModal";
import EditCard from "./EditCard";
import CardView from "./CardView";

const CardItem = ({name,id}) => {

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
            <MyCardContent/>
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