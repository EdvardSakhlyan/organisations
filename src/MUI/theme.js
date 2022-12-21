import {createTheme} from "@mui/material";

const defaultTheme = createTheme({
    typography : {
        h6 : {
            fontSize: '1.5rem',
            '@media (max-width:900px)': {
                fontSize: '1.2rem',
            },
            '@media (max-width:600px)': {
                fontSize: '1rem',
            }
        },
        body1: {
            fontSize: '1.1rem',
            '@media (max-width:1000px)': {
                fontSize: '1rem',
            },
            '@media (max-width:900px)': {
                fontSize: '.9rem',
            }
        },
        body2: {
            fontSize: '1rem',
            '@media (max-width:1000px)': {
                fontSize: '.9rem',
            },
            '@media (max-width:900px)': {
                fontSize: '.8rem',
            }
        },
        subtitle1: {
            fontSize: '.9rem',
            '@media (max-width:1000px)': {
                fontSize: '.8rem',
            },
            '@media (max-width:900px)': {
                fontSize: '.7rem',
            }
        }
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained' },
                    style: {
                        textTransform: 'none',
                        '@media (max-width:900px)': {
                            fontSize: '.7rem'
                        }
                    },
                },
            ],
        },
    },
})

export default defaultTheme