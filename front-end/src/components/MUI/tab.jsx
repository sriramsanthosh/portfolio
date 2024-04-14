import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Navigate, useNavigate } from "react-router-dom";


const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        backgroundColor: 'crimson',
    },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
        minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: 'white',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        color: '#fff',
        opacity: 1,
    },
    '&.Mui-selected': {
        color: 'crimson',
        fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#d1eaff',
    },
}));

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: '#fff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

export default function CustomizedTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const Navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', margin:"auto", width:"fit-content", backgroundColor:"#252529", padding:"0 20px", borderRadius:"80px", position:"fixed",top:"15px", left:"0", right:"0", zIndex:"100", border:"1px solid #303032", }} >
                <AntTabs value={value} style={{ border: "none" }} onChange={handleChange} aria-label="ant example" >
                    <AntTab className="antTab" onClick={(e) => { e.preventDefault(); Navigate("/") }} label="Home" style={antTabStyle} />
                    <AntTab className="antTab" onClick={(e) => { e.preventDefault(); Navigate("/about") }} label="About" style={antTabStyle} />
                    <AntTab className="antTab" onClick={(e) => { e.preventDefault(); Navigate("/projects") }} label="Projects" style={antTabStyle} />
                    <AntTab className="antTab" onClick={(e) => { e.preventDefault(); Navigate("/contact-me") }} label="Contact" style={antTabStyle} />
                </AntTabs>
        </Box>
    );
}

const antTabStyle = {
    color: "brickcrimson",
    fontWeight: "bolder",
}

