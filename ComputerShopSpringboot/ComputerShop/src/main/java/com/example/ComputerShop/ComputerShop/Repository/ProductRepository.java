package com.example.ComputerShop.ComputerShop.Repository;

import com.example.ComputerShop.ComputerShop.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long>
{

}
