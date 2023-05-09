package project.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class Contest extends BaseEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "contest_id_seq")
    @SequenceGenerator(name = "contest_id_seq", sequenceName = "contest_id_seq", allocationSize = 1)
    private Long id;

    @NotBlank(message = "School name must not be blank ")
    private String schoolName;

    @NotBlank(message = "Deadline must not be blank ")
    private String deadline;

    @NotBlank(message = "Contest Starting time must not be blank ")
    private String startingTime;

    @NotBlank(message = "Duration must not be blank ")
    private String duration;

    @Enumerated(EnumType.STRING)
    public ContestType type;

    public enum ContestType {
        MASTER, DOCTORA, PREPARTOIRE
    }


}
