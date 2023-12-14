package lt.valiukas.photoapi.mailsender;

import lt.valiukas.photoapi.mailsender.dto.EmailRequest;
import lt.valiukas.photoapi.mailsender.service.EmailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    private final EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping(value = "/sendEmail", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void sendEmail(@RequestBody EmailRequest emailRequest) {
            String message = """
                    Vardas: %s;
                    Elektroninis paštas: %s;
                    Žinutė: %s
                    """.formatted(emailRequest.getName(), emailRequest.getEmail(), emailRequest.getMessage());
            emailService.sendEmail("rimantas.valiukas@gmail.com", "Žinutė iš tinklalapio", message);

    }
}
