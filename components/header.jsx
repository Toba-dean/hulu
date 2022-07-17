import Image from "next/image"
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from '@heroicons/react/outline'

import { HeaderIcons } from "./HeaderIcons"

export const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderIcons title='HOME' Icon={HomeIcon} />
        <HeaderIcons title='TRENDING' Icon={LightningBoltIcon} />
        <HeaderIcons title='VERIFIED' Icon={BadgeCheckIcon} />
        <HeaderIcons title='COLLECTIONS' Icon={CollectionIcon} />
        <HeaderIcons title='SEARCH' Icon={SearchIcon} />
        <HeaderIcons title='ACCOUNT' Icon={UserIcon} />
      </div>

      <Image
        src='https://links.papareact.com/ua6'
        width={200}
        height={100}
        className='object-contain'
      />
    </header>
  )
}
