package lt.valiukas.photoapi.page.repository;

import lt.valiukas.photoapi.page.entity.Home;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface HomeRepository extends JpaRepository<Home, UUID> {

}
