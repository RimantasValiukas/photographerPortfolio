package lt.valiukas.photoapi.page.service;

import lt.valiukas.photoapi.page.entity.About;
import lt.valiukas.photoapi.page.repository.AboutRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AboutService {
    private final AboutRepository aboutRepository;

    public AboutService(AboutRepository aboutRepository) {
        this.aboutRepository = aboutRepository;
    }

    public List<About> getAllAboutContent() {
        return aboutRepository.findAll();
    }

    public void saveAboutContent(About about) {
        aboutRepository.save(about);
    }
}
