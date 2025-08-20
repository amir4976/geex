// فایل/پوشه داخل کتگوری
export type FileItem = {
  id: string;
  type: "file" | "folder";
  name: string;
  ext?: string;
  mimeType?: string;
  sizeBytes?: number;
  sizeDisplay?: string;
  modifiedAt: string;
  owner: string;
  starred?: boolean;
  shared?: boolean;
  color?:string;
  itemsCount?: {
    folders: number;
    files: number;
  };
};

// کتگوری
export type Category = {
  id: string;
  label: string;
  icon: string;
  items: FileItem[];
};

// دیتا اصلی که توی testData می‌ذاری
export type FilesDataType = {
  categories: Category[];
  meta: {
    title: string;
    breadcrumbs: string[];
    pagination: {
      page: number;
      perPage: number;
      totalCategories: number;
    };
  };
};
