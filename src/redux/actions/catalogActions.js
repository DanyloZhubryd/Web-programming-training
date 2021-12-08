import { actionsTypes } from "../constants/actionsTypes";

export const setCatalogItems = (items) => {
  return {
    type: actionsTypes.SET_CATALOG_ITEMS,
    items: items,
  };
};