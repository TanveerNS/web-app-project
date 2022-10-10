import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName = "Hilton Hotel";
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 10,
    availableRooms: 10,
    bookedRooms: 5,
  }
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  toggle(){
    this.hideRooms = !this.hideRooms;
  }
  
}
