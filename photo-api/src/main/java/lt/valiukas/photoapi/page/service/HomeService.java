package lt.valiukas.photoapi.page.service;

import lt.valiukas.photoapi.page.entity.Home;
import lt.valiukas.photoapi.page.repository.HomeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class HomeService {
    private final HomeRepository homeRepository;

    public HomeService(HomeRepository homeRepository) {
        this.homeRepository = homeRepository;
    }

    public void saveHomeContent(Home homeContent) {
        homeRepository.save(homeContent);
    }

    public Home getHomeContent(UUID id) {
        return homeRepository.getReferenceById(id);
    }

    public List<Home> getAllHomeContent() {
        return homeRepository.findAll();
    }
}
