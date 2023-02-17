export interface ProductObjectType {
  [key: string]: ProductUnitType;
}

export type ReviewType = {
  by: {
    _id: string;
    name: string;
  };
  dateCreated: number;
  lastEdited: number;
  rating: number;
  text: string;
};

export type ProductUnitType = {
  name: string;
  description: string;
  ratings: {
    avg: number;
    posted: ReviewType[];
  };
  tags: string[];
  images?: string[];
  photos_id: string[];
  price: string;
  size: string;
  stock: string;
  __v: number;
  _id: string;
};

export type FilterType = {
  price: number[];
  stock: string[];
  size: number[];
  tags: string[];
};

export type SelectedFilterType = {
  price: number[];
  stock: string;
  size: number[];
  tags: string[];
};
