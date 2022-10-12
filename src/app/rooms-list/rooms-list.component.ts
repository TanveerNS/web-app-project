import { Component, Input, OnInit } from '@angular/core';
import { RoomLists } from '../rooms/rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomLists[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
