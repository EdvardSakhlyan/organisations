import './App.scss';
import {Box, Button, Container} from "@mui/material";
import UpSide from "./Components/UpSide";
import Dashboard from "./Components/Dashboard";
import cards from './db'
import React, {useEffect, useState} from "react";
import {ThemeProvider} from "@emotion/react";
import defaultTheme from "./MUI/theme"
import MockRequest from "./MockRequest/MockRequest";
import Context from "./Context/context";

function App() {

    const [loadedUsers,setLoadedUsers] = useState(1)

    const [cardsArray, setCardsArray] = useState([])

    const loadUsers = () => setLoadedUsers(loadedUsers + 1)

    useEffect(() => {
        let {arr} = MockRequest(loadedUsers)
        setCardsArray(arr)
    },[loadedUsers])



    const contextValue = {
        loadedUsers,
        setLoadedUsers,
        cardsArray,
        setCardsArray,
    }


    return (
        <Context.Provider value={contextValue}>
            <Container maxWidth="xl" sx={{marginTop: "2rem"}}>
                <ThemeProvider theme={defaultTheme}>
                    <UpSide cards={cards}/>
                    <Dashboard/>
                    {MockRequest(loadedUsers).status && <Box display="flex" justifyContent="center" alignItems="center" height={"10vh"}>
                        <Button variant="contained" onClick={loadUsers}>Load More</Button>
                    </Box>}
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
