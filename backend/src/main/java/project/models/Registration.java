package project.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Registration extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "registration_id_seq")
    @SequenceGenerator(name = "registration_id_seq", sequenceName = "registration_id_seq", allocationSize = 1)
    private Long id;

    @NotBlank(message = "First name must not be blank ")
    private float firstName;

    @NotBlank(message = "Second name must not be blank ")
    private float secondName;

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
                    name = "registration_person_id_fkey"
            )
    )
    private Person person;
    @ManyToOne
    @JoinColumn(
            name = "contest_id",
            referencedColumnName = "id",
            nullable = false,
            foreignKey = @ForeignKey(
                    name = "registration_contest_id_fkey"
            )
    )
    private Contest contest;

    @OneToMany(
            mappedBy = "registration",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Document> documents = new ArrayList<>();


}
