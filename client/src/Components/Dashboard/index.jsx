import React, {useContext} from 'react';
import {Grid} from "@mui/material";
import context from "../../Context/context";
import CardItem from "../Card/CardItem";


const  Dashboard = () => {

    const {cardsArray} = useContext(context)

    return (
        <Grid container spacing={2} rowSpacing={2} sx={{marginTop: 0 }} >
            {
                cardsArray.map((card) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={card.id}>
                            <CardItem
                                name={card.name}
                                id={card.id}
                                tracking_in_use={card.tracking_in_use}
                                tracking_assigned={card.tracking_assigned}
                                protection_in_use={card.protection_in_use}
                                protection_assigned={card.protection_assigned}
                            />
                        </Grid>
                    )
                })
            }

        </Grid>
    );
};

export default Dashboard;