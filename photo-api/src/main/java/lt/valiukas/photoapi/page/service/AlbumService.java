package lt.valiukas.photoapi.page.service;

import lt.valiukas.photoapi.page.entity.Album;
import lt.valiukas.photoapi.page.repository.AlbumRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class AlbumService {
    private final AlbumRepository albumRepository;

    public AlbumService(AlbumRepository albumRepository) {
        this.albumRepository = albumRepository;
    }

    public void createAlbum(Album album) {
        albumRepository.save(album);
    }

    public List<Album> getAllAlbums() {
        return albumRepository.findAll();
    }

    public Album getAlbum(UUID albumId) {
        return albumRepository.getReferenceById(albumId);
    }

    public void deleteAlbum(UUID albumId) {
        albumRepository.deleteById(albumId);
    }

}
