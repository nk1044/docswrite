```jsx
import { CodeBlock } from '../Components/Sections/CodeBlock';
import { Table } from '../Components/Sections/Tables';
import {TextBlock} from '../Components/Sections/TextBlock';
import {Para} from '../Components/Sections/Para';
import {ListBlock} from '../Components/Sections/ListBlock';

function componentName() {
  // there should be only one TextBlock in one code file
  // inside a TextBlock there can be multiple things [Para, CodeBlock, Table, ExternalLink, Inline, ListBlock] in any order and in any number.
  // you can use [code]inline code [/code].
  // [link]inline link[/link].
  // [bold] sub heading or emphasize [/bold].
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
and this is [link]Link(https://docs.docker.com)[/link].
[bold]bold text[/bold]'
/>

<CodeBlock
code='your code',
language='code language'
/>

<Table
headers={['', '']},
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