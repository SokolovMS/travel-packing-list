import { useTranslation } from "react-i18next"

import { ListCategory } from "../../types"

const useTranslatedCategory = (category: ListCategory): string => {
  const { t } = useTranslation()

  switch (category) {
    case ListCategory.ESSENTIALS:
      return t("category.essentials")
    case ListCategory.ELECTRONICS:
      return t("category.electronics")
    case ListCategory.HYGIENE_CARE:
      return t("category.hygiene_care")
    case ListCategory.OTHER:
      return t("category.other")
    case ListCategory.CLOTHES:
    default:
      return t("category.clothes")
  }
}

export default useTranslatedCategory
