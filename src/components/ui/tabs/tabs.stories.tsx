import { useState } from 'react'

import { Typography } from '@/components'
import { Tab } from '@/components/ui/tabs/tab'
import { TabsSwitcher, TabsSwitcherProps } from '@/components/ui/tabs/tabs'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TabsSwitcher> = {
  component: TabsSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabsSwitcher',
}

export default meta
type Story = StoryObj<typeof meta>

const TabsWrapper = (props: TabsSwitcherProps) => {
  const [activeTab, setActiveTab] = useState(props.value)

  const changeActiveTab = (tabValue: string) => {
    setActiveTab(tabValue)
  }

  return (
    <TabsSwitcher label={props.label} onValueChange={changeActiveTab} value={activeTab}>
      {props.children}
    </TabsSwitcher>
  )
}

export const Default: Story = {
  args: {
    children: (
      <>
        <Tab value={'1'}>
          <Typography.Body1>Switcher</Typography.Body1>
        </Tab>
        <Tab disabled value={'2'}>
          <Typography.Body1>Switcher</Typography.Body1>
        </Tab>
        <Tab value={'3'}>
          <Typography.Body1>Switcher</Typography.Body1>
        </Tab>
      </>
    ),
    label: 'label',
    value: '1',
  },
  render: ({ children, ...restArgs }) => <TabsWrapper {...restArgs}>{children}</TabsWrapper>,
}
