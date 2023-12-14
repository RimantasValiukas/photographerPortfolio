package lt.valiukas.photoapi.page.service;

import lt.valiukas.photoapi.page.entity.Contacts;
import lt.valiukas.photoapi.page.repository.ContactsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactsService {

    private final ContactsRepository contactsRepository;

    public ContactsService(ContactsRepository contactsRepository) {
        this.contactsRepository = contactsRepository;
    }

    public List<Contacts> getContacts() {
        return contactsRepository.findAll();
    }

    public void saveContacts(Contacts contacts) {
        contactsRepository.save(contacts);
    }

}
