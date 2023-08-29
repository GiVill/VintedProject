package it.unical.ea.VintedProject.data.dao;

import it.unical.ea.VintedProject.data.entities.BasicInsertion;
import it.unical.ea.VintedProject.data.entities.User;
import it.unical.ea.VintedProject.dto.BasicInsertionDto;
import it.unical.ea.VintedProject.dto.enumeration.Brand;
import it.unical.ea.VintedProject.dto.enumeration.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BasicInsertionDao extends JpaRepository<BasicInsertion,Long> {

    //Delete all the Insertion made by a User with a specified User's id
    void deleteAllByUserId(Long uId);

    //Return an Insertion fetched by id
    @Override
    Optional<BasicInsertion> findById(Long aLong);

    Page<BasicInsertion> findAllByIsPrivateIsFalse(PageRequest aLong);

    Optional<BasicInsertion> findByIdAndIsPrivateIsFalse(Long aLong);

    //Return a PAGEABLE of Insertion fetched by User id
    Page<BasicInsertion> findAllByUserId(Long uLong, Pageable pageable);

    Page<BasicInsertion> findAllByUserIdAndIsPrivateIsFalse(Long uLong, Pageable pageable);

    Optional<BasicInsertion> findByBuyingOffersId(Long offerId);

    Page<BasicInsertion> findAllByUserEmail(String email, Pageable pageable);

    //Return a PAGEABLE of Insertion fetched by title
    Page<BasicInsertion> findAllByTitleContainingIgnoreCaseAndIsPrivateIsFalse(String title, Pageable pageable);

    //Return ALL the Insertion with a price lower or equal
    List<BasicInsertion> findByPriceLessThanEqual(int price);

    //Return ALL the Insertion with a price greater or equal
    List<BasicInsertion> findByPriceGreaterThanEqual(int price);

    //Return ALL the Insertion with a price between a range
    List<BasicInsertion> findByPriceBetween(int from, int to);

    //Return a PAGEABLE of Insertion with a determinate Brand
    Page<BasicInsertion> findByBrandAndIsPrivateIsFalse(Brand brand, Pageable pageable);

    //Return a PAGEABLE of Insertion with a determinate Category
    Page<BasicInsertion> findByCategoryAndIsPrivateIsFalse(Category category, Pageable pageable);

    Page<BasicInsertion> findAllByIsPrivate(Boolean isPrivate, Pageable pageable);

    List<BasicInsertionDto> findByUser(User user);
}
