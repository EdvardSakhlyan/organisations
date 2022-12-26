import React, {useContext} from 'react';
import {Grid} from "@mui/material";
import context from "../../Context/context";
import CardItem from "../Card/CardItem";
import "./Dashboard.scss"


const  Dashboard = () => {

    const {cardsArray} = useContext(context)

    return (
        <Grid container spacing={2} rowSpacing={2} className="grid">
            {cardsArray.map((card) => <Grid item xs={12} sm={6} md={4} key={card.id}>
                    <CardItem name={card.name} id={card.id} licenses={card.licenses}/>
                </Grid>
            )}
        </Grid>
    );
};

export default Dashboard;