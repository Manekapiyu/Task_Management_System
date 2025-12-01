package com.code.Task_SpringBoot.services.admin;


import com.code.Task_SpringBoot.dto.TaskDTO;
import com.code.Task_SpringBoot.dto.UserDto;
import com.code.Task_SpringBoot.entities.Task;
import com.code.Task_SpringBoot.entities.User;
import com.code.Task_SpringBoot.enums.TaskStatus;
import com.code.Task_SpringBoot.enums.UserRole;
import com.code.Task_SpringBoot.repository.TaskRepositiory;
import com.code.Task_SpringBoot.repository.UserRepository;
import com.code.Task_SpringBoot.services.auth.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
    private final AuthService authService;
    private final UserRepository userRepository;
    private final TaskRepositiory taskRepositiory;


    @Override
    public List<UserDto> getUsers() {
        return  userRepository.findAll()
                .stream()
                .filter(user -> user.getUserRole() == UserRole.EMPLOYEE)
                .map(User::getUserDto)
                .collect(Collectors.toList());
    }

    @Override
    public TaskDTO createTask(TaskDTO taskDTO) {
        Optional<User> optionalUser = userRepository.findById(taskDTO.getEmployeeId());
        if(optionalUser.isPresent()){
            Task task = new Task();
            task.setTitle(taskDTO.getTitle());
            task.setDescription(taskDTO.getDescription());
            task.setPriority(taskDTO.getPriority());
            task.setDueDate(taskDTO.getDueDate());
            task.setTaskStatus(TaskStatus.INPROGRESS);
            task.setUser(optionalUser.get());
            return taskRepositiory.save(task).getTaskDTO();




        }
        return null;
    }

    @Override
    public List<TaskDTO> getAllTasks() {
        return taskRepositiory.findAll()
                .stream()
                .sorted(Comparator.comparing(Task::getDueDate).reversed())
                .map(Task::getTaskDTO)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteTask(Long id) {
        taskRepositiory.deleteById(id);

    }

    @Override
    public TaskDTO getTaskById(Long id) {
        Optional<Task> optionalTask = taskRepositiory.findById(id);
        return optionalTask.map(Task::getTaskDTO).orElse(null);
    }




}
