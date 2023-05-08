package project.models;


import com.fasterxml.jackson.databind.ser.Serializers;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Entity
public class Document extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "contest_id_seq")
    @SequenceGenerator(name = "contest_id_seq", sequenceName = "contest_id_seq", allocationSize = 1)
    private int documentId;

    @NotBlank(message = "Document link must not be blank ")
    private String docLink;

    @Enumerated(EnumType.STRING)
    public DocType type;

    public enum DocType{
        BAC, CV , CIN,
    }
}
