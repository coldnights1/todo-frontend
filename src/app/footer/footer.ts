import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  @Output() output=new EventEmitter<void>();
  onClick(){
    this.output.emit();
  }
}
