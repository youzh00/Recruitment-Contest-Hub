package project.controllers;


import org.springframework.web.bind.annotation.*;
import project.models.Person;
import project.models.Registration;

import java.util.List;

@RestController
@RequestMapping("/api/persons")
public class PersonController {
    private final PersonService personService; // Assuming that you have a PersonService to handle the business logic.

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    // Retrieve all persons
    @GetMapping
    public List<Person> getPersons() {
        return personService.getPersons();
    }

    // Retrieve a specific person by ID
    @GetMapping("/{id}")
    public Person getPersonById(@PathVariable Long id) {
        return personService.getPersonById(id);
    }

    // Create a new person
    @PostMapping
    public Person createPerson(@RequestBody Person person) {
        return personService.createPerson(person);
    }

    // Update a specific person by ID
    @PutMapping("/{id}")
    public Person updatePersonById(@PathVariable Long id, @RequestBody Person person) {
        return personService.updatePersonById(id, person);
    }

    // Delete a specific person by ID
    @DeleteMapping("/{id}")
    public void deletePersonById(@PathVariable Long id) {
        personService.deletePersonById(id);
    }

    // Retrieve all registrations for a specific person by ID
    @GetMapping("/{id}/registrations")
    public List<Registration> getRegistrationsForPerson(@PathVariable Long id) {
        return personService.getRegistrationsForPerson(id);
    }

    // Register a person for a specific contest by ID
    @PostMapping("/{id}/registrations")
    public Registration registerPersonForContest(@PathVariable Long id, @RequestBody Registration registration) {
        return personService.registerPersonForContest(id, registration);
    }

    // Delete a person's registration for a specific contest by ID
    @DeleteMapping("/{personId}/registrations/{contestId}")
    public void deleteRegistrationForPerson(@PathVariable Long personId, @PathVariable Long contestId) {
        personService.deleteRegistrationForPerson(personId, contestId);
    }
}
