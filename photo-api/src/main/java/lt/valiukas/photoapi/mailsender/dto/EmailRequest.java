package lt.valiukas.photoapi.mailsender.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class EmailRequest {
    private String name;
    private String email;
    private String message;
}
