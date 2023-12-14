import React, {useCallback, useEffect, useState} from "react";
import ImageViewer from 'react-simple-image-viewer';
import {CardMedia, CircularProgress, Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";
import {getAllAlbums} from "../../api/contentApi";
import DeleteAlbum from "../DeleteAlbum";

const Photos = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [albums, setAlbums] = useState([]);
    const [currentAlbum, setCurrentAlbum] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllAlbums()
            .then(({data}) => setAlbums(data))
            .catch((error) => console.log('error', error))
            .finally(() => setLoading(false));
    }, []);

    const openImageViewer = ((albumIndex, index) => {
        setCurrentAlbum(albums[albumIndex]);
        setCurrentImage(index);
        setIsViewerOpen(true);
    });

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <>
            {loading ? (
                <CircularProgress/>
            ) : (
                <>
                    <Container sx={{py: 8}} maxWidth="lg">
                        {albums.map((album, albumIndex) => (
                            <Grid container sx={{justifyContent: 'center', alignItems: 'center'}} key={albumIndex}>
                                <Grid item xs={12} sm={8}>
                                    <Typography
                                        variant="subtitle1"
                                        gutterBottom
                                        textAlign="center"
                                        sx={{mt: '50px', mb: '30px', fontFamily: 'cursive', fontSize: '1.8em'}}
                                    >
                                        {album.name}
                                    </Typography>
                                    <Grid container spacing={2} columnSpacing={{xs: 2, sm: 2, md: 1}} maxWidth="md">
                                        {album.photos.map((src, index) => {
                                            if (index >= 12) return null;

                                            return (
                                                <Grid item xs={6} sm={4} md={3} xl={2} key={index}>
                                                    <CardMedia
                                                        image={src}
                                                        component="div"
                                                        sx={{pt: '100%'}}
                                                        onClick={() => openImageViewer(albumIndex, index)}
                                                        key={index}
                                                    />
                                                </Grid>
                                            );
                                        })}
                                        {isViewerOpen && (
                                            <ImageViewer
                                                src={currentAlbum.photos}
                                                currentIndex={currentImage}
                                                disableScroll={false}
                                                closeOnClickOutside={true}
                                                onClose={closeImageViewer}
                                            />
                                        )}
                                    </Grid>
                                    <Typography variant="body1" paragraph textAlign="justify" sx={{
                                        lineHeight: '1.6',
                                        fontFamily: 'Georgia',
                                        fontSize: '1.1em',
                                        color: '#333',
                                        fontStyle: 'italic',
                                        margin: '20px'
                                    }}>
                                        {album.description.split('\n').map((paragraph, index) => (
                                            <React.Fragment key={index}>
                                                {paragraph}
                                                <br/>
                                            </React.Fragment>
                                        ))}
                                    </Typography>
                                    <Grid item xs={12} sm={12} md={12} sx={{mt: '30px'}}>
                                        <Typography sx={{textAlign: 'left'}}>
                                            <Button size="small"
                                                    component={NavLink}
                                                    to={`/album/${album.albumId}/update`}
                                                    sx={{color: '#76b5c5'}}>Keisti</Button>
                                            <DeleteAlbum albumId={album.albumId}/>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                        <Typography sx={{textAlign: 'center', mt: 2}}>
                            <Button
                                variant="outlined"
                                sx={{color: '#76b5c5', borderColor: '#76b5c5'}}
                                to={'/album/create'}
                                component={NavLink}
                            >
                                Pridėti albumą
                            </Button>
                        </Typography>
                    </Container>

                </>
            )}
        </>
    );
};

export default Photos;