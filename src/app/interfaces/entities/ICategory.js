// ICategory interface
export const ICategory = {
    id: Number,
    name: String,
    description: String,
    status: Boolean
  };
  
  // ICategoryCreate interface
  export const ICategoryCreate = {
    ...ICategory,
    icon: Object
  };
  
  // ICategoryUpdate interface
  export const ICategoryUpdate = {
    icon: Object
  };
  