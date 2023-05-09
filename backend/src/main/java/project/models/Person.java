package project.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity(name = "Person")
@Table(
        name = "person",
        uniqueConstraints = {
                @UniqueConstraint(name = "person_email_key", columnNames = "email"),
                @UniqueConstraint(name = "person_mobile_number_key", columnNames = "mobileNumber")
        }
)
public class Person extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "person_id_seq")
    @SequenceGenerator(name = "user_id_seq", sequenceName = "user_id_seq", allocationSize = 1)
    private Long id;

    @NotBlank(message = "Name must not be blank")
    @Size(min = 3, message = "Name must be at least 3 characters long")
    private String name;

    @NotBlank(message = "Mobile number must not be blank")
    @Pattern(regexp = "(^$|[0-9]{10})", message = "Mobile number must be 10 digits")
    private String mobileNumber;

    @NotBlank(message = "Email must not be blank")
    @Email(message = "Please provide a valid email address")
    private String email;

    @NotBlank(message = "Password must not be blank")
    @Size(min = 5, message = "Password must be at least 5 characters long")
    private String pwd;

    @NotBlank(message = "CIN must not be blank")
    private String cin;

    @NotBlank(message = "Date of birth must not be blank")
    @Past
    private Date birthDay;

    @Enumerated(EnumType.STRING)
    public Role role;

    public enum Role {
        USER, ADMIN
    }


}
