import {Container, Switch} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Contacts from "../page/Contacts";
import Photos from "../page/Photos";
import HomeContentForm from "../forms/HomeContentForm";
import AboutContentForm from "../forms/AboutContentForm";
import Album from "../forms/Album";
import ContactContentForm from "../forms/ContactContentForm";

const Content = () => {

    return (
        <Container disableGutters maxWidth="xl" component="main"
                   sx={{
                       display: 'flex',
                       flexDirection: 'column',
                       minHeight: 'calc(100vh - 177px)',
                       px: 2,
                       width: '100%',
                       boxSizing: 'border-box',
                       justifyContent: 'center',
                       alignItems: 'center'
                   }}>
            <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/photos" element={<Photos/>}/>
                    <Route path="/home/update" element={<HomeContentForm/>}/>
                    <Route path="/about/update" element={<AboutContentForm/>}/>
                    <Route path="/album/create" element={<Album/>}/>
                    <Route path="/album/:albumId/update" element={<Album/>}/>
                    <Route path="/contact/update" element={<ContactContentForm/>}/>
            </Routes>
        </Container>
    );
}

export default Content;