```jsx
import { CodeBlock } from '../Components/Sections/CodeBlock';
import { Table } from '../Components/Sections/Tables';
import {TextBlock} from '../Components/Sections/TextBlock';
import {Para} from '../Components/Sections/Para';
import {ListBlock} from '../Components/Sections/ListBlock';

function componentName() {
  return (

    <div className='w-full'>

<div className='flex mb-3 items-center justify-center border-b border-neutral-700'>
    <h1 className='text-4xl font-bold mb-2 text-neutral-300'>Heading</h1>
</div>

<div className='mt-2 space-y-6'>
<TextBlock
heading = 'your heading',
id='sub id',
Children={<>
<Para
text='this is normal text. and [code]this is inline code[/code]. 
and this is [link]Link(https://docs.docker.com)[/link]'
/>

<CodeBlock
code='your code',
language='code language'
/>

<Table
header={['', '']},
rows={[
['r11', 'r12'],
['r21', 'r22']
]}
/>


<ListBlock
title='your title',
items={[]},
ordered=false
/>
</>}
/>

</div>

</div>

  )}
export default componentName


```