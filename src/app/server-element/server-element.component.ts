import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    // console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges called');
    // console.log(changes);
  }

  ngOnInit() {
    // console.log('ngOnInit called');
    // console.log('Text content', this.header.nativeElement.textContent);
    // console.log('paragraph content', this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    // console.log('Do check!');
  }

  ngAfterContentInit() {
    // console.log('NgAfterContentInit called');
    // console.log('paragraph content', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit called');
    // console.log('Text content', this.header.nativeElement.textContent);
    // console.log('paragraph content', this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked called');
  }

}
