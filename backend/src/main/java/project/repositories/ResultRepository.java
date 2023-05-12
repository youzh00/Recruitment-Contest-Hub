package project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.models.Result;

@Repository
public interface ResultRepository extends JpaRepository<Result, Long> {
}
