package it.unical.ea.VintedProject.data.service.interfaces;

import it.unical.ea.VintedProject.dto.PaymentDto;

import java.util.List;

public interface PaymentService {

    PaymentDto save(PaymentDto payment);

    void deleteInsertion(Long id);

    List<PaymentDto> findAll();

    PaymentDto findById(Long id);

}
