// @flow
import React from "react"
import { useTranslation } from "react-i18next"
import Button from "@kiwicom/orbit-components/lib/Button"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import { Remove, Replace, Settings } from "@kiwicom/orbit-components/lib/icons"
import Popover from "@kiwicom/orbit-components/lib/Popover"

type Props = {|
  translatedCategory: string,
  togglePopover: () => void,
  handleShowDelete: () => void,
  handleResetCard: () => void,
  isSettingsOpened: boolean,
|}

const SettingsPopover = ({
  translatedCategory,
  togglePopover,
  handleShowDelete,
  handleResetCard,
  isSettingsOpened,
}: Props): React$Node => {
  const { t } = useTranslation()

  return (
    <Popover
      content={
        <Stack direction="column" spacing="medium">
          <Heading type="title4" as="h3">
            {t("title.settings_list", { category: translatedCategory })}
          </Heading>
          <Button
            type="secondary"
            iconLeft={<Remove ariaHidden />}
            size="small"
            onClick={handleShowDelete}
            fullWidth
          >
            {t("button.remove_items")}
          </Button>
          <Button
            type="criticalSubtle"
            iconLeft={<Replace ariaHidden />}
            size="small"
            onClick={handleResetCard}
            fullWidth
          >
            {t("button.reset_list")}
          </Button>
        </Stack>
      }
      opened={isSettingsOpened}
      onClose={togglePopover}
      width="250px"
    >
      <Button
        size="small"
        type="secondary"
        iconLeft={<Settings ariaHidden />}
        title={t("title.settings_list", { category: translatedCategory })}
        onClick={togglePopover}
      />
    </Popover>
  )
}

export default SettingsPopover
