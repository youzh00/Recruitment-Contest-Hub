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
public class Contest extends BaseEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "contest_id_seq")
    @SequenceGenerator(name = "contest_id_seq", sequenceName = "contest_id_seq", allocationSize = 1)
    private Long id;

    @NotBlank(message = "School name must not be blank ")
    private String schoolName;

    @NotBlank(message = "Contest name must not be blank ")
    private String contestName;

    @NotBlank(message = "Contest description must not be blank ")
    private String description;

    @NotBlank(message = "Deadline must not be blank ")
    private String deadline;

    @NotBlank(message = "Contest Starting time must not be blank ")
    private String startingTime;

    @NotBlank(message = "Duration must not be blank ")
    private String duration;

    @Enumerated(EnumType.STRING)
    public ContestType type;


    @OneToMany(
            mappedBy = "contest",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<DocType> docTypes = new ArrayList<>();


    @OneToMany(
            mappedBy = "contest",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Registration> registrations = new ArrayList<>();

    @OneToMany(
            mappedBy = "contest",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Question> questions = new ArrayList<>();


    @OneToMany(
            mappedBy = "contest",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Result> results = new ArrayList<>();


    public Contest(String schoolName, String contestName, String description, String deadline, String startingTime, String duration, ContestType type) {
        this.schoolName = schoolName;
        this.contestName = contestName;
        this.description = description;
        this.deadline = deadline;
        this.startingTime = startingTime;
        this.duration = duration;
        this.type = type;
    }

    public void setDocTypesAndQuestions(List<DocType> docTypes, List<Question> questions) {
        this.docTypes.clear();
        this.docTypes.addAll(docTypes);
        this.questions.clear();
        this.questions.addAll(questions);
    }


    public enum ContestType {
        MASTER, DOCTORA, PREPARTOIRE
    }


}
