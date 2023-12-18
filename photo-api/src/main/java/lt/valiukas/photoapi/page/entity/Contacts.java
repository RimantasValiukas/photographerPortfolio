package lt.valiukas.photoapi.page.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Contacts {
    @Id
    @GeneratedValue
    @Column
    private UUID id;
    @Column
    private String mainTitle;
    @Column
    private String contactsTitle;
    @Column
    private String phoneNumber;
    @Column
    private String email;
    @Column
    private String facebookUrl;
    @Column
    private String instagramUrl;
    @Column
    private String writeEmailTitle;
    @ElementCollection
    @CollectionTable(name = "contactPhotos", joinColumns = @JoinColumn(name = "id"))
    @Column(name = "photo")
    private List<String> photos;

}
