import {Component, Input, OnInit} from '@angular/core';
import {InsertionService} from "../../service/insertion.service";
import {PageBasicInsertionDto} from "../../Model/pageBasicInsertionDto";
import {UserDto} from "../../Model/userDto";
import {UserService} from "../../service/user.service";



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  users: UserDto[] = [];
  mostRequested!: PageBasicInsertionDto;
  feed: PageBasicInsertionDto | undefined;
  page = 0;

  constructor(
    private insertionService: InsertionService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.insertionService.all4(this.page).subscribe(
      (insertions: PageBasicInsertionDto) => {
        this.mostRequested = {
          ...insertions,
          content: insertions.content?.slice(0, 6),
        };
        // Extract all unique user IDs from the insertions
        const userIds = this.mostRequested.content?.map((insertion) => insertion.userId).filter((id, index, array) => array.indexOf(id) === index);

        if (userIds) {
          // Fetch all users by their IDs and store them in the users array
          userIds.forEach((userId) => {
            this.userService.getById(userId).subscribe((user: UserDto) => {
              this.users.push(user);
            });
          });
        }


        this.insertionService.all4(this.page).subscribe(
          (insertions: PageBasicInsertionDto) => {
            this.feed = {
              ...insertions,
              content: insertions.content?.slice(0, 6),
            };
          }
        );
      }
    );
  }

  getUserByUserId(userId: number): UserDto  {
    return <UserDto>this.users.find(user => user.id === userId);
  }
}

