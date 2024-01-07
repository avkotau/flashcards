import { JSX } from 'react'
import { useNavigate } from 'react-router-dom'

import { DeleteIcon, EditIcon, PlayIcon } from '@/assets'
import { EditDeckToModal, IconButton, useDeleteDeckMutation } from '@/components'
import { DeleteDeckToModal } from '@/components/ui/deck/deleteDeckToModal'
import { useMeQuery } from '@/services/authApi'
import { GetDecksResponseItems } from '@/services/flashCards.type'

type Props = {
  deck: GetDecksResponseItems
}
export const DecksIcons = ({ deck }: Props): JSX.Element => {
  const { author, cover, id, isPrivate, name } = deck
  const { data: user } = useMeQuery()

  const [deleteDeck] = useDeleteDeckMutation()

  const navigate = useNavigate()

  const deleteCallback = () => {
    deleteDeck({ id })
  }

  const learnCallback = () => {
    navigate(`${id}/learn`)
  }

  return (
    <>
      <IconButton icon={<PlayIcon />} onClick={learnCallback} />
      {user?.id === author?.id && (
        <>
          <EditDeckToModal
            id={id}
            isOpenModalBtn={<IconButton icon={<EditIcon />} />}
            title={'Edit Deck'}
            valueBtn={'Save Changes'}
            values={{ cover, isPrivate, name }}
          />
          <DeleteDeckToModal
            entityName={'deckName'}
            isOpenModalBtn={<IconButton icon={<DeleteIcon />} />}
            onClick={deleteCallback}
            title={'Delete Deck'}
            value={'Delete Deck'}
            valueBtn={'Delete Deck'}
          />
        </>
      )}
    </>
  )
}
