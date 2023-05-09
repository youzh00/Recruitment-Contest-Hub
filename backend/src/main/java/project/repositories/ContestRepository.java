package project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.models.Contest;

@Repository
public interface ContestRepository extends JpaRepository<Contest, Long> {
}
