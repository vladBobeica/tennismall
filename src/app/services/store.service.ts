import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

const STORE_BASE_URL = "http://localhost:8000/api/v1";

type Category = {
  id: number;
  name: string;
  created_at?: string;
  updated_at?: string;
};

@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(
    limit = "12",
    sort = "desc",
    category?: Category
  ): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/products${
        category ? "?categoryId=" + category.id : ""
      }`
    );
  }

  getAllCategories() {
    return this.httpClient.get<{ categories: Array<Category> }>(
      `${STORE_BASE_URL}/categories`
    );
  }
}
