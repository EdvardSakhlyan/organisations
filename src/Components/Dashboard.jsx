import React, {useContext} from 'react';
import {Button, Grid} from "@mui/material";
import CardItem from './Card/CardItem'
import context from "../Context/context";


const  Dashboard = () => {

    const {cardsArray} = useContext(context)

    return (
        <Grid container spacing={2} rowSpacing={2} sx={{marginTop: 0 , marginLeft: 0}} >
            {
                cardsArray.map((card) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={card.id}>
                            <CardItem name={card.name} id={card.id}/>
                        </Grid>
                    )
                })
            }

        </Grid>
    );
};

export default Dashboard;