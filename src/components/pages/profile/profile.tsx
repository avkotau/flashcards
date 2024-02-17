import { EditProfileValues, PersonalInformation } from '@/components'
import { BaseResponse, useMeQuery, useUpdateProfileMutation } from '@/services'

export const Profile = () => {
  const { data } = useMeQuery()
  const [updateProfile] = useUpdateProfileMutation()
  const onSubmit = async (data: EditProfileValues) => {
    const form = new FormData()

    Object.keys(data).forEach(key => {
      form.append(key, data[key as keyof EditProfileValues])
    })

    try {
      await updateProfile(form).unwrap()
    } catch (error) {
      console.error('Error when updating profile:', error)
    }
  }

  return (
    <>
      <PersonalInformation data={data as BaseResponse} update={onSubmit} />
    </>
  )
}
