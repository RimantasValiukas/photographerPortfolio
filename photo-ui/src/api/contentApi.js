import HTTP from "./index";

const getHomeContent = () => HTTP.get(`/api/home`);
const updateHomeContent = (homeContent) => HTTP.put(`/api/home`, homeContent);
const getAboutContent = () => HTTP.get('/api/about');
const updateAboutContent = (aboutContent) => HTTP.put('/api/about', aboutContent);
const createAlbum = (album) => HTTP.post('/api/album', album);
const getAllAlbums = () => HTTP.get('/api/albums');
const getAlbumById = (albumId) => HTTP.get(`/api/albums/${albumId}`);
const updateAlbum = (album) => HTTP.put('/api/albums', album);
const deleteAlbum = (albumId) => HTTP.delete(`/api/albums/${albumId}`);
const getContacts = () => HTTP.get('/api/contacts');
const updateContactsContent = (contactsContent) => HTTP.put('/api/contacts', contactsContent);

export {
    getHomeContent,
    updateHomeContent,
    getAboutContent,
    updateAboutContent,
    createAlbum,
    getAllAlbums,
    getAlbumById,
    updateAlbum,
    deleteAlbum,
    getContacts,
    updateContactsContent
}