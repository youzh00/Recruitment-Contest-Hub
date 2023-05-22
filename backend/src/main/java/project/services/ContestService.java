package project.services;


import org.springframework.stereotype.Service;
import project.exceptions.ResourceNotFoundException;
import project.models.Contest;
import project.models.Question;
import project.models.Registration;
import project.models.Result;
import project.repositories.ContestRepository;
import project.repositories.PersonRepository;

import java.util.List;

@Service
public class ContestService {

    private final ContestRepository contestRepository;

    public ContestService(PersonRepository personRepository, ContestRepository contestRepository) {
        this.contestRepository = contestRepository;
    }

    public Contest createContest(Contest contest) {

        return contestRepository.save(contest);
    }

    public List<Contest> getContests() {

        return contestRepository.findAll();
    }

    public Contest updateContestById(Long id, Contest contest) {
        Contest updatedContest = contestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contest not found"));

        updatedContest.setDeadline(contest.getDeadline());
        updatedContest.setType(contest.getType());
        updatedContest.setDuration(contest.getDuration());
        updatedContest.setStartingTime(contest.getStartingTime());

        return contestRepository.save(updatedContest);
    }

    public Contest getContestById(Long id) {

        return contestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contest not found"));
    }

    public void deleteContestById(Long id) {
        contestRepository.deleteById(id);
    }

    public List<Registration> getRegistrationsForContest(Long id) {
        return contestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contest not found")).getRegistrations();
    }

    public Registration registerPersonForContest(Long id, Registration registration) {
        Contest contest = contestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contest not found"));
        registration.setContest(contest);
        return registration;
    }

    public List<Question> getQuestionsForContest(Long id) {
        return contestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contest not found")).getQuestions();
    }

    // getResultsForContest
    public List<Result> getResultsForContest(Long id) {
        return contestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contest not found")).getResults();
    }


    // getResultByIdForContest
    public Result getResultByIdForContest(Long id, Long resultId) {
        return contestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contest not found")).getResults().stream().filter(result -> result.getId().equals(resultId)).findFirst().orElseThrow(() -> new ResourceNotFoundException("Result not found"));
    }
}
