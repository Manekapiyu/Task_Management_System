package com.code.Task_SpringBoot.services.admin;

import com.code.Task_SpringBoot.dto.TaskDTO;
import com.code.Task_SpringBoot.dto.UserDto;

import java.util.List;

public interface AdminService {

    List<UserDto> getUsers();

    TaskDTO createTask(TaskDTO taskDTO);

    List<TaskDTO> getAllTasks();

    void deleteTask(Long id);

     TaskDTO getTaskById(Long id);
}
