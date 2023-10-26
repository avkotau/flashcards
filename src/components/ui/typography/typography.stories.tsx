import { Meta, StoryObj } from '@storybook/react'

import { CreateTypographyComponent, Typography } from './'

const meta = {
  component: Typography.H1,
  title: 'Components/Typography',
} satisfies Meta<typeof CreateTypographyComponent>

export default meta
type Story = StoryObj<typeof CreateTypographyComponent>

export const AllTypography: Story = {
  render: () => (
    <>
      <Typography.H1>H1</Typography.H1>
      <Typography.H2>H2</Typography.H2>
      <Typography.H3>H3</Typography.H3>
    </>
  ),
}
