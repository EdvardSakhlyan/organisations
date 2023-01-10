import './App.scss';
import React, {useEffect, useState} from "react";
import Context from "./Context/context";
import {getOrganisations} from "./Request/getOrganisations";
import UpSide from "./Components/UpSide";
import {Box, Button, Container, ThemeProvider} from "@mui/material";
import defaultTheme from "./MUI/theme";
import Dashboard from "./Components/Dashboard";

function App() {

    const [loadedUsersCount,setLoadedUsersCount] = useState(6)

    const [cardsArray, setCardsArray] = useState([])

    const [totalCount , setTotalCount] = useState(0)

    useEffect(() => {
        getOrganisations(setCardsArray , loadedUsersCount , setTotalCount).catch(e => console.log(e))
    },[loadedUsersCount])

    const contextValue = {
        loadedUsersCount,
        setLoadedUsersCount,
        cardsArray,
        setCardsArray,
        setTotalCount
    }

    return (
        <Context.Provider value={contextValue}>
            <Container maxWidth="xl" sx={{marginTop: "2rem"}}>
                <ThemeProvider theme={defaultTheme}>
                    <UpSide totalCount={totalCount}/>
                    <Dashboard/>
                    <Box className="load-more-box">
                        {
                            totalCount > loadedUsersCount &&
                            <Button
                                variant="contained"
                                onClick={() => setLoadedUsersCount(prevState => prevState + 6)}>
                                Load More
                            </Button>
                        }
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
