package project.models;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "contest_id_seq")
    @SequenceGenerator(name = "contest_id_seq", sequenceName = "contest_id_seq", allocationSize = 1)
    private int documentId;


    private String docLink;

    @Enumerated(EnumType.STRING)
    public DocType type;

    public enum DocType{
        BAC, CV , CIN,
    }
}
