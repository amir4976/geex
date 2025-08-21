import { FilesDataType } from "./types";

export const FilesData: FilesDataType[] = [
  {
    categories: [
      {
        id: "images",
        label: "تصاویر",
        icon: "image",
        items: [
          {
            id: "img_001",
            type: "file",
            name: "dont-forget-to-wash-hand.jpeg",
            ext: ".jpeg",
            mimeType: "image/jpeg",
            sizeBytes: 24476000,
            sizeDisplay: "24.48 Mb",
            modifiedAt: "2021-12-24T09:24:00Z",
            owner: "amir",
            starred: false,
            shared: false,
          },
        ],
      },
      {
        id: "video",
        label: "ویدیو",
        icon: "video",
        items: [
          {
            id: "vid_001",
            type: "file",
            name: "take-a-look-my-garden.mp4",
            ext: ".mp4",
            mimeType: "video/mp4",
            sizeBytes: 160620000,
            sizeDisplay: "153.2 Mb",
            modifiedAt: "2025-08-17T10:15:00Z",
            owner: "amir",
            starred: false,
            shared: false,
          },
        ],
      },
      {
        id: "music",
        label: "موزیک",
        icon: "music",
        items: [
          {
            id: "aud_001",
            type: "file",
            name: "audio-longman-englishlesson1.mp3",
            ext: ".mp3",
            mimeType: "audio/mpeg",
            sizeBytes: 33700000,
            sizeDisplay: "32.1 Mb",
            modifiedAt: "2021-12-27T04:56:00Z",
            owner: "amir",
            starred: false,
            shared: false,
          },
        ],
      },
      {
        id: "documents",
        label: "سندها",
        icon: "Documents",
        items: [
          {
            id: "pdf_001",
            type: "file",
            name: "introduction-geex-mobile.pdf",
            ext: ".pdf",
            mimeType: "application/pdf",
            sizeBytes: 2450000,
            sizeDisplay: "2.45 Mb",
            modifiedAt: "2021-12-24T09:24:00Z",
            owner: "team",
            starred: true,
            shared: true,
          },
        ],
      },
      {
        id: "folders",
        label: "پوشه‌ها",
        icon: "folder",
        items: [
          {
            id: "fld_001",
            type: "folder",
            name: "geex-main-proposal-documents",
            itemsCount: { folders: 24, files: 246 },
            color: "#A78BFA",
            modifiedAt: "2025-08-19T18:00:00Z",
            owner: "team",
            starred: false,
            shared: true,
          },
        ],
      },
    ],
    meta: {
      title: "کتابخانه",
      breadcrumbs: ["ذخیره‌سازی", "درایو A", "کتابخانه"],
      pagination: {
        page: 1,
        perPage: 10,
        totalCategories: 6,
      },
    },
  },
];
