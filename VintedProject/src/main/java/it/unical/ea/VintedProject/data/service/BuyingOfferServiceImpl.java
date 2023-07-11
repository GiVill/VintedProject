package it.unical.ea.VintedProject.data.service;

import it.unical.ea.VintedProject.config.i18n.MessageLang;
import it.unical.ea.VintedProject.core.detail.LoggedUserDetail;
import it.unical.ea.VintedProject.data.dao.BuyingOfferDao;
import it.unical.ea.VintedProject.data.dao.UserDao;
import it.unical.ea.VintedProject.data.entities.BuyingOffer;
import it.unical.ea.VintedProject.data.entities.User;
import it.unical.ea.VintedProject.data.service.interfaces.BuyingOfferService;
import it.unical.ea.VintedProject.dto.BuyingOfferDto;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class BuyingOfferServiceImpl implements BuyingOfferService {

    private final ModelMapper modelMapper;
    private final BuyingOfferDao buyingOfferDao;
    private final UserDao userDao;
    private final MessageLang messageLang;

    @Override
    public BuyingOfferDto save(BuyingOfferDto offer) {
        BuyingOffer buyingOffer = modelMapper.map(offer,BuyingOffer.class);
        buyingOfferDao.save(buyingOffer);

        BuyingOffer o = buyingOfferDao.save(buyingOffer);
        return modelMapper.map(o,BuyingOfferDto.class);
    }

    @Override
    public void save(BuyingOffer buyingOffer) {
        buyingOfferDao.save(buyingOffer);
    }

    @Override
    public Stream<BuyingOfferDto> getById(Long userId) {
        Optional<User> u = userDao.findUserByEmail(LoggedUserDetail.getInstance().getEmail());
        if(u.get().getEmail() == null || !u.get().getId().equals(userId)){
            //TODO: modificare eccezione
            System.out.println("NPOOOOOOOOOOOOOOO");
            throw new EntityNotFoundException(messageLang.getMessage("user.without.payment",userId));
        }
        return buyingOfferDao.findById(userId).stream().map(s -> modelMapper.map(s, BuyingOfferDto.class));
    }

    @Override
    @PreAuthorize("has")
    public List<BuyingOfferDto> findAll() {
        return buyingOfferDao.findAll().stream().map(s -> modelMapper.map(s, BuyingOfferDto.class)).collect(Collectors.toList());
    }

    @Override
    public Stream<BuyingOfferDto> getAllByUserIdForAdmin(Long userId) {
        return buyingOfferDao.findById(userId).stream().map(s -> modelMapper.map(s, BuyingOfferDto.class));
    }

    @Override
    public void deleteOfferById(Long offerId) {
        Optional<User> u = userDao.findUserByEmail(LoggedUserDetail.getInstance().getEmail());
        if(u.get().getEmail() == null || !u.get().getBuyingOffers().contains(buyingOfferDao.findById(offerId))){
            //TODO: modificare eccezione
            System.out.println("NPOOOOOOOOOOOOOOO");
            throw new EntityNotFoundException(messageLang.getMessage("user.without.payment",offerId));
        }
        buyingOfferDao.deleteById(offerId);
    }

}
