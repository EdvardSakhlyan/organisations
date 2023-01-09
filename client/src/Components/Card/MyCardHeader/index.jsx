import React, {useContext} from 'react';
import {Avatar, CardHeader, Icon, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";
import CallMissedOutgoingTwoToneIcon from "@mui/icons-material/CallMissedOutgoingTwoTone";
import BlockTwoToneIcon from "@mui/icons-material/BlockTwoTone";
import context, {UnitContext} from "../../../Context/context";
import {deleteOrganisation} from "../../../Request/deleteOrganisation";
import {getOrganisations} from "../../../Request/getOrganisations";
import {titleTypographyProps} from "../../../MUI/styledComponents";

const MyCardHeader = ({setOpenEit,setOpenCard}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const {setCardsArray ,loadedUsersCount , setTotalCount} = useContext(context)

    const {
        name,
        id,
    } = useContext(UnitContext)

    const handleEdit = () => {
        setOpenEit(true)
    }

    const handleGoTo = () => {
        setOpenCard(true)
    }

    const handleDelete = async (deletedId) => {
        await deleteOrganisation(deletedId)
        await getOrganisations(setCardsArray,loadedUsersCount,setTotalCount)
        // setCardsArray(cardsArray.filter(card => card.id !== deletedId))
    }

    const MyOptions = [
        {
            name: "Edit",
            icon : <DriveFileRenameOutlineTwoToneIcon/>,
            click: handleEdit
        },
        {
            name: "Go to organization",
            icon : <CallMissedOutgoingTwoToneIcon/>,
            click: handleGoTo
        },
        {
            name: "Delete organisation",
            icon : <BlockTwoToneIcon/>,
            click: handleDelete
        }
    ];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open)
    };

    const handleClose = () => {
        setOpen(!open)
        setAnchorEl(null);
    };

    return (
        <CardHeader
            avatar={<Avatar aria-label="recipe">{name.charAt(0)}</Avatar>}
            action={
                <IconButton aria-label="settings" onClick={handleClick} aria-haspopup="true">
                    <MoreVertIcon />
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted onClose={handleClose}
                        open={open}>
                        {MyOptions.map((option) => (
                            <MenuItem
                                key={option.name}
                                onClick={() => option.click(id)}
                                sx={{color: "gray"}}
                            >
                                <Icon>
                                    {option.icon}
                                </Icon>
                                <Typography>
                                    {option.name}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </IconButton>
            }
            titleTypographyProps={titleTypographyProps}
            title={name}
        />
    );
};

export default MyCardHeader;