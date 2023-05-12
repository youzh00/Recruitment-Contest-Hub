package project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.models.ContestRegistration;

@Repository
public interface SubmissionRepository extends JpaRepository<ContestRegistration, Long> {
}
