package project.services;


import org.springframework.stereotype.Service;
import project.exceptions.ResourceNotFoundException;
import project.models.Contest;
import project.models.Question;
import project.models.Registration;
import project.models.Result;
import project.repositories.ContestRepository;
import project.repositories.RegistrationRepository;

import java.util.List;

@Service
public class ContestService {

    private final ContestRepository contestRepository;


    private final RegistrationRepository registrationRepository;

    public ContestService(ContestRepository contestRepository, RegistrationRepository registrationRepository) {
        this.contestRepository = contestRepository;
        this.registrationRepository = registrationRepository;
    }

    public Contest createContest(Contest contest) {
        Contest newContest = new Contest(contest.getSchoolName(), contest.getContestName(), contest.getDescription(), contest.getDeadline(), contest.getStartingTime(), contest.getDuration(), contest.getType());
        newContest.setQuestions(contest.getQuestions());
        newContest.setDocTypes(contest.getDocTypes());

        newContest.getQuestions().forEach(question -> question.setContest(newContest));
        newContest.getDocTypes().forEach(docType -> docType.setContest(newContest));

        return contestRepository.save(newContest);
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
        registration.setPerson(registration.getPerson());
        registration.setDocuments(registration.getDocuments());
        registration.getDocuments().forEach(document -> document.setRegistration(registration));
        return registrationRepository.save(registration);

    }

    public List<Question> getQuestionsForContest(Long id) {
        return contestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contest not found")).getQuestions();
    }

    // getResultsForContest
    public List<Result> getResultsForContest(Long id) {
        return contestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contest not found")).getResults();
    }

    public List<Question> createQuestionsForContest(Long id, List<Question> questions) {
        Contest contest = contestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contest not found"));
        contest.setQuestions(questions);
        contestRepository.save(contest);
        return questions;
    }

}
