import { EditIcon } from '@/assets'
import { IconButton } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

import { EditCard } from './editCard'

const meta = {
  component: EditCard,
  tags: ['autodocs'],
  title: 'Cards/EditCard',
} satisfies Meta<typeof EditCard>

export default meta
type Story = StoryObj<typeof meta>

const card = {
  answer: 'It is functions',
  answerImg: 'no',
  answerVideo: 'no',
  created: new Date().toDateString(),
  deckId: 'ascasca',
  grade: 1,
  id: '1wdwd23dwdw',
  question: 'What is hooks?',
  questionImg: 'no',
  questionVideo: 'no',
  shots: 0,
  updated: new Date().toDateString(),
  userId: 'sdvsdvsdv',
}

export const Default: Story = {
  args: {
    card,
    isOpenModalBtn: <IconButton icon={<EditIcon />} />,
  },
}
