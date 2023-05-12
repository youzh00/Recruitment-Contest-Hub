package project.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class QuestionOption extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "contest_id_seq")
    @SequenceGenerator(name = "contest_id_seq", sequenceName = "contest_id_seq", allocationSize = 1)
    private Long id;


    @NotBlank(message = "Question Option must not be blank ")
    private String Option;

    @NotBlank(message = "The correctness of the answer must not be blank ")
    private boolean isCorrect;


    @ManyToOne
    @JoinColumn(
            name = "question_id",
            referencedColumnName = "id",
            nullable = false,
            foreignKey = @ForeignKey(
                    name = "question_option_question_id_fkey"
            )
    )
    private Question question;
}
