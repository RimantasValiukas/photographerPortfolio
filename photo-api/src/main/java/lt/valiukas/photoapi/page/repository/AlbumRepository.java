package lt.valiukas.photoapi.page.repository;

import lt.valiukas.photoapi.page.entity.Album;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AlbumRepository extends JpaRepository<Album, UUID> {
}
