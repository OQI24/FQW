import React from "react";
import './style.scss';
import Button from '@mui/material/Button';


export const MenuItem = (props) => {
    return (
        <div className={'itemWrap'}>
            <Button
                className={'menuButtonWrap'}
                fullWidth={true}
                variant="text"
                size={"large"}
                startIcon={props.icon}
            >
                {props.title}
            </Button>
        </div>
    );
}