import {useLocation, useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {updateAboutContent, updateHomeContent} from "../../api/contentApi";
import {Form, Formik} from "formik";
import {CircularProgress, Container, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import FormInputs from "./FormInputs";
import Button from "@mui/material/Button";

const AboutContentForm = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const aboutContent = location.state;

    const contentValidationScheme = Yup.object().shape({
        photoUrl: Yup.string().required("Nuotraukos nuoroda privaloma").max(255, "Per ilga nuoroda"),
        title: Yup.string().min(2, 'Per trumpa antraštė').max(255, 'Pel ilga antraštė'),
        text: Yup.string().min(2, 'Tekstas per trumpas').max(5000, 'Tekstas per ilgas')
    });

    const updateContent = (values, helper) => {
        const updatedContent = {
            id: aboutContent.id,
            photoUrl: values.photoUrl,
            title: values.title,
            text: values.text
        };

        updateAboutContent(updatedContent)
            .then(() => navigation('/about'))
            .catch((error) => console.log('error', error))
            .finally(() => helper.setSubmitting(false))
    }

    return (
        <Formik initialValues={aboutContent}
                onSubmit={updateContent}
                validationSchema={contentValidationScheme}>
            {
                props => (
                    <Container maxWidth="md" sx={{marginBottom: '50px'}}>
                        <Form>
                            <Stack spacing={2} direction="column">
                                <Typography variant="subtitle1"
                                            gutterBottom textAlign="center"
                                            sx={{fontFamily: 'cursive', fontSize: '1.5em'}}>
                                    KEISTI TURINĮ
                                </Typography>
                                <FormInputs error={props.touched.photoUrl && !!props.errors.photoUrl}
                                            name="photoUrl"
                                            label="Photo URL"/>
                                <FormInputs error={props.touched.title && !!props.errors.title}
                                            name="title"
                                            label="Title"/>
                                <FormInputs error={props.touched.text && !!props.errors.text}
                                            name="text"
                                            label="Text"
                                            rows={10}
                                            multiline/>
                                <Typography sx={{textAlign: 'center', mt: 2}}>
                                    {
                                        props.isSubmitting ? <CircularProgress/> :
                                            <Button
                                                variant="outlined"
                                                type="submit"
                                                sx={{color: '#dce0d4', borderColor: '#d3d3d3'}}
                                            >
                                                Keisti
                                            </Button>
                                    }
                                </Typography>
                            </Stack>
                        </Form>
                    </Container>
                )}
        </Formik>
    )
}

export default AboutContentForm;