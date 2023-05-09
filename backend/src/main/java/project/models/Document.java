package project.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Entity
public class Document extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "contest_id_seq")
    @SequenceGenerator(name = "contest_id_seq", sequenceName = "contest_id_seq", allocationSize = 1)
    private Long id;

    @NotBlank(message = "Document link must not be blank ")
    private String docLink;

    @ManyToOne
    @JoinColumn(
            name = "doc_type_id",
            referencedColumnName = "id",
            nullable = false,
            foreignKey = @ForeignKey(
                    name = "document_doc_type_id_fkey"
            )
    )
    public DocType type;


    @ManyToOne
    @JoinColumn(
            name = "contest_id",
            referencedColumnName = "id",
            nullable = false,
            foreignKey = @ForeignKey(
                    name = "document_contest_id_fkey"
            )
    )
    private Contest contest;


    @ManyToOne
    @JoinColumn(
            name = "submission_id",
            referencedColumnName = "id",
            nullable = false,
            foreignKey = @ForeignKey(
                    name = "document_submission_id_fkey"
            )
    )
    private Submission submission;

}
