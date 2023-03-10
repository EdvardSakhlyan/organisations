import React, {useContext} from 'react';
import {Grid} from "@mui/material";
import context from "../../Context/context";
import CardItem from "../Card/CardItem";
import {UnitContext} from "../../Context/context";


const  Dashboard = () => {

    const {cardsArray} = useContext(context)

    return (
        <Grid container spacing={2} rowSpacing={2} sx={{marginTop: 0 }} >
            {
                cardsArray.map((card) => {
                    return (
                        <UnitContext.Provider value={card} key={card.id}>
                            <Grid item xs={12} sm={6} md={4}>
                                <CardItem/>
                            </Grid>
                        </UnitContext.Provider>

                    )
                })
            }

        </Grid>
    );
};

export default Dashboard;