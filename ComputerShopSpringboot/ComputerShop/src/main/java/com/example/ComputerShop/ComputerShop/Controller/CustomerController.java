package com.example.ComputerShop.ComputerShop.Controller;

import com.example.ComputerShop.ComputerShop.Exception.CustomerNotFoundException;
import com.example.ComputerShop.ComputerShop.Model.Customer;
import com.example.ComputerShop.ComputerShop.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class CustomerController
{
    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping("/customer")
    Customer newCustomer(@RequestBody Customer newCustomer)
    {
        return customerRepository.save(newCustomer);
    }

    @GetMapping("/customers")
    List<Customer> getAllCustomers()
    {
        return customerRepository.findAll();
    }

    @GetMapping("/customer/{id}")
    Customer getCustomerById(@PathVariable Long id)
    {
        return customerRepository.findById(id)
                .orElseThrow(()->new CustomerNotFoundException(id));
    }

    @PutMapping("/customer/{id}")
    Customer updateCustomer(@RequestBody Customer newCustomer,@PathVariable Long id)
    {
        return customerRepository.findById(id)
                .map(customer -> {
                    //customer.setCustomerId(newCustomer.getCustomerId());
                    customer.setCustomerName(newCustomer.getCustomerName());
                    customer.setCustomerAddress(newCustomer.getCustomerAddress());
                    customer.setCustomerPhoneno(newCustomer.getCustomerPhoneno());
                    customer.setCustomerEmail(newCustomer.getCustomerEmail());
                    return customerRepository.save(customer);
                }).orElseThrow(()->new CustomerNotFoundException(id));
    }

    @DeleteMapping("customer/{id}")
    String deleteCustomer(@PathVariable Long id)
    {
        if (!customerRepository.existsById(id))
        {
            throw new CustomerNotFoundException(id);
        }
        customerRepository.deleteById(id);
        return "Customer with ID " +id+ " has been deleted successfully";
    }

}
