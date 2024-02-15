import { ComponentPropsWithoutRef, ElementRef, JSX, forwardRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Logo, LogoutIcon, NoNamePersonIcon } from '@/assets'
import { Routes } from '@/common'
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownItemWithIcon,
  HeaderInfo,
  Typography,
} from '@/components'
import cn from 'classnames'

import s from './header.module.scss'

type Props = {
  avatar?: null | string
  className?: string
  email?: string
  isDisabled: boolean
  isLoggedIn: boolean
  logout: () => void
  name?: string
} & ComponentPropsWithoutRef<'div'>

export const Header = forwardRef<ElementRef<'div'>, Props>(
  (
    {
      avatar = 'avatar',
      className,
      email = 'email',
      isDisabled,
      isLoggedIn,
      logout,
      name = 'name',
    },
    ref
  ): JSX.Element => {
    const classNames = {
      dropdownItemWrapper: s.dropdownItemWrapper,
      headerContainer: s.headerContainer,
      logo: s.logo,
      profileInfoWrapper: s.profileInfoWrapper,
      root: cn(s.root, className),
      userName: s.userName,
    }

    const navigate = useNavigate()

    const onProfile = () => {
      navigate(Routes.PersonalInformation)
    }

    return (
      <header className={classNames.root} ref={ref}>
        <div className={classNames.headerContainer}>
          <Button as={Link} to={Routes.Main} variant={'link'}>
            <Logo className={classNames.logo} />
          </Button>
          {isLoggedIn && (
            <div className={classNames.profileInfoWrapper}>
              <Typography.Subtitle1 className={classNames.userName}>{name}</Typography.Subtitle1>
              <Dropdown trigger={<Avatar image={avatar ?? ''} size={'small'} userName={name} />}>
                <DropdownItem className={classNames.dropdownItemWrapper}>
                  <HeaderInfo avatar={avatar ?? ''} email={email} name={name} />
                </DropdownItem>

                <DropdownItemWithIcon
                  icon={<NoNamePersonIcon size={1} />}
                  onSelect={onProfile}
                  text={'My Profile'}
                />
                <DropdownItemWithIcon
                  disabled={isDisabled}
                  icon={<LogoutIcon size={1} />}
                  onSelect={logout}
                  text={'Logout'}
                />
              </Dropdown>
            </div>
          )}
          {!isLoggedIn && (
            <Button as={Link} to={Routes.SignIn}>
              Sign In
            </Button>
          )}
        </div>
      </header>
    )
  }
)
