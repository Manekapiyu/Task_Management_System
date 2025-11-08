package com.code.Task_SpringBoot.repository;

import com.code.Task_SpringBoot.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepositiory  extends JpaRepository<Task,Long> {
}
