package com.code.Task_SpringBoot.entities;

import com.code.Task_SpringBoot.dto.TaskDTO;
import com.code.Task_SpringBoot.enums.TaskStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.Date;

@Entity
@Data
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private Date dueDate;
    private String priority;
    private TaskStatus taskStatus;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private User user;

    public TaskDTO getTaskDTO() {
        return null;
    }


    public void setTitle(String getTitle) {
    }
}
