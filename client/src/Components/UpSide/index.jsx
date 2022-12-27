import React, {useState} from 'react';
import {AppBar, Box, Button,Toolbar, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Search,SearchIconWrapper,StyledInputBase} from "../../MUI/styledComponents"
import BasicModal from "../BasicModal";
import AddCard from "../Card/AddCard";

const UpSide = ({totalCount}) => {

    const [open, setOpen] = React.useState(false);

    const [searchedValue , setSearchedValue] = useState('')

    const handleOpen = () => setOpen(true);

    function handleSearch({target: {value}}) {
        if(/^[a-zA-Z1-9 ]+$/i.test(value)) {
            setSearchedValue(value);
        } else {
            let textArr = value.split('')
            let filteredTextArr = textArr.filter(str => str.match(/^[a-zA-Z1-9 ]+$/i))
            setSearchedValue(filteredTextArr.join(''));
        }
    }

    // const {setCardsArray} = useContext(context)

    // useEffect(() => {
    //     let searched = searchedValue.toLowerCase().trim().replace(/ /g, '')
    //     // if (!searchedValue){
    //     //     setCardsArray(GetUsers(loadedUsers).arr)
    //     // }
    //     if (/^[a-zA-Z1-9 ]+$/i.test(searchedValue)) {
    //         setCardsArray(cards.filter(({name}) => {
    //             let variable = name.toLowerCase().trim().replace(/ /g, '')
    //             return variable.startsWith(searched)
    //         }))
    //     }
    // }, [searchedValue , setCardsArray])

    // const handleSearch = () => {
    //     setCardsArray(cards.filter(card ))
    // }

    return (
        <AppBar position="static"  color={"inherit"} variant={"outlined"} elevation={0}>
            <Toolbar>
                <Typography
                    variant="h6"
                    paragraph
                    noWrap
                    sx={{ display: { xs: 'none', sm: 'block' , fontWeight: "700" } }}
                >
                    All organizations({totalCount ? totalCount : "..."})
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search organization"
                        inputProps={{
                            'aria-label': 'search' ,
                            value: searchedValue ,
                            onChange: handleSearch
                    }}/>
                </Search>
                <Box display={"flex"} justifyContent="end" flexGrow={1}>
                    <Button
                        variant="contained"
                        style={{textTransform : 'none'}}
                        onClick={handleOpen}
                    >Add new organization</Button>
                </Box>
            </Toolbar>
            <BasicModal setOpen={setOpen} open={open}>
                <AddCard setOpen={setOpen}/>
            </BasicModal>
        </AppBar>
    );
};

export default UpSide;