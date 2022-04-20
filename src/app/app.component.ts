import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Modeler from 'bpmn-js/lib/Modeler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild("bpmnContainer") bpmnContainer: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const mdlr = new Modeler({
      container: this.bpmnContainer.nativeElement,
    });

    mdlr.createDiagram().then(() => console.log("###### LOADED!!! ######"));
  }

}
