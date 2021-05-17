import React from 'react'
import { 
    HomeIcon,
    CollectionIcon,
    SearchIcon,
    LightningBoltIcon,
    UserIcon,
    BadgeCheckIcon
 } from "@heroicons/react/outline"
import { HeaderItem } from './HeaderItem'
import Image from 'next/image'

export const Header = (props) => {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-grow justify-evenly max-w-2xl mt-1">
               <HeaderItem title="Home"  Icon={HomeIcon} />
               <HeaderItem title="setting" Icon={UserIcon}/>
               <HeaderItem title="badge" Icon={BadgeCheckIcon}/>
               <HeaderItem title="Search" Icon={SearchIcon}/>
               <HeaderItem title="light" Icon={LightningBoltIcon} />
               <HeaderItem title="Collect" Icon={CollectionIcon} />
            </div>            
            <Image src="/hul.svg" className="object-contain" color="white" height={100} width={200}/>
        </header>
    )
}
