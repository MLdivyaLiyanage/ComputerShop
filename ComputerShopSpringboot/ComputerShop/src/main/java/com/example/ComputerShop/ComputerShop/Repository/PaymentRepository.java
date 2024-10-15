package com.example.ComputerShop.ComputerShop.Repository;

import com.example.ComputerShop.ComputerShop.Model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment,Long> {
}
