import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormControlDirective } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  templateUrl: 'input-box.component.html',
  styleUrls: ['input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  @Input() private inFormControl: FormControl;
  @Input() private labelCssClass: string;
  @Input() private label: string = 'Value:';
  @Input() private placeHolder: string;
  @Input() private type: string;
  @ViewChild("box") private box: ElementRef;
  private labelDefaultCssClass: string = 'app-input-box-label';

  constructor() {}

  ngOnInit() {
    this.setType();
    this.setPlaceHolder();
  }
  /* Private methods */
  private setPlaceHolder() : void {
    if (!this.placeHolder) {
      this.placeHolder = 'Insert ' +
        this.label.toLocaleLowerCase()
          .substr(0, this.label.length - 1);
    }
    let inputElm: HTMLElement = this.box.nativeElement;
    if (!inputElm.getAttribute('value')) {
      inputElm.setAttribute("placeholder", this.placeHolder);
    }
  }
  private setType() : void {
    if (!this.type) {
      if (this.label.toLocaleLowerCase().includes('password')) {
        this.type = 'password';
      }
      else {
        this.type = 'text';
      }
    }
  }
  /* Public methods */
  public hasError(reference: FormControlDirective) : boolean {
    return (reference.control && !reference.control.valid &&
      !reference.control.pristine);
  }
  public hasSuccess(reference: FormControlDirective) : boolean {
    return (reference.control && reference.control.valid &&
      !reference.control.pristine);
  }
}
