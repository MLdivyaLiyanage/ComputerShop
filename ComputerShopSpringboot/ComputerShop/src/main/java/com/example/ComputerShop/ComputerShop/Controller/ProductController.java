package com.example.ComputerShop.ComputerShop.Controller;

import com.example.ComputerShop.ComputerShop.Exception.ProductNotFoundException;
import com.example.ComputerShop.ComputerShop.Model.Product;
import com.example.ComputerShop.ComputerShop.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController
{
    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/product")
    Product newProduct(@RequestBody Product newProduct)
    {
        return productRepository.save(newProduct);
    }

    @GetMapping("/products")
    List<Product> getAllProduct()
    {
        return productRepository.findAll();
    }

    @GetMapping("/product/{id}")
    Product getProductById(@PathVariable Long id)
    {
        return productRepository.findById(id)
                .orElseThrow(()->new ProductNotFoundException(id));
    }

    @PutMapping("/product/{id}")
    Product updateProduct(@RequestBody Product newProduct,@PathVariable Long id)
    {
        return productRepository.findById(id)
                .map(product -> {
                    //product.setId(newProduct.getId());
                    product.setCustomerId(newProduct.getCustomerId());
                    product.setProductCategories(newProduct.getProductCategories());
                    product.setProductName(newProduct.getProductName());
                    product.setProductQuantity(newProduct.getProductQuantity());
                    product.setProductPrice(newProduct.getProductPrice());

                    return productRepository.save(product);
                }).orElseThrow(()->new ProductNotFoundException(id));
    }

    @DeleteMapping("product/{id}")
    String deleteProduct(@PathVariable Long id)
    {
        if (!productRepository.existsById(id))
        {
            throw new ProductNotFoundException(id);
        }
        productRepository.deleteById(id);
        return "Product with ID " +id+ " has been deleted successfully";
    }

}
