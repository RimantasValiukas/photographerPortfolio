import {CircularProgress, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import React, {useEffect, useState} from "react";
import {getHomeContent} from "../../api/contentApi";
import Button from "@mui/material/Button";
import {NavLink, useNavigate} from "react-router-dom";

const Home = () => {

    const [homeContent, setHomeContent] = useState({});
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate();

    useEffect(() => {
        getHomeContent()
            .then(({data}) => {
                setHomeContent(data[0]);
            })
            .catch((error) => console.log('error', error))
            .finally(() => setLoading(false))
    }, []);

    const handleButtonClick = () => {
        navigation('/home/update', {state: homeContent});
    }


    return (
        <>
            {
                loading ? <CircularProgress/> :
                    <>
                        <Grid container spacing={4} sx={{mt: '5px', justifyContent: 'center', alignItems: 'center'}}>
                            <Grid item xs={12} sm={12} md={12}>
                                <img src={homeContent.photoUrl}
                                     alt='homePhoto'
                                     style={{display: 'block', margin: 'auto', maxWidth: '100%', height: 'auto'}}/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={8}>
                                <Typography variant="h4" gutterBottom textAlign="center"
                                            sx={{mt: '5px', fontFamily: 'cursive', fontSize: '2.5em'}}>
                                    {homeContent.title}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom textAlign="center"
                                            sx={{mt: '5px', mb: '20px', fontFamily: 'cursive', fontSize: '1.5em'}}>
                                    {homeContent.subtitle}
                                </Typography>
                                <Typography variant="body1" paragraph textAlign="justify" sx={{
                                    lineHeight: '1.6',
                                    fontFamily: 'Georgia',
                                    fontSize: '1.1em',
                                    color: '#333',
                                    fontStyle: 'italic'
                                }}>
                                    {homeContent.text.split('\n').map((paragraph, index) => (
                                        <React.Fragment key={index}>
                                            {paragraph}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </Typography>
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
                        </Grid>
                    </>
            }
        </>
    )

}

export default Home;