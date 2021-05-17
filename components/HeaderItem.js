
export const HeaderItem = ({title,Icon}) => {
    return (
        <div className="flex flex-col  w-12 sm:w-20 items-center cursor-pointer group">
            <Icon className='h-8 mb-1 group-hover:animate-bounce'/>
            <p className="opacity-0 tracking-widest group-hover:opacity-100">
                {title}
            </p>
        </div>
    )
}
