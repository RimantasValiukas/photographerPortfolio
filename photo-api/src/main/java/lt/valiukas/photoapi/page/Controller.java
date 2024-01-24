package lt.valiukas.photoapi.page;

import lt.valiukas.photoapi.page.entity.About;
import lt.valiukas.photoapi.page.entity.Album;
import lt.valiukas.photoapi.page.entity.Contacts;
import lt.valiukas.photoapi.page.entity.Home;
import lt.valiukas.photoapi.page.service.AboutService;
import lt.valiukas.photoapi.page.service.AlbumService;
import lt.valiukas.photoapi.page.service.ContactsService;
import lt.valiukas.photoapi.page.service.HomeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
public class Controller {

    private final HomeService homeService;
    private final AboutService aboutService;
    private final AlbumService albumService;
    private final ContactsService contactsService;

    public Controller(HomeService homeService, AboutService aboutService, AlbumService albumService, ContactsService contactsService) {
        this.homeService = homeService;
        this.aboutService = aboutService;
        this.albumService = albumService;
        this.contactsService = contactsService;
    }

    @GetMapping(value = "/api/home", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Home> getHomeContent() {
        return homeService.getAllHomeContent();
    }

    @PutMapping(value = "/api/home", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void saveHomeContent(@RequestBody Home homeContent) {
        homeService.saveHomeContent(homeContent);
    }

    @GetMapping(value = "api/about", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<About> getAboutContent() {
        return aboutService.getAllAboutContent();
    }

    @PutMapping(value = "api/about", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void saveAboutContent(@RequestBody About about) {
        aboutService.saveAboutContent(about);
    }

    @PostMapping(value = "api/album", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createAlbum(@RequestBody Album album) {
        albumService.createAlbum(album);
    }

    @GetMapping(value = "api/albums")
    public List<Album> getAllAlbums() {
        return albumService.getAllAlbums();
    }

    @GetMapping(value = "api/albums/{albumId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Album getAlbum(@PathVariable UUID albumId) {
        return albumService.getAlbum(albumId);
    }

    @PutMapping(value = "api/albums", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateAlbum(@RequestBody Album album) {
        albumService.createAlbum(album);
    }

    @DeleteMapping(value = "api/albums/{albumId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAlbum(@PathVariable UUID albumId) {
        albumService.deleteAlbum(albumId);
    }

    @GetMapping(value = "api/contacts", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Contacts> getContacts() {
        return contactsService.getContacts();
    }

    @PutMapping(value = "api/contacts", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void saveContacts(@RequestBody Contacts contacts) {
        contactsService.saveContacts(contacts);
    }

}
