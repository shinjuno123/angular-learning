import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:"app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
    collapsed = true;
    @Output() pageChangeEvent = new EventEmitter<string>();

    onChangePage(event){
        this.pageChangeEvent.emit(event.target.innerText);
    }
}