import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { PanelControl, PanelControlProps } from './panelControl'

const meta = {
  component: PanelControl,
  tags: ['autodocs'],
  title: 'Components/PanelControl',
} satisfies Meta<typeof PanelControl>

export default meta

type Story = StoryObj<typeof PanelControl>

const PanelControlStory = (props: PanelControlProps) => {
  const [inputValue, setValue] = useState(props.inputValue)
  const [sliderData, setSliderData] = useState(props.sliderData)
  const [tabValueData, settabValueData] = useState('all')

  const onClearFilter = () => {
    setValue('')
    setSliderData(props.sliderData)
    settabValueData('all')
  }

  const onChangeTabValue = () => {
    const newTabValue = tabValueData === 'all' ? 'my' : 'all'

    settabValueData(newTabValue)
  }

  return (
    <PanelControl
      inputValue={inputValue}
      maxSliderValue={props.maxSliderValue}
      minSliderValue={props.minSliderValue}
      onChangeSliderValue={setSliderData}
      onChangeTabValue={onChangeTabValue}
      onChangeValueInput={setValue}
      onClearFilter={onClearFilter}
      sliderData={sliderData}
      sliderTitle={props.sliderTitle}
      tabLabel={props.tabLabel}
      tabValue={tabValueData}
    />
  )
}

export const Default: Story = {
  args: {
    inputValue: '',
    maxSliderValue: 15,
    minSliderValue: 1,
    sliderData: [1, 15],
    sliderTitle: 'Number of cards',
    tabLabel: 'Show packs cards',
  },
  render: args => <PanelControlStory {...args} />,
}
