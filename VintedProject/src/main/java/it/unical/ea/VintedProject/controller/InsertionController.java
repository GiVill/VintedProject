package it.unical.ea.VintedProject.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import it.unical.ea.VintedProject.data.service.interfaces.BasicInsertionService;
import it.unical.ea.VintedProject.dto.BasicInsertionDto;
import it.unical.ea.VintedProject.dto.enumeration.Brand;
import it.unical.ea.VintedProject.dto.enumeration.Category;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/v1")
@RequiredArgsConstructor
@Tag(name = "Insertion") //Name displayed on swagger
public class InsertionController {

    private final BasicInsertionService basicInsertionService;

    @GetMapping("/insertions")
    //@PreAuthorize("hasAnyRole('user','admin')")
    public ResponseEntity<Page<BasicInsertionDto>> all(@RequestParam("page") int page){
        return ResponseEntity.ok(basicInsertionService.getAllPaged(page));
    }

    @PostMapping("/insertions")
    //@PreAuthorize("hasAnyRole('user','admin')")
    public ResponseEntity<BasicInsertionDto> addInsertion(@RequestBody @Valid BasicInsertionDto basicInsertionDto) {
        return ResponseEntity.ok(basicInsertionService.saveDto(basicInsertionDto));
    }

    @GetMapping("/insertions/{id}")
    //@PreAuthorize("hasAnyRole('user','admin')")
    public ResponseEntity<BasicInsertionDto> getInsertionById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(basicInsertionService.getInsertionById(id));
    }

    @GetMapping("/insertions/user/{idUser}/{page}")
    //@PreAuthorize("permitAll()")//hasAnyRole('user','admin')
    public ResponseEntity<Page<BasicInsertionDto>> getInsertionByUserId(@PathVariable("idUser") Long id, @PathVariable("page") int page){

        System.out.println(page);

        return ResponseEntity.ok(basicInsertionService.findAllByUser(id, page));
    }

    @DeleteMapping("/insertions/{id}")
    //@PreAuthorize("hasAnyRole('user','admin')")
    public ResponseEntity<Void> deleteInsertionById(@PathVariable("id") Long id) {
        basicInsertionService.deleteBasicInsertionById(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/insertions/{UserId}")
    //@PreAuthorize("hasAnyRole('user','admin')")
    public ResponseEntity<Void> deleteAllInsertionByUserId(@RequestParam("UserId") Long userId) {
        basicInsertionService.deleteBasicInsertionById(userId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/insertions/title/{title}/{page}")
    //@PreAuthorize("hasAnyRole('user','admin')")
    public ResponseEntity<Page<BasicInsertionDto>> getByTitle(@PathVariable("title") String title, @PathVariable("page") int page){
         return ResponseEntity.ok(basicInsertionService.getAllByTitleStartWith(title,page));
    }

    @GetMapping("/insertions/brand/{brand}/{page}")
    //@PreAuthorize("hasAnyRole('user','admin')")
    public ResponseEntity<Page<BasicInsertionDto>> getByBrand(@PathVariable("brand") Brand brand, @PathVariable("page") int page){
        return ResponseEntity.ok(basicInsertionService.getByBrand(brand,page));
    }

    @GetMapping("/insertions/category/{category}/{page}")
    //@PreAuthorize("hasAnyRole('user','admin')")
    public ResponseEntity<Page<BasicInsertionDto>> getByCategory(@PathVariable("category") Category category, @PathVariable("page") int page){
        return ResponseEntity.ok(basicInsertionService.getByCategory(category,page));
    }

    @PutMapping("/insertions/{InsertionId}")
    public ResponseEntity<Boolean> modifyInsertionById(@PathVariable("InsertionId") Long insertionId, String title, Float price, String description){
        return ResponseEntity.ok(basicInsertionService.modifyById(insertionId,title,price,description));
    }

}
