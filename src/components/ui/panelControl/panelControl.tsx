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
  onChangeTabValue: (tabValue: string) => void
  onChangeValueInput: (value: string) => void
  onClearFilter: () => void
  sliderData: number[]
  sliderTitle: string
  tabLabel: string
  tabValue: string
}

export const PanelControl = ({
  inputValue,
  maxSliderValue,
  minSliderValue,
  onChangeSliderValue,
  onChangeTabValue,
  onChangeValueInput,
  onClearFilter,
  sliderData,
  sliderTitle,
  tabLabel,
  tabValue,
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
        onChangeValue={onChangeValueInput}
        placeholder={'Input search'}
        rightIcon={<CrossIcon />}
        type={'text'}
        value={inputValue}
        variant={'default'}
      />
      <TabsSwitcher
        className={classNames.tabsSwitcher}
        label={tabLabel}
        onValueChange={onChangeTabValue}
        value={tabValue}
      >
        <Tab value={'my'}>
          <Typography.Body1>My Cards</Typography.Body1>
        </Tab>
        <Tab value={'all'}>
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
