package project.controllers;


import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.models.Contest;
import project.models.Question;
import project.models.Registration;
import project.models.Result;
import project.services.ContestService;

import java.util.List;


@RestController
@RequestMapping("/api/contests")
public class ContestController {


    private final ContestService contestService;

    public ContestController(ContestService contestService) {
        this.contestService = contestService;
    }

    @PostMapping
    public ResponseEntity<Contest> createContest(@Valid @RequestBody Contest contest) {
        System.out.println(contest);
        Contest savedContest = contestService.createContest(contest);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedContest);
    }

    // Retrieve all contests
    @GetMapping
    public List<Contest> getContests() {
        return contestService.getContests();
    }

    // Retrieve a specific contest by ID
    @GetMapping("/{id}")
    public Contest getContestById(@PathVariable Long id) {
        return contestService.getContestById(id);
    }

    // Update a specific contest by ID
    @PutMapping("/{id}")
    public Contest updateContestById(@PathVariable Long id, @Valid @RequestBody Contest contest) {
        return contestService.updateContestById(id, contest);
    }

    // Delete a specific contest by ID
    @DeleteMapping("/{id}")
    public void deleteContestById(@PathVariable Long id) {
        contestService.deleteContestById(id);
    }

    // Retrieve all registrations for a specific contest by ID
    @GetMapping("/{id}/registrations")
    public List<Registration> getRegistrationsForContest(@PathVariable Long id) {
        return contestService.getRegistrationsForContest(id);
    }

    // Register a user for a specific contest by ID (admin only)
    @PostMapping("/{id}/registrations")
    public Registration registerUserForContest(@PathVariable Long id, @RequestBody Registration registration) {
        return contestService.registerPersonForContest(id, registration);
    }

    @GetMapping("/{id}/questions")
    public List<Question> getQuestionsForContest(@PathVariable Long id) {
        return contestService.getQuestionsForContest(id);
    }

    // Admin
    @GetMapping("/{id}/results")
    public List<Result> getResultsForContest(@PathVariable Long id) {
        return contestService.getResultsForContest(id);
    }

}
