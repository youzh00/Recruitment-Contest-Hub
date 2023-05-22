package project.security.service;


import jakarta.transaction.Transactional;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import project.models.Person;
import project.repositories.PersonRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private final PersonRepository personRepository;

    public UserDetailsServiceImpl(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String personName) throws UsernameNotFoundException {
        Person person = personRepository.findByName(personName)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with personName: " + personName));

        return UserDetailsImpl.build(person);
    }
}
