import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Provider Management';
  links = [{name: 'Guaranteed Repair Network', path:'/grn'},
           {name: 'Emergency Mitigation Services', path:'/ems'},
           {name: 'Contents Pricing', path:'/contents'}];
  activeLink = this.links[0];
  background = 'accent';

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }
}
