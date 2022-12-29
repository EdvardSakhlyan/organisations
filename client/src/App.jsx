import './App.scss';
// import {Box, Button, Container} from "@mui/material";
// import Index from "./Components/Index";
// import Index from "./Components/Index";
// import cards from './db.json'
import React, {useEffect, useState} from "react";
// import {ThemeProvider} from "@emotion/react";
// import defaultTheme from "./MUI/theme"
// import GetUsers from "./Request/getOrganisations";
import Context from "./Context/context";
import {getOrganisations} from "./Request/getOrganisations";
import UpSide from "./Components/UpSide";
import {Box, Button, Container, ThemeProvider} from "@mui/material";
import defaultTheme from "./MUI/theme";
import Dashboard from "./Components/Dashboard";
import axios from "axios";
import {searchOrganisations} from "./Request/searchOrganisation";
// import getOrganisations from "./Request/getOrganisations";

function App() {

    const [loadedUsersCount,setLoadedUsersCount] = useState(6)

    const [cardsArray, setCardsArray] = useState([])

    const [totalCount , setTotalCount] = useState(0)

    const [searched,setSearched] = useState([])

    // const loadUsers = () => setLoadedUsers(loadedUsers + 1)
    // if (getOrganisations["pending"]){
    //     console.log("loading")
    // }else {
    //     console.log("success")
    // }

    // useEffect(() => {
    //     getAllUsers(setAllCards)
    // },[cardsArray.length])

    useEffect(() => {
        getOrganisations(setCardsArray , loadedUsersCount , setTotalCount)
    },[loadedUsersCount])

    // useEffect(() => {
    //     console.log(true)
    //     getOrganisations(setCardsArray , loadedUsersCount)
    // }, [])



    const contextValue = {
        loadedUsersCount,
        setLoadedUsersCount,
        cardsArray,
        setCardsArray,
        setTotalCount
    }

    useEffect(() => {
        try {
            searchOrganisations(setSearched,"new",setTotalCount)
        }catch (e){
            console.log(e)
        }

    })


    return (
        <Context.Provider value={contextValue}>
            <Container maxWidth="xl" sx={{marginTop: "2rem"}}>
                <ThemeProvider theme={defaultTheme}>
                    <UpSide totalCount={totalCount}/>
                    <Dashboard/>
                    <Box display="flex" justifyContent="center" alignItems="center" height={"10vh"}>
                        <Button variant="contained" onClick={() => setLoadedUsersCount(prevState => prevState + 6)}>Load More</Button>
                    </Box>
                </ThemeProvider>
            </Container>
        </Context.Provider>

    )
}

export default App;

// const filteredValue = ['key1', "key2"]
//
// const data = [
//     {key1: 0, key2: undefined},
//     {key1: null, key2: 'string'},
//     {key1: undefined, key2: 'string'},
//     {key1: 'undefined', key2: null},
// ]
//
// const getFiltered = data.filter()
