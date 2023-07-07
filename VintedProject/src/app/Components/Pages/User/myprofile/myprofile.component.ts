import {Component, Input} from '@angular/core';
import {UserDto} from "../../../../Model/userDto";
import {PageBasicInsertionDto} from "../../../../Model/pageBasicInsertionDto";
import {InsertionService} from "../../../../service/insertion.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../service/user.service";
import {switchMap} from "rxjs";
import {BasicInsertionDto} from "../../../../Model/basicInsertionDto";
import {ImageService} from "../../../../service/image.service";

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {

  @Input() user: UserDto | undefined;
  userInsertion: PageBasicInsertionDto | undefined;
  page= 0

  id: number | undefined;
  modalOpen = false;
  modalImage: string | undefined;

  constructor(
    private insertionService: InsertionService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}


  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params) => {
        this.id = Number(params.get('userid'));
        return this.userService.getUserById(this.id);
      })
    ).subscribe(
      (user: UserDto) => {
        this.user = user;
        console.log(this.user)
        this.userService.getAllInsertionsByUser(this.id, this.page).subscribe(
          (data: PageBasicInsertionDto) => {
            this.userInsertion = data;
            console.log(data)
            //this.processImages(data.content);
          },
          (error) => {
            console.log('Si è verificato un errore durante il recupero delle altre inserzioni dell\'utente:', error);
          }
        );
      },
      (error) => {
        console.log('Si è verificato un errore durante il recupero dell\'utente:', error);
      }
    );
  }

  /*
    loadmore() {
      this.page += 1;
      this.userService.getAllInsertionsByUser(this.id,this.page).subscribe((insertions: PageBasicInsertionDto) => {
        // Aggiungo nuovi prodotti alla lista esistente invece di sostituirla
        this.userInsertion?.content?.push(...insertions.content);
        this.processImages(insertions.content);

      });
    }
  */
  processImages(insertions: BasicInsertionDto[]): void {
    insertions.forEach(async (insertion: BasicInsertionDto) => {
      insertion.imagePath = await ImageService.setProductImageSrc(insertion.image);
    });
  }




}
