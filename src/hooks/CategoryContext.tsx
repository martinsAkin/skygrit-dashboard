// to prevent admin from creating same sub-category more than once
import { createContext, useContext } from "react";

export const CategoryContext = createContext<{ categories: any[] }>({
 categories: [],
});
export const useCategoryContext = () => useContext(CategoryContext);
