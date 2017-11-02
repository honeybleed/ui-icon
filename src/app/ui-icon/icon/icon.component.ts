import {
  Component, ElementRef, Input, OnChanges, OnInit, Renderer2, RendererStyleFlags2,
  ViewEncapsulation
} from '@angular/core';
import { IconManageService } from '../icon-manage.service';
import { IconItem } from '../icon-item';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'aui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() family: string;
  @Input() icon: string;
  constructor(private _iconManageService: IconManageService, private _elementRef: ElementRef, private _renderer: Renderer2) { }
  findIcon(): IconItem {

    return this._iconManageService.getIcon(this.family, this.icon);
  }
  ngOnInit() {
  }
}
