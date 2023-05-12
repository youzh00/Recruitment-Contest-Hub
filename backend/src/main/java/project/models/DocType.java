package project.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class DocType extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "doc_type_id_seq")
    @SequenceGenerator(name = "doc_type_id_seq", sequenceName = "doc_type_id_seq", allocationSize = 1)
    private Long id;

    @NotBlank(message = "DocType name must not be blank")
    private String name;

    @ManyToOne
    @JoinColumn(
            name = "contest_id",
            referencedColumnName = "id",
            nullable = false,
            foreignKey = @ForeignKey(
                    name = "doc_type_contest_id_fkey"
            )
    )
    private Contest contest;
}
