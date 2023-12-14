package lt.valiukas.photoapi.page.repository;

import lt.valiukas.photoapi.page.entity.About;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AboutRepository extends JpaRepository<About, UUID> {
}
