import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  // event emmit to parent component to close the modal
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) { }

  // move modal be the direct child of body
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  // ModalComponent is a child component of the 
  // ContactMainComponent, it will also get destroyed if leaving contact page
  // The ngOnDestroy() component is called before the component is destroyed.
  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  closeModal() {
    this.close.emit();
  }
}
