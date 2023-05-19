import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-bonnus',
  templateUrl: './bonnus.component.html',
  styleUrls: ['./bonnus.component.scss']
})
export class BonnusComponent implements OnInit {
  @Input() quest!:string;
  @Output() reponsefinal=new EventEmitter<number>();
  prix!:number
  constructor() { }

  ngOnInit(): void {
    
  }
  envoireponse(){
    this.reponsefinal.emit(this.prix);
  }

}
