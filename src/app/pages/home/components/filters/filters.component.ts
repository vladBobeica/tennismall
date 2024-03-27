import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { StoreService } from "../../../../services/store.service";
import { Subscription } from "rxjs";
import { Category } from "../../../../models/category.model";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<Category>();
  categoriesSubsription: Subscription | undefined;
  categories: Array<Category> | undefined;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.categoriesSubsription = this.storeService
      .getAllCategories()
      .subscribe(({ categories }) => {
        const categoryNames = categories.map((category) => ({
          id: category.id,
          name: category.name,
        }));

        this.categories = categoryNames;
      });
  }

  onShowCategory(category: Category): void {
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
    if (this.categoriesSubsription) {
      this.categoriesSubsription.unsubscribe();
    }
  }
}
