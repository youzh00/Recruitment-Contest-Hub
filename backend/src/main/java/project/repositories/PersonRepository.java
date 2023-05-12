package project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.models.Person;
import project.models.Registration;

import java.util.List;
import java.util.Optional;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    Optional<Person> findByName(String name);

    Boolean existsByName(String name);

    Boolean existsByEmail(String email);

    List<Registration> findRegistrationsByUserId(Long userId);
}
