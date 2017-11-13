import {
  Component,
  OnInit,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { AboutModalConfig } from '../about-modal-config';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'about-modal-example',
  templateUrl: './about-modal-example.component.html'
})
export class AboutModalExampleComponent implements OnInit {

  aboutConfig: AboutModalConfig;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.aboutConfig = {
      additionalInfo: 'Donec consequat dignissim neque, sed suscipit quam egestas in. Fusce bibendum ' +
      'laoreet lectus commodo interdum. Vestibulum odio ipsum, tristique et ante vel, iaculis placerat nulla. ' +
      'Suspendisse iaculis urna feugiat lorem semper, ut iaculis risus tempus.',
      copyright: 'Trademark and Copyright Information',
      imgAlt: 'Patternfly Symbol',
      imgSrc: '',
      title: 'Product Title',
      productInfo: [
        { name: 'Version', value: '1.0.0.0.20160819142038_51be77c' },
        { name: 'Server Name', value: 'Localhost' },
        { name: 'User Name', value: 'admin' },
        { name: 'User Role', value: 'Administrator' }]
    } as AboutModalConfig;
  }

  openModal(template: TemplateRef<any>): void {
    this.aboutConfig.isOpen = true;
    this.modalRef = this.modalService.show(template);
  }

  closeModal($event): void {
    this.modalRef.hide();
    this.aboutConfig.isOpen = false;
  }
}
