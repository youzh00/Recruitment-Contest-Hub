package project.services;


import org.springframework.stereotype.Service;
import project.exceptions.ResourceNotFoundException;
import project.models.Contest;
import project.models.Registration;
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

        Contest savedContest = contestRepository.save(contest);
        return savedContest;
    }

    public List<Contest> getContests() {
        List<Contest> contestsList = contestRepository.findAll();

        return contestsList;
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
        Contest contest = contestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contest not found"));

        return contest;
    }

    public void deleteContestById(Long id) {
        contestRepository.deleteById(id);
    }

    public List<Registration> getRegistrationsForContest(Long id) {
        List<Registration> registrations=contestRepository.get
    }
}
