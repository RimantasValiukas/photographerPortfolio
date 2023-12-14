import Header from "./components/header/Header";
import {BrowserRouter} from "react-router-dom";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import {Experimental_CssVarsProvider} from "@mui/material";

const sections = [
    {title: 'Pradžia', url: '/'},
    {title: 'Apie mane', url: '/about'},
    {title: 'Portfolio', url: '/photos'},
    {title: 'Kontaktai', url: '/contacts'}
]

function App() {
    return (
        <Experimental_CssVarsProvider>
            <BrowserRouter>
                <Header sections={sections} title=""/>
                <Content/>
                <Footer/>
            </BrowserRouter>
        </Experimental_CssVarsProvider>

    );
}

export default App;
