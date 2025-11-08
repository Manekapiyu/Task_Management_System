package com.code.Task_SpringBoot.dto;

import com.code.Task_SpringBoot.enums.TaskStatus;
import lombok.Data;

import java.util.Date;

@Data
public class TaskDTO {
    public String getTitle;
    private int id;
    private String name;
    private String description;
    private Date dueDate;
    private String priority;
    private TaskStatus taskStatus;
    private Long EmployeeId;
    private String EmployeeName;

    public String getTitle() {
        return "";
    }
}
