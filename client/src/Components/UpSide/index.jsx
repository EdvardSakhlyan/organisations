import React, {useContext, useState} from 'react';
import {AppBar, Box, Button,Toolbar, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Search,SearchIconWrapper,StyledInputBase} from "../../MUI/styledComponents"
import BasicModal from "../BasicModal";
import {searchOrganisations} from "../../Request/searchOrganisation";
import context from "../../Context/context";
import AddOrEditCard from "../Card/AddOrEditCard";

const UpSide = ({totalCount}) => {

    const [open, setOpen] = React.useState(false);

    const [searchedValue , setSearchedValue] = useState('')

    const handleOpen = () => setOpen(true);



    const {setCardsArray , loadedUsersCount , setTotalCount} = useContext(context)

    console.log(loadedUsersCount)

    function handleSearch({target: {value}}) {
        if(/^[a-zA-Z1-9 ]+$/i.test(value) || value === "") {
            setSearchedValue(value);
            searchOrganisations(setCardsArray,value.trim(),loadedUsersCount,setTotalCount).catch(e => console.log(e))
        } else {
            let textArr = value.split('')
            let filteredTextArr = textArr.filter(str => str.match(/^[a-zA-Z1-9 ]+$/i))
            setSearchedValue(filteredTextArr.join(''));
        }
    }

    return (
        <AppBar position="static" color={"inherit"} variant={"outlined"} elevation={0}>
            <Toolbar>
                <Typography
                    variant="h6"
                    paragraph
                    noWrap
                    sx={{display: {xs: 'none', sm: 'block', fontWeight: "700"}}}
                >
                    All organizations({totalCount ? totalCount : "..."})
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search organization"
                        inputProps={{
                            'aria-label': 'search',
                            value: searchedValue,
                            onChange: handleSearch
                        }}/>
                </Search>
                <Box display={"flex"} justifyContent="end" flexGrow={1}>
                    <Button
                        variant="contained"
                        style={{textTransform: 'none'}}
                        onClick={handleOpen}
                    >Add new organization</Button>
                </Box>
            </Toolbar>
            <BasicModal setOpen={setOpen} open={open}>
                <AddOrEditCard
                    setOpen={setOpen}
                    isEdit={true}
                />
            </BasicModal>
        </AppBar>
    );
};

export default UpSide;