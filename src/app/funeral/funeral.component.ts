import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funeral',
  templateUrl: './funeral.component.html',
  styleUrls: ['./funeral.component.scss']
})
export class FuneralComponent implements OnInit {
  imagePathFuneral: any = '../assets/img/exemple-ou-example.png';

  constructor() { }

  ngOnInit() {
  }

}
