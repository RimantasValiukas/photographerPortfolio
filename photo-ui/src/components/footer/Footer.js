import Typography from "@mui/material/Typography";
import {Link, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
    const theme = useTheme();


    function Copyright() {
        return (
            <Typography variant="body2" color="#F9F7F7" align="center">
                Copyright ©
                <Link color="#F9F7F7" href="https://carl/" sx={{textDecoration: 'none'}}>
                    Carl
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#d9d9d9',
                width: '100%',
                mt: '30px',
                py: 3,
                px: 2,
                boxSizing: 'border-box'
            }}
        >
            <Container maxWidth="sx">
                <Typography variant="h6" align="center" color="#F9F7F7" gutterBottom>
                    <Link href="https://www.facebook.com" sx={{ color: '#F9F7F7'}}>
                        <FacebookIcon sx={{ fontSize: 32, mr: '20px'}}/>
                    </Link>
                    <Link href="https://www.instagram.com" sx={{ color: '#F9F7F7'}}>
                        <InstagramIcon sx={{ fontSize: 32}}/>
                    </Link>
                </Typography>
                <Typography variant="subtitle1" align="center" color="#F9F7F7" component="p">
                    Capturing moments, creating memories.
                </Typography>
                <Box sx={{paddingTop: theme.spacing(2)}}>
                    <Copyright/>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
