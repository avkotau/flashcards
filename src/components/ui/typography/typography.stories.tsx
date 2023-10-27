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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography.H1>H1</Typography.H1>
      <Typography.H2>H2</Typography.H2>
      <Typography.H3>H3</Typography.H3>

      <Typography.Large>Large</Typography.Large>

      <Typography.Body1>Body1</Typography.Body1>
      <Typography.Body2>Body2</Typography.Body2>
      <Typography.Caption>Caption</Typography.Caption>

      <Typography.Link1>Link1</Typography.Link1>
      <Typography.Link2>Link2</Typography.Link2>
      <Typography.Overline>Overline</Typography.Overline>

      <Typography.Subtitle1>Subtitle1</Typography.Subtitle1>
      <Typography.Subtitle2>Subtitle2</Typography.Subtitle2>
    </div>
  ),
}
