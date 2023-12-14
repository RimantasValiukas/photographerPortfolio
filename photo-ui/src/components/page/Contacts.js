import {CircularProgress, Grid, Link} from "@mui/material";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactForm from "../forms/ContactForm";
import Button from "@mui/material/Button";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getContacts} from "../../api/contentApi";


const Contacts = () => {
    const navigation = useNavigate();
    const [contactContent, setContactContent] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getContacts()
            .then(({data}) => {
                setContactContent(data[0]);
            })
            .catch((error) => console.log('error', error))
            .finally(() => setLoading(false))
    }, [])

    const handleButtonClick = () => {
        navigation('/contact/update', {state: contactContent});
    }

    return (
        <>
            {loading ? <CircularProgress/> :
                <>
                    <Typography variant="h4" gutterBottom textAlign="center"
                                sx={{mt: '20px', fontFamily: 'cursive', fontSize: '2.5em'}}>
                        {contactContent.mainTitle}
                    </Typography>
                    <Grid container spacing={2} sx={{mt: '5px'}}>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="subtitle1" gutterBottom textAlign="center"
                                        sx={{mt: '5px', mb: '20px', fontFamily: 'cursive', fontSize: '1.5em'}}>
                                {contactContent.contactsTitle}
                            </Typography>
                            <Typography variant="body1" paragraph textAlign="center" sx={{
                                lineHeight: '1.6',
                                fontFamily: 'Georgia',
                                fontSize: '1.1em',
                                color: '#333',
                                fontStyle: 'italic'
                            }}>
                                {contactContent.phoneNumber}
                            </Typography>
                            <Typography variant="body1" paragraph textAlign="center" sx={{
                                lineHeight: '1.6',
                                fontFamily: 'Georgia',
                                fontSize: '1.1em',
                                color: '#333',
                                fontStyle: 'italic'
                            }}>
                                {contactContent.email}
                            </Typography>
                            <Typography variant="h6" align="center" gutterBottom>
                                <Link href={contactContent.facebookUrl} sx={{color: '#d9d9d9'}}>
                                    <FacebookIcon sx={{fontSize: 32, mr: '20px'}}/>
                                </Link>
                                <Link href={contactContent.instagramUrl} sx={{color: '#d9d9d9'}}>
                                    <InstagramIcon sx={{fontSize: 32}}/>
                                </Link>
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom textAlign="center"
                                        sx={{mt: '50px', mb: '20px', fontFamily: 'cursive', fontSize: '1.5em'}}>
                                {contactContent.writeEmailTitle}
                            </Typography>
                            <ContactForm/>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid container spacing={2}>
                                {contactContent.photos.map((src, index) => (
                                    <Grid item xs={6} sm={4} key={index}>
                                        <img src={src}
                                             style={{display: 'block', margin: 'auto', maxWidth: '100%'}}
                                             alt={`mini${index + 1}`}/>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Typography sx={{textAlign: 'center', mt: 2}}>
                        <Button
                            variant="outlined"
                            onClick={handleButtonClick}
                            sx={{color: '#76b5c5', borderColor: '#76b5c5'}}
                        >
                            Keisti
                        </Button>
                    </Typography>
                </>
            }
        </>
    );
}

export default Contacts;