package project.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import org.hibernate.annotations.GenericGenerator;

@Entity
public class Submissions extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "submissions_id_seq")
    @SequenceGenerator(name = "submissions_id_seq", sequenceName = "submissions_id_seq", allocationSize = 1)
    private int submissionId;

    @NotBlank(message = "First bac grade must not be blank ")
    private float firstBacGrade;

    @NotBlank(message = "Second bac grade must not be blank ")
    private float secondBacGrade;


}
