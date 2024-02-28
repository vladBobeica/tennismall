import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  cols = 3;
  category: string | undefined;

  onColumnsCountChange(colNum: number): void {
    this.cols = colNum;
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
