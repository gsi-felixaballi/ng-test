import {Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import * as go from 'gojs';


const $ = go.GraphObject.make;

@Component({
  selector: 'app-network-node',
  templateUrl: './network-node.component.html',
  styleUrls: ['./network-node.component.scss']
})
export class NetworkNodeComponent implements OnInit, OnChanges {
  private diagram: go.Diagram = new go.Diagram();

  @ViewChild('diagramDiv')
  private diagramRef: ElementRef;

  @Input() node_data: any[];
  @Input() link_data: any[];

  @Output()
  nodeSelected = new EventEmitter<go.Node | null>();

  @Output()
  modelChanged = new EventEmitter<go.ChangedEvent>();

  constructor() {
    this.buildGraph();
  }

  buildGraph() {
    this.diagram = new go.Diagram();
    this.diagram.initialContentAlignment = go.Spot.Center;
    this.diagram.undoManager.isEnabled = true;

    this.diagram.nodeTemplate =
      $(go.Node, 'Vertical',
        $(go.Panel, 'Auto',
          {background: 'white', width: 80},
          {portId: ''},  // this whole panel acts as the only port for the node
          $(go.Shape,  // the border
            {fill: 'transparent', stroke: 'lightgray'}),
          $(go.Panel, 'Vertical', // everything within the border
            $(go.Panel, 'Horizontal',  // the row of status indicators
              {
                alignment: go.Spot.Right
              },
              this.makeStatusIndicator('status')
            ),  // end Horizontal Panel
            $(go.Picture,
              {width: 45, height: 45, margin: 4},
              new go.Binding('source', 'icon')),
            $(go.TextBlock,
              {
                stretch: go.GraphObject.Horizontal,
                textAlign: 'center',
                width: 80,
                height: 20,
                verticalAlignment: go.Spot.Center,
                stroke: '#ffffff'
              },
              new go.Binding('text', 'ip'),
              new go.Binding('background', 'color'))
          )  // end Vertical Panel
        ),  // end Auto Panel
        $(go.TextBlock,
          {margin: 4},
          new go.Binding('text')),
        {
          selectionAdornmentTemplate:
            $(go.Adornment, 'Auto',
              $(go.Shape, 'RoundedRectangle',
                {fill: null, stroke: 'dodgerblue', strokeWidth: 0.5}),
              $(go.Placeholder)
            )  // end Adornment
        }
      );

    this.diagram.linkTemplate =
      $(go.Link,
        // allow relinking
        {relinkableFrom: false, relinkableTo: false},
        $(go.Shape),
        $(go.Shape, {toArrow: 'OpenTriangle'})
      );
  }

  makeStatusIndicator = (propName) => {
    return $(go.Shape,
      'Circle',
      {width: 8, height: 8, fill: 'white', strokeWidth: 0, margin: 5},
      new go.Binding('fill', propName));
  };

  ngOnInit() {
    this.diagram.div = this.diagramRef.nativeElement;
  }

  ngOnChanges() {
    this.diagram.model = new go.GraphLinksModel(this.node_data, this.link_data);
  }

}
