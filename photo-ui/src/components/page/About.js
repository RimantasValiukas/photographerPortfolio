import {CircularProgress, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getAboutContent} from "../../api/contentApi";


const About = () => {

    const [aboutContent, setAboutContent] = useState({});
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate();

    useEffect(() => {
        getAboutContent()
            .then(({data}) => {
                setAboutContent(data[0]);
            })
            .catch((error) => console.log('error', error))
            .finally(() => setLoading(false))
    }, [])

    const handleButtonClick = () => {
        navigation('/about/update', {state: aboutContent});
    }

    return (
        <>
            {loading ? <CircularProgress/> :
                <Grid container spacing={2} sx={{mt: '5px', justifyContent: 'center'}}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="h4" gutterBottom textAlign="center"
                                    sx={{mt: '5px', fontFamily: 'cursive', fontSize: '2.5em'}}>
                            {aboutContent.title}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                        <img src={aboutContent.photoUrl}
                             alt='AboutPhoto'
                             style={{display: 'block', margin: 'auto', maxWidth: '100%'}}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography variant="body1" paragraph textAlign="justify" sx={{
                            lineHeight: '1.6',
                            fontFamily: 'Georgia',
                            fontSize: '1.1em',
                            color: '#333',
                            fontStyle: 'italic'
                        }}>
                            {aboutContent.text.split('\n').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph}
                                    <br />
                                </React.Fragment>
                            ))}
                        </Typography>
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
                </Grid>
            }

        </>
    );
}

export default About;