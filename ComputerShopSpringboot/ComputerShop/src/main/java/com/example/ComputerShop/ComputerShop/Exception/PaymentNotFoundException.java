package com.example.ComputerShop.ComputerShop.Exception;

public class PaymentNotFoundException extends RuntimeException{

    public PaymentNotFoundException(Long payId)
    {
        super("Could not found the payment with ID"+ payId);
    }
}
