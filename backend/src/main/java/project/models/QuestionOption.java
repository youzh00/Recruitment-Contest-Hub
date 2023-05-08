package project.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Entity
public class QuestionOption extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "contest_id_seq")
    @SequenceGenerator(name = "contest_id_seq", sequenceName = "contest_id_seq", allocationSize = 1)
    private int questionOptionId;


    @NotBlank(message = "Question Option must not be blank ")
    private String Option;

    @NotBlank(message = "The correctness of the answer must not be blank ")
    private boolean isCorrect;
}
