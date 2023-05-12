package project.services;


import org.springframework.stereotype.Service;
import project.exceptions.ResourceNotFoundException;
import project.models.Contest;
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
        Contest updatedContest = contestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Profile not found"));

        updatedContest.setDeadline(contest.getDeadline());
        updatedContest.setType(contest.getType());
        updatedContest.setDuration(contest.getDuration());
        updatedContest.setStartingTime(contest.getStartingTime());

        return contestRepository.save(updatedContest);
    }
}
