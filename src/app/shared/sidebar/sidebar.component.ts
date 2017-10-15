import {Component} from '@angular/core'
@Component({
    selector: 'pm-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SideBarComponent{
    items: string[] = ['Home','Blogs','About Me','Contact Me'];
}