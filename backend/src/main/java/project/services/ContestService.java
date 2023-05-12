package project.services;


import org.springframework.stereotype.Service;
import project.models.Contest;
import project.repositories.ContestRepository;
import project.repositories.PersonRepository;

import java.util.List;
import java.util.Optional;

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
        Optional<Contest> optionalContest = contestRepository.findById(id);

        if (optionalContest.isPresent()) {
            Contest updatedContest = optionalContest.get();

        }
    }
}
