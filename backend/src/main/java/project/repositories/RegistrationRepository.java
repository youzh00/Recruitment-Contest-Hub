package project.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.models.Registration;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Long> {
}
