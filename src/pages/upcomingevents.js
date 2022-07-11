/* eslint-disable */ 

import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import "./pagesCSS/upcomingEvents.css";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Typography } from '@material-ui/core';

import ScavengerHuntBanner from './pagesResources/images/EventBanners/ScavengerHunt.png';

const Events = () => {

    const [open, setOpen] = useState(false);

    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };


    return (
    
        <div>

            <Helmet>
                    <title>FIRE+ | Upcoming Events</title>
            </Helmet>

            <div class = 'eventsContent'>
                <br />
                <h1>Upcoming Events</h1>
                <br />
                <Button onClick={openDialog}><img src = {ScavengerHuntBanner} alt = "Scavenger Hunt Banner" height="230"/><br /></Button>

                <Dialog 
                    open={open} 
                    onBackdropClick={closeDialog}
                    style={{position: "absolute"}} >

                    <DialogTitle style={{textAlign: "center"}} >FIRE+ Scavenger Hunt</DialogTitle>
                    <DialogContent style={{textAlign: "center"}}>
                        *Adding Description Here*
                        <Typography color="textSecondary" className="MuiInputLabel-shrink" style={{transform: "translate(0, 1.5px) scale(0.95)", transformOrigin: "top left", marginLeft: "9%"}}>
                        <br />
                            Date
                        </Typography>
                        4 August 2022
                        <Typography color="textSecondary" className="MuiInputLabel-shrink" style={{transform: "translate(0, 1.5px) scale(0.95)", transformOrigin: "top left", marginLeft: "9%"}}>
                        <br />
                            Time
                        </Typography>
                        4:30 pm - 8:00 pm
                        <Typography color="textSecondary" className="MuiInputLabel-shrink" style={{transform: "translate(0, 1.5px) scale(0.95)", transformOrigin: "top left", marginLeft: "9%"}}>
                        <br />
                            Venue
                        </Typography>
                        <a href="https://www.google.com/maps/place/Garden+Building+RMIT+University/@-37.8080571,144.9641693,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad6439030e6c711:0x9e8c8a7cc366da0e!8m2!3d-37.8080571!4d144.9641693!16s%2Fg%2F11snq0wn3h?authuser=0&hl=en" target={"_blank"} rel='noreferrer'>Garden Building RMIT</a>
                        <Typography color="textSecondary" className="MuiInputLabel-shrink" style={{transform: "translate(0, 1.5px) scale(0.95)", transformOrigin: "top left", marginLeft: "9%"}}>
                        <br />
                            Tickets
                        </Typography>
                        $5 dollar tickets <br />
                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fevents.humanitix.com%2Fthe-fire-scavenger-hunt%3Ffbclid%3DIwAR3aapRCf-trE-LcY_VV_ZOWd62VeJWWZR9vA5ZgLqPLaNddr8YW8uaovzU&h=AT0kbVU-rK_gzzB_0ELFjnfq4bbRpqTV2HYBZbawRnKBkkK46U41YQ6D7sy2efDcNT-wO6CS0CjbrFfxMNo4gLVVbiRkmGRT7M6t1S-1xAv5nDjdR0R71QVwx4QO_pfizOcMOg" target={"_blank"} rel='noreferrer'>Link to the Tickets</a>
                    </DialogContent>
                    <Button onClick={closeDialog}>Close</Button>
                </Dialog> 
                <br />
                <br />
            </div>
        </div>
    );
};
  
export default Events;