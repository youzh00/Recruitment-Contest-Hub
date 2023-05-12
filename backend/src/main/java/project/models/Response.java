package project.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Response {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "response_id_seq")
    @SequenceGenerator(name = "response_id_seq", sequenceName = "response_id_seq", allocationSize = 1)
    private Long id;

    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "question_id",
            referencedColumnName = "id",
            nullable = false,
            foreignKey = @ForeignKey(
                    name = "question_response_id_fkey"
            )
    )
    private Question question;

    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "question_option_id",
            referencedColumnName = "id",
            nullable = false,
            foreignKey = @ForeignKey(
                    name = "question_option_response_id_fkey"
            )
    )
    private QuestionOption questionOption;

    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "result_id",
            referencedColumnName = "id",
            nullable = false,
            foreignKey = @ForeignKey(
                    name = "result_response_id_fkey"
            )
    )
    private Result result;

}
