package com.sales.dsmeta.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sales.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	
	@Query("SELECT obj FROM Sale obj WHERE obj.date BETWEEN :start AND :end ORDER BY obj.amount DESC")
	Page<Sale> findSales(LocalDate start, LocalDate end, Pageable pageable);

}
