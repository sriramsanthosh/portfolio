import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useNavigate } from "react-router-dom";


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
    const [value, setValue] = React.useState(1);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const Navigate = useNavigate();
    
    const makeSwitch = (pathName)=>{
        switch(pathName){
            case "/":
                setValue(0);
                break;
    
            case "/about":
                setValue(1);
                break;
            case "/projects":
                setValue(2);
                break;
            case "/contact-me":
                setValue(3);
                break;
            default:
                setValue();
                break;
        }    
    }

    React.useEffect(()=>{
        let pathName=window.location.pathname;
        makeSwitch(pathName);
    }, [window.location.pathname])
    
    
    return (
        <Box className="navbar-box" >
                <AntTabs value={value} style={{ border: "none" }} aria-label="ant example" >
                    <AntTab className="antTab" onClick={(e) => { e.preventDefault(); Navigate("/") }} label="Home" style={antTabStyle} />
                    <AntTab className="antTab about-tab" onClick={(e) => { e.preventDefault(); Navigate("/about") }} label="About" style={antTabStyle} />
                    <AntTab className="antTab projects-tab" onClick={(e) => { e.preventDefault(); Navigate("/projects") }} label="Projects" style={antTabStyle} />
                    <AntTab className="antTab contact-tab" onClick={(e) => { e.preventDefault(); Navigate("/contact-me") }} label="Contact" style={antTabStyle} />
                </AntTabs>
        </Box>
    );
}

const antTabStyle = {
    color: "brickcrimson",
    fontWeight: "bolder",
}