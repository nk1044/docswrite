import React from 'react'

function Content({
    component,
    nextComponent,
    Items,
    Index    
}) {
  return (
    <div className='w-full h-full '>
        <div className='w-full h-full grid grid-cols-12 grid-rows-1 gap-1'>
            <div className='border border-neutral-700 rounded-lg p-3 md:col-span-10 col-span-12'>
                {component}
            </div>
            <div className='md:col-span-2 hidden md:block'>
            <div className='border border-neutral-700 rounded-lg p-3 '>
                SideBar
            </div>
            </div>
        </div>
    </div>
  )
}

export default Content