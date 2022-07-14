/* eslint-disable */

import React, { useState } from 'react';
import "./EventCards.css";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import { Typography } from '@material-ui/core';

//import ScavengerHuntBanner from './images/EventBanners/ScavengerHunt.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTicketSimple } from "@fortawesome/free-solid-svg-icons";

const EventCards = (props) => {

    const [open, setOpen] = useState(false);

    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    const useStyles = makeStyles({
        root: {
          maxWidth: 300,
          //transition: "transform 0.15s ease-in-out",
          "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        },
        media: {
          height: "230px"
        }
    });

    const classes = useStyles();

    return (
        <div class = 'eventsCards'>
            <Card 
                //class = 'eventCard'
                className={classes.root} 
                onClick={openDialog} 
                style = {{cursor: "pointer", backgroundColor: "#D9D9D9"}}
                >
                        
                <CardMedia
                    className={classes.media}
                    image={props.cardImage}
                    title={props.cardImageTitle}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.cardContentTitle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.cardContentDesc}
                        <br />
                        Click to view more details.
                    </Typography>
                </CardContent>
            </Card>
                    
            <Dialog 
                open={open} 
                onClose={closeDialog}
                style={{width: 580, marginLeft: "30%"}} >

                <DialogTitle style={{textAlign: "center", backgroundColor: "#EC6C09", color: "white" }} >{props.DialogTitle}</DialogTitle>
                <DialogContent>
                    <img src = {props.DialogImage} alt = "Event Banner" height="230" width="460"    />
                    <br />

                    <Typography color="textSecondary" className="MuiInputLabel-shrink" style={{transform: "translate(0, 1.5px) scale(0.95)", transformOrigin: "top left"}}>
                        <br />
                        Description
                    </Typography>
                        {props.DialogDesc}

                    <Typography color="textSecondary" className="MuiInputLabel-shrink" style={{transform: "translate(0, 1.5px) scale(0.95)", transformOrigin: "top left"}}>
                        <br />
                        Date
                    </Typography>
                        {props.DialogDate}

                    <Typography color="textSecondary" className="MuiInputLabel-shrink" style={{transform: "translate(0, 1.5px) scale(0.95)", transformOrigin: "top left"}}>
                        <br />
                        Time
                    </Typography>
                        {props.DialogTime}  

                    <Typography color="textSecondary" className="MuiInputLabel-shrink" style={{transform: "translate(0, 1.5px) scale(0.95)", transformOrigin: "top left"}}>
                        <br />
                        Venue
                    </Typography>
                        <a class='eventLink' href={props.VenueLink} target={"_blank"} rel='noreferrer' >
                            {props.DialogVenue} &nbsp;&nbsp;
                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#EC6C09", fontSize: "1.25rem"}}/> 
                        </a>

                    <Typography color="textSecondary" className="MuiInputLabel-shrink" style={{transform: "translate(0, 1.5px) scale(0.95)", transformOrigin: "top left"}}>
                        <br />
                        Tickets
                    </Typography>
                        <a class='eventLink' href={props.TicketLink} target={"_blank"} rel='noreferrer'>
                            Get Your Tickets Here! &nbsp;&nbsp;
                            <FontAwesomeIcon icon={faTicketSimple} style={{color: "#EC6C09", fontSize: "1.25rem"}}/> 
                        </a>
                    <Typography color="textSecondary" className="MuiInputLabel-shrink" style={{transform: "translate(0, 1.5px) scale(0.95)", transformOrigin: "top left"}}>
                        <br />
                        Facebook Link
                    </Typography>
                        <a class='eventLink' href={props.FacebookLink} target={"_blank"} rel='noreferrer'>
                            Click here to view more details on our Facebook page.
                            <br />
                            <br />
                        </a>
                </DialogContent>
                <Button onClick={closeDialog} style={{backgroundColor: "#EC6C09", color: "white"}}>Close</Button>
            </Dialog> 
        </div>
    )
}

export default EventCards;