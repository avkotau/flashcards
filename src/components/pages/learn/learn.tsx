import { JSX } from 'react'

import { GoBack } from '@/components'
import { LearnCard } from '@/features'

export const Learn = (): JSX.Element => {
  return (
    <div>
      <GoBack title={'Back to Decks List'} />
      <LearnCard />
    </div>
  )
}
