package it.unical.ea.VintedProject.data.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Blob;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "BASICINSERTION")
@Inheritance(strategy = InheritanceType.JOINED)
public class BasicInsertion {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "ID")
    private Long id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "PRICE")
    private Integer price;

    @Column(name = "CREATION_DATE")
    @Temporal(TemporalType.DATE)
    private LocalDate creationDate;

    @Column(name = "END_DATE")
    @Temporal(TemporalType.DATE)
    private LocalDate endDate;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "IMAGE")
    @Lob
    private Blob image;

    @Column(name = "CONDITION")
    private String condition;

    @OneToOne(mappedBy = "insertion")
    private Payment payment;

    @ManyToMany(mappedBy = "favorites")
    Set<User> usersFavorites;

    @OneToMany(mappedBy = "insertion", fetch = FetchType.LAZY)
    private List<BuyingOffer> buyingOffers;

    @OneToOne(mappedBy = "insertion")
    private Order order;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

}
