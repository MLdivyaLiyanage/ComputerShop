package com.example.ComputerShop.ComputerShop.Repository;

import com.example.ComputerShop.ComputerShop.Model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Long>
{

}
