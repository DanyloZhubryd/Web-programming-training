import { useSelector } from "react-redux";

export const CatalogItemsSelector = () => {
  return useSelector((state) => state.catalogItems.catalogItems);
};