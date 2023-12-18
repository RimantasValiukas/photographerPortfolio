package lt.valiukas.photoapi.page.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Album {
    @Id
    @GeneratedValue
    @Column
    private UUID albumId;
    @Column
    private String name;
    @Column(length = 2000)
    private String description;
    @ElementCollection
    @CollectionTable(name = "photos", joinColumns = @JoinColumn(name = "albumId"))
    @Column(name = "photo")
    private List<String> photos;

}
