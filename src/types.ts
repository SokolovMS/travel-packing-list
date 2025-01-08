export enum ListCategory {
  ESSENTIALS = "essentials",
  ELECTRONICS = "electronics",
  CLOTHES = "clothes",
  HYGIENE_CARE = "hygiene_care",
  OTHER = "other",
}

export enum Language {
  ENGLISH = "en",
  RUSSIAN = "ru",
  SPANISH = "es",
  SLOVENIAN = "si",
}

export enum EditMode {
  DEFAULT = "default",
  OPEN_SETTINGS = "openSettings",
  REMOVE_ITEMS = "removeItems",
  ADD_ITEM = "addItem",
}

type LanguageData = {
  value: Language
  flagCode: "es" | "ru" | "si" | "gb"
  title: "English" | "Русский" | "Español" | "Slovenščina"
}

export type LanguagesData = Record<Language, LanguageData>

export type CardItem = {
  tKey: string
  isChecked: boolean
}

export type CardItems = CardItem[]
