package com.example.ComputerShop.ComputerShop.Controller;

import com.example.ComputerShop.ComputerShop.Model.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private List<User> users = new ArrayList<>();
    private int currentId = 1;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        // Check if the email is already registered
        for (User existingUser : users) {
            if (existingUser.getEmail().equals(user.getEmail())) {
                throw new RuntimeException("Email already registered.");
            }
        }

        // Set the user ID and add the user to the list
        user.setId(currentId++);
        users.add(user);
        return user;
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {
        // Check if the email and password match any registered user
        for (User existingUser : users) {
            if (existingUser.getEmail().equals(user.getEmail()) &&
                    existingUser.getPassword().equals(user.getPassword())) {
                return "Login successful!";
            }
        }
        return "Invalid email or password.";
    }

    @GetMapping
    public List<User> getAllUsers() {
        return users;
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {
        for (User user : users) {
            if (user.getId() == id) {
                return user;
            }
        }
        return null;
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable int id, @RequestBody User updatedUser) {
        for (User user : users) {
            if (user.getId() == id) {
                user.setFirstName(updatedUser.getFirstName());
                user.setLastName(updatedUser.getLastName());
                user.setEmail(updatedUser.getEmail());
                user.setPassword(updatedUser.getPassword());
                return user;
            }
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable int id) {
        for (User user : users) {
            if (user.getId() == id) {
                users.remove(user);
                return "User with ID " + id + " deleted.";
            }
        }
        return "User not found.";
    }
}
