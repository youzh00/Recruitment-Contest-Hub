package project.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Question extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "contest_id_seq")
    @SequenceGenerator(name = "contest_id_seq", sequenceName = "contest_id_seq", allocationSize = 1)
    private Long id;

    @NotBlank(message = "Question must not be blank ")
    private String question;

    @ManyToOne
    @JoinColumn(
            name = "contest_id",
            referencedColumnName = "id",
            nullable = false,
            foreignKey = @ForeignKey(
                    name = "question_contest_id_fkey"
            )
    )
    private Contest contest;

    @OneToMany(
            mappedBy = "question",
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            orphanRemoval = true
    )
    List<QuestionOption> options = new ArrayList<>();

}
