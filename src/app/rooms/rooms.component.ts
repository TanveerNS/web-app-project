import { Component, OnInit } from '@angular/core';
import { Room, RoomLists } from './rooms';

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

  roomList: RoomLists[] = []
  
  constructor() {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Rome',
        amenties: "Air conditioner, free Wi-fi, Tv, Bathroom, Kitchen",
        price: 500,
        photos: 'https://www.google.com',
        checkinTime: new Date('7-Sept-2022'),
        checkoutTime: new Date('8-Sept-2022'),
        rating:4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Rome',
        amenties: "Air conditioner, free Wi-fi, Tv, Bathroom, Kitchen",
        price: 1100,
        photos: 'https://www.google.com',
        checkinTime: new Date('7-Sept-2022'),
        checkoutTime: new Date('8-Sept-2022'),
        rating: 3.45654,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenties: "Air conditioner, free Wi-fi, Tv, Bathroom, Kitchen",
        price: 1500,
        photos: 'https://www.google.com',
        checkinTime: new Date('7-Sept-2022'),
        checkoutTime: new Date('8-Sept-2022'),
        rating: 2.6,
      }
    ]
    
   }
  
  ngOnInit(): void {
  }
  
  toggle(){
    this.hideRooms = !this.hideRooms;
  }
  
}
