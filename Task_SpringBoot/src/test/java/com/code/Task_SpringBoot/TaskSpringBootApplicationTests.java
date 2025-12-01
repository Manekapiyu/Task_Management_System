package com.code.Task_SpringBoot;

import jakarta.annotation.PostConstruct;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TaskSpringBootApplicationTests {

	@Test
	void contextLoads() {
	}

    @PostConstruct
    public void init() {
        System.out.println("✅ Application started successfully");
    }


}
