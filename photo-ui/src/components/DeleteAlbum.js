import {useState} from "react";
import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {deleteAlbum} from "../api/contentApi";

const DeleteAlbum = ({albumId}) => {

    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const onAlbumDelete = () => {
        deleteAlbum(albumId)
            .then(() => window.location.reload(false))
            .catch((error) => console.log(error));
    }

    return (
        <>
            <Button size="small" color="warning" onClick={handleOpen}>
                IŠTRINTI
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Patvirtinti albumo ištrynimą</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ar tikrai norite ištrinti albumą?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Atšaukti</Button>
                    <Button onClick={onAlbumDelete} color="error">
                        Ištrinti
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );

}

export default DeleteAlbum;