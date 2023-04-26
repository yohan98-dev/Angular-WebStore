import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "filers.component.html",
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();
  categories = ["gents", "ladies", "Sports"];

  constructor() {}

  ngOnInit(): void {}

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
