import React, {useState} from 'react'
import Button from '../Components/Button';
import Content from '../Components/Content';

export default function Docs() {
  const [Component, setComponent] = useState(null);
  const [ComponentName, setComponentName] = useState('');
  const [ComponentIndex, setComponentIndex] = useState(null);
  const Items = [
    {name: 'Button', Component: <Button/>, Children: []},
    {name: 'Button1', Component: <Button/>, Children: []},
    {name: 'Button2', Component: <Button/>, Children: []},
  ];

  const handleNextComponent = (index) => {
    index < Items.length - 1
      ? (
        setComponent(Items[index + 1].Component),
        setComponentName(Items[index + 1].name),
        setComponentIndex(index + 1)
      )
      : (
        setComponent(Items[0].Component),
        setComponentName(Items[0].name),
        setComponentIndex(0)
      )
  }

  return (
    <div className='w-full h-screen bg-neutral-900 text-neutral-300'>
      
      <div className='pt-2 px-2'>
      <div className='border h-16 border-neutral-700 rounded-lg p-4 mx-3'>
        Header
      </div>
      </div>
      <div className='w-full h-[calc(100%-5rem)] px-2'>
      <div className='w-full h-full grid grid-cols-12 p-3 gap-2'>
      <div className='border border-neutral-700 rounded-lg p-4 hidden sm:block sm:col-span-3 md:col-span-2'>
        {/* Sidebar */}
        <ul className="w-full">
  {Items.map((item, index) => (
    <li key={index} className="w-full">
      <div
        className={`px-3 mb-2 text-lg font-medium ${
          ComponentName === item.name ? 'text-orange-500' : 'text-neutral-300'
        } cursor-pointer transform hover:scale-105 transition-transform duration-200 w-full border-b border-gray-500`}
        onClick={() => {
          setComponent(item.Component);
          setComponentName(item.name);
          setComponentIndex(index);
        }}
      >
        {item.name}
      </div>
    </li>
  ))}
</ul>


      </div>
      <div className='col-span-12 sm:col-span-9 md:col-span-10'>
        <Content 
        component={Component}
        nextComponent={handleNextComponent}
        Items={Items}
        Index={ComponentIndex}
        />
      </div>
      </div>
      </div>
    </div>
  )
}
