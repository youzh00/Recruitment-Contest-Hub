package project.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@Entity(name = "Person")
@Table(
        name = "person",
        uniqueConstraints = {
                @UniqueConstraint(name = "person_email_key", columnNames = "email")
                //@UniqueConstraint(name = "person_mobile_number_key", columnNames = "mobileNumber")
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

    //@NotBlank(message = "Mobile number must not be blank")
    //@Pattern(regexp = "(^$|[0-9]{10})", message = "Mobile number must be 10 digits")
    //private String mobileNumber;

    @NotBlank(message = "Email must not be blank")
    @Email(message = "Please provide a valid email address")
    private String email;

    @NotBlank(message = "Password must not be blank")
    @Size(min = 5, message = "Password must be at least 5 characters long")
    private String pwd;

    // @NotBlank(message = "CIN must not be blank")
    //private String cin;


    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public Person(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.pwd = password;
    }

}
