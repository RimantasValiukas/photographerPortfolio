import {useEffect, useState} from "react";
import {FieldArray, Form, Formik} from "formik";
import {CircularProgress, Container, Stack} from "@mui/material";
import FormInputs from "./FormInputs";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {createAlbum, getAlbumById, updateAlbum} from "../../api/contentApi";
import {useNavigate, useParams} from "react-router-dom";
import * as Yup from 'yup';

const Album = () => {

    const navigation = useNavigate();
    const [album, setAlbum] = useState({
        name: '',
        description: '',
        photos: []
    });
    const {albumId} = useParams();
    const [loading, setLoading] = useState(true);

    const albumValidationScheme = Yup.object().shape(
        {
            name: Yup.string().required("Privalomas laukas").min(2, "Per trumpas pavadinimas").max(255, "Per ilgas pavadinimas"),
            description: Yup.string().min(2, "Per trumpas aprašymas").max(2000, "Per ilgas aprašymas"),
            photos: Yup.array().of(Yup.string().required("Nuoroda privaloma").max(255, "Nuoroda per ilga"))
        }
    );

    useEffect(() => {
        if (!albumId) {
            setLoading(false);
            return;
        }

        getAlbumById(albumId)
            .then(({data}) => {
                setAlbum(data);
            })
            .catch((error) => console.log('error', error))
            .finally(() => setLoading(false));
    }, [])

    const onFormSubmit = (values, helper) => {
        if (albumId) {
            onUpdateAlbum(values, helper);
        }

        onCreateAlbum(values, helper);
    }

    const onCreateAlbum = (values, helper) => {
        createAlbum(values)
            .then(() => navigation('/photos'))
            .catch((error) => console.log('error', error))
            .finally(() => helper.setSubmitting(false))
    }

    const onUpdateAlbum = (values, helper) => {
        updateAlbum(values)
            .then(() => navigation('/photos'))
            .catch((error) => console.log('error', error))
            .finally(() => helper.setSubmitting(false))
    }


    return (
        <>
            {
                loading ? <CircularProgress/> :
                    <Formik
                        initialValues={album}
                        onSubmit={onFormSubmit}
                        validationSchema={albumValidationScheme}>
                        {
                            props => (
                                <Container maxWidth="md">
                                    <Form>
                                        <Stack spacing={2} direction="column">
                                            <Typography variant="subtitle1"
                                                        gutterBottom textAlign="center"
                                                        sx={{fontFamily: 'cursive', fontSize: '1.5em'}}>
                                                {albumId ? 'KEISTI ALBUMĄ' : 'SUKURTI NAUJĄ ALBUMĄ'}
                                            </Typography>
                                            <FormInputs error={props.touched.name && !!props.errors.name}
                                                        name="name"
                                                        label="Name"/>
                                            <FormInputs error={props.touched.description && !!props.errors.description}
                                                        name="description"
                                                        label="Description"
                                                        rows={5}
                                                        multiline/>
                                            <FieldArray name="photos">
                                                {(arrayHelpers) => (
                                                    <>
                                                        {props.values.photos.map((photo, index) => (
                                                            <div key={index}>
                                                                <FormInputs
                                                                    name={`photos[${index}]`}
                                                                    label="Photo URL"
                                                                    error={props.touched.photos && !!props.errors.photos?.[index]}
                                                                />
                                                                <Button
                                                                    type="button"
                                                                    size="small"
                                                                    onClick={() => arrayHelpers.remove(index)}
                                                                    color="warning"
                                                                >
                                                                    IŠTRINTI
                                                                </Button>
                                                            </div>
                                                        ))}
                                                        <Typography sx={{textAlign: 'left', mt: 2}}>
                                                            <Button
                                                                type="button"
                                                                variant="outlined"
                                                                onClick={() => arrayHelpers.push('')}
                                                                sx={{color: '#AAD2B5', borderColor: '#AAD2B5'}}
                                                            >
                                                                Pridėti nuotrauką
                                                            </Button>
                                                        </Typography>
                                                    </>
                                                )}
                                            </FieldArray>

                                            <Typography sx={{textAlign: 'center', mt: 2}}>
                                                {
                                                    props.isSubmitting ? <CircularProgress/> :
                                                        <Button
                                                            variant="outlined"
                                                            type="submit"
                                                            sx={{color: '#76b5c5', borderColor: '#76b5c5'}}
                                                        >
                                                            {albumId ? 'Pakeisti albumą' : 'Sukurti albumą'}
                                                        </Button>
                                                }
                                            </Typography>
                                        </Stack>
                                    </Form>
                                </Container>
                            )
                        }
                    </Formik>
            }

        </>
    );

}

export default Album;