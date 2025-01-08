import { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import LinkList from "@kiwicom/orbit-components/lib/LinkList"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Separator from "@kiwicom/orbit-components/lib/Separator"

import LanguageLink from "../LanguageLink"
import { Language } from "../../types"
import { useLanguage } from "../../services/context/LanguageContext"

type SidebarContentPartProps = {
  title: string
  children: ReactNode
}
const SidebarContentPart = ({ title, children }: SidebarContentPartProps): ReactNode => (
  <>
    <Separator />
    <Stack>
      <Heading type="title5">{title}</Heading>
      <LinkList indent spacing="none">
        {children}
      </LinkList>
    </Stack>
  </>
)

type Props = {
  closeSidebar: () => void
}

const SidebarContent = ({ closeSidebar }: Props): ReactNode => {
  const { t } = useTranslation()
  const { setLanguage } = useLanguage()

  const handleChangeLanguage = (language: Language) => {
    setLanguage(language)
    closeSidebar()
  }

  return (
    <Stack dataTest="SidebarContent">
      <SidebarContentPart title={t("sidebar.title.language")}>
        {Object.values(Language).map(lang => (
          <LanguageLink key={lang} language={lang} onClick={() => handleChangeLanguage(lang)} />
        ))}
      </SidebarContentPart>
    </Stack>
  )
}

export default SidebarContent
