import { Component, OnInit, Input } from '@angular/core';
import { RoomResult } from '../../models/roomresult';

@Component({
  selector: 'app-resultscontainer',
  templateUrl: './resultscontainer.component.html',
  styleUrls: ['./resultscontainer.component.sass']
})
export class ResultscontainerComponent implements OnInit {
@Input() results:RoomResult
  constructor() { }

  ngOnInit(): void {
  }

}
