package lt.valiukas.photoapi.page.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class About {
    @Id
    @GeneratedValue
    @Column
    private UUID id;
    @Column
    private String photoUrl;
    @Column
    private String title;
    @Column(length = 5000)
    private String text;
}
