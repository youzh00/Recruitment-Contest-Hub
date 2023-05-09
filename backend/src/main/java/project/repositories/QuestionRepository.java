package project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.models.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
