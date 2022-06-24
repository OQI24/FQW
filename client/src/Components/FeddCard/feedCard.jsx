import React from "react";
import './style.scss';
import {Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

export const FeedCard = ({feed, setFeed, open, setReadFeed}) => {
    const {title, text} = feed;

    return(
        <Dialog
            open={open}
            onClose={() => {
                setFeed({});
                setReadFeed(false);
            }}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
            <DialogContent dividers={true}>
                <DialogContentText id="scroll-dialog-description">{text}</DialogContentText>
            </DialogContent>
        </Dialog>
    );
}
