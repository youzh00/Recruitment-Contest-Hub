package project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.models.Response;

@Repository
public interface ResponseRepository extends JpaRepository<Response, Long> {
}
