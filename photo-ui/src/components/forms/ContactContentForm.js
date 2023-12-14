import {useLocation, useNavigate} from "react-router-dom";
import {FieldArray, Form, Formik} from "formik";
import {CircularProgress, Container, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import FormInputs from "./FormInputs";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import {updateContactsContent} from "../../api/contentApi";

const ContactContentForm = () => {

    const location = useLocation();
    const navigation = useNavigate();
    const contactContent = location.state;

    const contactContentValidationScheme = Yup.object().shape({
        mainTitle: Yup.string().required("Laukas privalomas").max(255, "Per ilgas pavadinimas"),
        contactsTitle: Yup.string().required("Laukas privalomas").max(255, "Per ilgas pavadinimas"),
        phoneNumber: Yup.string().required("Laukas privalomas").max(255, "Per ilgas tekstas"),
        email: Yup.string().required("Laukas privalomas").max(255, "Per ilgas tekstas"),
        facebookUrl: Yup.string().required("Laukas privalomas").max(255, "Per ilgas tekstas"),
        instagramUrl: Yup.string().required("Laukas privalomas").max(255, "Per ilgas tekstas"),
        writeEmailTitle: Yup.string().required("Laukas privalomas").max(255, "Per ilgas tekstas"),
    });
    const updateContent = (values, helper) => {
        const updatedContactsContent = {
            ...values,
            id: contactContent.id
        }

        updateContactsContent(updatedContactsContent)
            .then(() => navigation("/contacts"))
            .catch((error) => console.log('error', error))
            .finally(() => helper.setSubmitting(false))
    }

    return (
        <Formik initialValues={contactContent}
                onSubmit={updateContent}
                validationSchema={contactContentValidationScheme}>
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
                                <FormInputs error={props.touched.mainTitle && !!props.errors.mainTitle}
                                            name="mainTitle"
                                            label="Main title"/>
                                <FormInputs error={props.touched.contactsTitle && !!props.errors.contactsTitle}
                                            name="contactsTitle"
                                            label="Contacts title"/>
                                <FormInputs error={props.touched.phoneNumber && !!props.errors.phoneNumber}
                                            name="phoneNumber"
                                            label="Phone number"/>
                                <FormInputs error={props.touched.email && !!props.errors.email}
                                            name="email"
                                            label="Email"/>
                                <FormInputs error={props.touched.facebookUrl && !!props.errors.facebookUrl}
                                            name="facebookUrl"
                                            label="Facebook URL"/>
                                <FormInputs error={props.touched.instagramUrl && !!props.errors.instagramUrl}
                                            name="instagramUrl"
                                            label="Instagram URL"/>
                                <FormInputs error={props.touched.writeEmailTitle && !!props.errors.writeEmailTitle}
                                            name="writeEmailTitle"
                                            label="Email title"/>
                                <FieldArray name="photos">
                                    {(arrayHelpers) => (
                                        <>
                                            {props.values.photos.map((photo, index) => (
                                                <FormInputs
                                                    key={index}
                                                    name={`photos[${index}]`}
                                                    label="Photo URL"
                                                    error={props.touched.photos && !!props.errors.photos?.[index]}
                                                />
                                            ))}
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
                                                Keisti
                                            </Button>
                                    }
                                </Typography>
                            </Stack>
                        </Form>
                    </Container>
                )}
        </Formik>
    );
}

export default ContactContentForm;