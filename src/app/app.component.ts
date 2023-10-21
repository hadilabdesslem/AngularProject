import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-project';

  nom:string ='Hadil Abdesslem';
age:number =23;
adresse:string ='chez moi ou autre part :)';
getName(){
  return this.nom;
}
modifier(newName:string){
this.nom=newName;
}
}
