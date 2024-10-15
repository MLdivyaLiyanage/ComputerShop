package com.example.ComputerShop.ComputerShop.Exception;

public class CustomerNotFoundException extends RuntimeException
{
    public CustomerNotFoundException(Long customerId)
    {
        super("Could not found the Customer with ID"+ customerId);
    }
}
