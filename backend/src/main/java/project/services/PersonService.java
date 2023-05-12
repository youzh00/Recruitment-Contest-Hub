package project.services;

import org.springframework.stereotype.Service;
import project.models.Contest;
import project.models.Person;
import project.models.Registration;
import project.repositories.ContestRepository;
import project.repositories.PersonRepository;

import java.util.List;

@Service
public class PersonService {

        private final PersonRepository personRepository;
        private final ContestRepository contestRepository;

        public PersonService(PersonRepository personRepository, ContestRepository contestRepository) {
            this.personRepository = personRepository;
            this.contestRepository = contestRepository;
        }

        public List<Person> getPersons() {
            return personRepository.findAll();
        }

        public Person getPersonById(Long id) {
            return personRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Person not found with ID: " + id));
        }

        public Person createPerson(Person person) {
            return personRepository.save(person);
        }

        public Person updatePersonById(Long id, Person updatePerson) {
            Person personToUpdate = getPersonById(id);
            personToUpdate.setName(updatePerson.getName()); // assuming that name is a field in Person
            return personRepository.save(personToUpdate);
        }

        public void deletePersonById(Long id) {
            personRepository.deleteById(id);
        }

        public List<Registration> getRegistrationsForPerson(Long personId) {
            Person person = getPersonById(personId);
            return person.getRegistrations();
        }

        public Registration registerPersonForContest(Long personId, Registration registration) {
            Person person = getPersonById(personId);
            Contest contest = contestRepository.findById(registration.getContestId()).orElseThrow(() -> new EntityNotFoundException("Contest not found with ID: " + registration.getContestId()));
            registration.setPerson(person);
            registration.setContest(contest);
            return person.addRegistration(registration);
        }

        public void deleteRegistrationForPerson(Long personId, Long contestId) {
            Person person = getPersonById(personId);
            person.removeRegistration(contestId);
        }
    }
}
