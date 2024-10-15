package com.example.ComputerShop.ComputerShop.Exception;

public class ProductNotFoundException extends RuntimeException
{
    public ProductNotFoundException(Long id)
    {
        super("Could not found the Customer with ID"+ id);
    }
}
