import { CrossIcon, DeleteIcon, SearchIcon } from '@/assets'
import { Button, InputFactory, Slider, Typography } from '@/components'
import { TabsSwitcher } from '@/components/ui/tabs'
import { Tab } from '@/components/ui/tabs/tab'
import cn from 'classnames'

import s from './panelControl.module.scss'

export type PanelControlProps = {
  inputValue: string
  maxSliderValue: number
  minSliderValue: number
  onChangeSliderValue: (value: number[]) => void
  onChangeValueInput: (value: string) => void
  onClearFilter: () => void
  sliderData: number[]
  sliderTitle: string
  tabLabel: string
}

export const PanelControl = ({
  inputValue,
  maxSliderValue,
  minSliderValue,
  onChangeSliderValue,
  onChangeValueInput,
  onClearFilter,
  sliderData,
  sliderTitle,
  tabLabel,
}: PanelControlProps) => {
  const classNames = {
    button: cn(s.button),
    containerStyle: cn(s.containerStyle),
    slider: cn(s.slider),
    tabsSwitcher: cn(s.tabsSwitcher),
    wrapper: cn(s.wrapper),
  }

  return (
    <div className={classNames.wrapper}>
      <InputFactory
        containerStyle={classNames.containerStyle}
        leftIcon={<SearchIcon />}
        onChangeValueInput={onChangeValueInput}
        placeholder={'Input search'}
        rightIcon={<CrossIcon />}
        type={'text'}
        value={inputValue}
        variant={'default'}
      />
      <TabsSwitcher className={classNames.tabsSwitcher} label={tabLabel}>
        <Tab value={'myCards'}>
          <Typography.Body1>My Cards</Typography.Body1>
        </Tab>
        <Tab value={'allCards'}>
          <Typography.Body1>All Cards</Typography.Body1>
        </Tab>
      </TabsSwitcher>
      <Slider
        className={classNames.slider}
        max={maxSliderValue}
        min={minSliderValue}
        onValueChange={onChangeSliderValue}
        step={1}
        title={sliderTitle}
        value={sliderData}
      />
      <Button
        className={classNames.button}
        icon={<DeleteIcon />}
        onClick={onClearFilter}
        variant={'secondary'}
      >
        Clear Filter
      </Button>
    </div>
  )
}
