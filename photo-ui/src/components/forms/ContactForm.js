import {useState} from "react";
import * as Yup from 'yup';
import {Form, Formik} from "formik";
import {CircularProgress, Container, Stack} from "@mui/material";
import FormInputs from "./FormInputs";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {sendEmail} from "../../api/emailApi";

const ContactForm = () => {
    const [message, setMessage] = useState({
        name: '',
        email: '',
        message: ''
    });

    const messageValidationScheme = Yup.object().shape({
        name: Yup.string().required('Įveskite savo vardą').min(2, 'Per trumpas vardas').max(20, 'Pel ilgas vardas'),
        email: Yup.string().email('Netinkamas formatas').required('Įveskite savo elektronio pašto adresą'),
        message: Yup.string().required('Įveskite savo žinutę').min(10, 'Žinutė per trumpa').max(2000, 'Žinutė per ilga')
    });

    const onSendMessage = (values, helper) => {
        sendEmail(values)
            .then(() => helper.resetForm())
            .catch((error) => console.log('error', error))
            .finally(() => helper.setSubmitting(false))
    };

    return (
        <>
            <Formik initialValues={message}
                    onSubmit={onSendMessage}
                    validationSchema={messageValidationScheme}>
                {props => (
                    <Container maxWidth="sm" sx={{marginBottom: '50px'}}>
                        <Form>
                            <Stack spacing={1} direction="column">
                                <FormInputs error={props.touched.name && !!props.errors.name}
                                            name="name"
                                            label="Vardas"/>
                                <FormInputs error={props.touched.email && !!props.errors.email}
                                            name="email"
                                            label="Elektroninis paštas"/>
                                <FormInputs error={props.touched.message && !!props.errors.message}
                                            name="message"
                                            label="Žinutė"
                                            rows={4}
                                            multiline/>
                                <Typography sx={{textAlign: 'center', mt: 2}}>
                                    {
                                        props.isSubmitting ? <CircularProgress/> :
                                            <Button
                                                variant="outlined"
                                                type="submit"
                                                sx={{ color: '#76b5c5', borderColor: '#76b5c5' }}
                                            >
                                                Siųsti
                                            </Button>

                                    }
                                </Typography>
                            </Stack>
                        </Form>
                    </Container>
                )
                }
            </Formik>
        </>
    );
}

export default ContactForm;