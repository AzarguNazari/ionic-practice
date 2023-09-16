import { Component, Input } from '@angular/core';
import {ActionSheetComponent} from "../action-sheet/action-sheet.component";

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
  imports: [
    ActionSheetComponent
  ]
})
export class ExploreContainerComponent {
  @Input() name?: string;
}
