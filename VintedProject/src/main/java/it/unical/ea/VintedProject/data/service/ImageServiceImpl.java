package it.unical.ea.VintedProject.data.service;

import it.unical.ea.VintedProject.config.i18n.MessageLang;
import it.unical.ea.VintedProject.config.utility.FileUtil;
import it.unical.ea.VintedProject.core.detail.LoggedUserDetail;
import it.unical.ea.VintedProject.data.entities.BasicInsertion;
import it.unical.ea.VintedProject.data.entities.User;
import it.unical.ea.VintedProject.data.service.interfaces.BasicInsertionService;
import it.unical.ea.VintedProject.data.service.interfaces.ImageService;
import it.unical.ea.VintedProject.data.service.interfaces.UserService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {

    private final UserService userService;
    private final BasicInsertionService insertionService;
    private final MessageLang messageLang;

    private final String relativePathToUploads = "src/main/resources/image/";

    @Override
    public Resource getImage(String imagePath) {


        // Costruisci il percorso completo del file utilizzando il filepath ricevuto
        String fullPath = relativePathToUploads + imagePath;

        // Crea una risorsa File System utilizzando il percorso completo del file
        Resource resource = new FileSystemResource(fullPath);

        if(resource.exists()){
            return resource;
        }
        throw new EntityNotFoundException(messageLang.getMessage("image.not.found"));
    }

    public Boolean insertUserImage(MultipartFile img){
        Optional<User> u = userService.findByNickName(LoggedUserDetail.getInstance().getUsername());
        if(u.get().getNickName() == null){
            //TODO: ECCEZIONE CON MESSAGGIO
            System.out.println("NPOOOOOOOOOOOOOOO");
            return null;
        }
        try {
            String realPathToUploads = System.getProperty("user.dir") + File.separator + relativePathToUploads;

            if (!new File(realPathToUploads).exists()) {
                new File(realPathToUploads).mkdir();
            }

            if(u.get().getImageName() != null) {
                String oldFilePath = realPathToUploads + "\\" + u.get().getImageName();
                File fileToDelete = new File(oldFilePath);
                if (fileToDelete.exists()) {
                    if (fileToDelete.delete()) {
                        System.out.println("Il file è stato eliminato con successo.");
                    }
                }
            }

            String orgName = FileUtil.assignProgressiveName(img);
            String filePath = realPathToUploads +"\\"+ orgName;

            File dest = new File(filePath);
            img.transferTo(dest);

            u.get().setImageName(orgName);

            userService.save(u.get());

            return true;
        }catch (Exception e){ return false; }
    }

    public Boolean insertInsertionImage(Long insertionId, MultipartFile img){
        try {
            String realPathToUploads = System.getProperty("user.dir") + File.separator + relativePathToUploads;

            if (!new File(realPathToUploads).exists()) {
                new File(realPathToUploads).mkdir();
            }

            String orgName = FileUtil.assignProgressiveName(img);
            String filePath = realPathToUploads +"\\"+ orgName;

            File dest = new File(filePath);
            img.transferTo(dest);

            BasicInsertion insertion = insertionService.findById(insertionId);
            insertion.setImageName(orgName);

            insertionService.save(insertion);

            return true;
        }catch (Exception e){ return false; }
    }

    /*
    try {
         String fileName = file.getOriginalFilename();
         String filePath = "/path/to/save/" + fileName;
         file.transferTo(new File(filePath));
         return "Immagine caricata con successo.";
       } catch (IOException e) {
         return "Errore durante il caricamento dell'immagine: " + e.getMessage();
       }
     */

}
