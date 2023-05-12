package project.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;


@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Result extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "result_id_seq")
    @SequenceGenerator(name = "result_id_seq", sequenceName = "result_id_seq", allocationSize = 1)
    private Long id;

    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "person_id",
            referencedColumnName = "id",
            nullable = false,
            foreignKey = @ForeignKey(
                    name = "result_person_id_fkey"
            )
    )
    private Person person;

    @ManyToOne(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "contest_id",
            referencedColumnName = "id",
            nullable = false,
            foreignKey = @ForeignKey(
                    name = "result_contest_id_fkey"
            )
    )
    private Contest contest;
    private int score;
}
