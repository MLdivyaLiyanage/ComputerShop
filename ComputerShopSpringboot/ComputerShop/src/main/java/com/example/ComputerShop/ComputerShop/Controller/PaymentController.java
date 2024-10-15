package com.example.ComputerShop.ComputerShop.Controller;

import com.example.ComputerShop.ComputerShop.Exception.PaymentNotFoundException;
import com.example.ComputerShop.ComputerShop.Model.Payment;
import com.example.ComputerShop.ComputerShop.Repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PaymentController
{
    @Autowired
    private PaymentRepository paymentRepository;

    @PostMapping("/payment")
    Payment newPayment(@RequestBody Payment newPayment)
    {
        return paymentRepository.save(newPayment);
    }

    @GetMapping("/payments")
    List<Payment> getAllPayments()
    {
        return paymentRepository.findAll();
    }

    @GetMapping("/payment/{id}")
    Payment getPaymentById(@PathVariable Long id)
    {
        return paymentRepository.findById(id)
                .orElseThrow(()->new PaymentNotFoundException(id));
    }

    @PutMapping("/payment/{id}")
    Payment updatePayment(@RequestBody Payment newPayment,@PathVariable Long id)
    {
        return paymentRepository.findById(id)
                .map(payment -> {
                    //customer.setCustomerId(newPayment.getCustomerId());
                    payment.setProductId(newPayment.getProductId());
                    payment.setProductQuantity(newPayment.getProductQuantity());
                    payment.setPayMethod(newPayment.getPayMethod());
                    payment.setPayTotal(newPayment.getPayTotal());
                    return paymentRepository.save(payment);
                }).orElseThrow(()->new PaymentNotFoundException(id));
    }

    @DeleteMapping("payment/{id}")
    String deletePayment(@PathVariable Long id)
    {
        if (!paymentRepository.existsById(id))
        {
            throw new PaymentNotFoundException(id);
        }
        paymentRepository.deleteById(id);
        return "Payment with ID " +id+ " has been deleted successfully";
    }

}
