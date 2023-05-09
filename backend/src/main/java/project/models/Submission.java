package project.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Submission extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "submissions_id_seq")
    @SequenceGenerator(name = "submissions_id_seq", sequenceName = "submissions_id_seq", allocationSize = 1)
    private Long id;

    @NotBlank(message = "First bac grade must not be blank ")
    private float firstBacGrade;

    @NotBlank(message = "Second bac grade must not be blank ")
    private float secondBacGrade;

    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "person_id",
            referencedColumnName = "id",
            nullable = false,
            foreignKey = @ForeignKey(
                    name = "submission_person_id_fkey"
            )
    )
    private Person person;
    @ManyToOne
    @JoinColumn(
            name = "contest_id",
            referencedColumnName = "id",
            nullable = false,
            foreignKey = @ForeignKey(
                    name = "submission_contest_id_fkey"
            )
    )
    private Contest contest;


}
