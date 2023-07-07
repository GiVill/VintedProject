package it.unical.ea.VintedProject.data.service.interfaces;

import it.unical.ea.VintedProject.dto.LoginUserDto;
import it.unical.ea.VintedProject.dto.NewUserDto;

public interface AuthService {
    Boolean signUp(NewUserDto newUserDto);

    String doLogin(LoginUserDto data);

}
