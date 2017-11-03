import { Component, ViewChild } from "@angular/core";
import {  ChildComponent } from "../child/child.component";

@Component({
  selector: 'parent-selector',
  templateUrl: './parent.component.html',
})
export class ParentComponent{

        @ViewChild (ChildComponent)
        private childComponent: ChildComponent;
        login(){
        this.childComponent.SayHello();
        }
        logout(){
        this.childComponent.SayWelcome();
        }
}
