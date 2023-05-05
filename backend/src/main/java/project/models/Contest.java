package project.models;


import jakarta.persistence.*;

@Entity
public class Contest extends BaseEntity{


    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "contest_id_seq")
    @SequenceGenerator(name = "contest_id_seq", sequenceName = "contest_id_seq", allocationSize = 1)
    private int contestId;

    private String schoolName;

    private String deadline;

    private String startingTime;

    private String duration;

    @Enumerated(EnumType.STRING)
    public Type type;

    public enum Type{
        MASTER, DOCTORA, PREPARTOIRE
    }


}
