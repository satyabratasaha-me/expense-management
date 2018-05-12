import {Component} from '@angular/core'
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{
    items: string[] = ['Home','Blogs','About Me','Contact Me'];
}