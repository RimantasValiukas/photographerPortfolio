package lt.valiukas.photoapi.page.repository;

import lt.valiukas.photoapi.page.entity.Contacts;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ContactsRepository extends JpaRepository<Contacts, UUID> {

}