
import { Component } from "@angular/core";

@Component({
  selector: 'child-selector',
  templateUrl: './child.component.html',
})
export class ChildComponent{
SayHello(){
    alert("Hello");
}
SayWelcome(){
    alert("Welcome");
}
}