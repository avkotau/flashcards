import { Typography } from '@/components'

type Props = {
  imageScr: null | string | undefined
  onLoadPic: (data: File) => void
}

export const CardFieldEditor = ({ imageScr }: Props) => {
  const buttonUploadText = imageScr ? 'Change Cover' : ' Add Cover'

  return <Typography.Subtitle2>{buttonUploadText}</Typography.Subtitle2>
}
