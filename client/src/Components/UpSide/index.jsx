import React, {useCallback, useContext, useState} from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Search, SearchIconWrapper, StyledInputBase, toolbarTypography} from "../../MUI/styledComponents"
import BasicModal from "../BasicModal";
import {searchOrganisations} from "../../Request/searchOrganisation";
import context from "../../Context/context";
import AddOrEditCard from "../Card/AddOrEditCard";
import debounce from "lodash.debounce";
import "./UpSide.scss"

const UpSide = ({totalCount}) => {

    const {setCardsArray , loadedUsersCount , setTotalCount} = useContext(context)

    const [open, setOpen] = React.useState(false);

    const [searchedValue , setSearchedValue] = useState('')

    const handleOpen = () => setOpen(true);



    function handleSearch({target: {value}}) {
        if(/^[a-zA-Z1-9 ]+$/i.test(value) || value === "") {
            setSearchedValue(value);
            searchOrganisations(setCardsArray, value.trim(), loadedUsersCount, setTotalCount)
                .catch(e => console.log(e))
        } else {
            let textArr = value.split('')
            let filteredTextArr = textArr.filter(str => str.match(/^[a-zA-Z1-9 ]+$/i))
            setSearchedValue(filteredTextArr.join(''));
        }
    }

    const debouncedChangeHandler = useCallback(
        debounce(handleSearch, 300)
        , []);

    return (
        <AppBar position="static" color={"inherit"} variant={"outlined"} elevation={0}>
            <Toolbar className="toolbar">
                <Typography variant="h6" paragraph noWrap sx={toolbarTypography}>
                    All organizations({totalCount ? totalCount : "..."})
                </Typography>
                <Search className="search-organisation">
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search organization"
                        inputProps={{
                            'aria-label': 'search',
                            // value: searchedValue,
                            onChange: debouncedChangeHandler,
                            className: "search-organisation-input"
                        }}/>
                </Search>
                <Box className="toolbar-box">
                    <Button
                        variant="contained"
                        className="text-transform-none"
                        onClick={handleOpen}
                    >Add new organization</Button>
                </Box>
            </Toolbar>
            <BasicModal setOpen={setOpen} open={open}>
                <AddOrEditCard
                    setOpen={setOpen}
                    isEdit={false}
                />
            </BasicModal>
        </AppBar>
    );
};

export default UpSide;