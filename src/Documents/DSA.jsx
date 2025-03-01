import { CodeBlock } from '../Components/Sections/CodeBlock';
import { Table } from '../Components/Sections/Tables';
import { TextBlock } from '../Components/Sections/TextBlock';
import { Para } from '../Components/Sections/Para';
import { ListBlock } from '../Components/Sections/ListBlock';

function DSA() {
  return (
    <div className='w-full'>
      <div className='flex mb-3 items-center justify-center border-b border-neutral-700'>
        <h1 className='text-4xl font-bold mb-2 text-neutral-300'>Data Structures and Algorithms (DSA)</h1>
      </div>
      
      <div className='mt-2 space-y-6'>
        <TextBlock
          heading='Searching in DSA'
          id='searching'
          Children={<>
            <Para text='Searching is a fundamental concept in computer science that involves finding a particular value or element within a data structure. The two main types of searching algorithms are: [bold]Linear Search[/bold] and [bold]Binary Search[/bold].' />
          </>}
        />
        
        <TextBlock
          heading='Binary Search'
          id='binary-search'
          Children={<>
            <Para text='Binary search is an efficient searching algorithm that works on sorted arrays. It follows the divide-and-conquer approach by repeatedly dividing the search space in half until the target element is found or the search space is empty.' />
            
            <ListBlock
              title='Binary Search Algorithm Steps:'
              items={[
                'Find the middle element of the array.',
                'If the middle element is the target, return its index.',
                'If the target is smaller than the middle element, search in the left half.',
                'If the target is greater than the middle element, search in the right half.',
                'Repeat the process until the element is found or the search space is empty.'
              ]}
              ordered={true}
            />
            
            <CodeBlock
              code={`#include<iostream>
#include<vector>
using namespace std;

// Binary search function
int binarySearch(int value, int left, vector<int>& nums) {
    int n = nums.size();
    int right = n - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] == value) return mid; // Element found
        else if (value < nums[mid]) right = mid - 1; // Search left half
        else left = mid + 1; // Search right half
    }
    return -1; // Element not found
}

int main() {
    vector<int> nums = {1, 2, 23, 25, 34, 56, 68, 87, 89, 93, 123, 150};
    int index = binarySearch(87, 6, nums);
    
    if (index == -1) cout << "Element not found";
    else cout << "Element found at index " << index;
    
    return 0;
}`}
              language='cpp'
            />
            
            <Table
              header={['Complexity Type', 'Time Complexity']}
              rows={[
                ['Best Case (Element found at mid)', 'O(1)'],
                ['Average Case', 'O(log n)'],
                ['Worst Case (Element not found)', 'O(log n)']
              ]}
            />
            
            <Para text='[bold]Space Complexity:[/bold] O(1) for iterative binary search since it does not use extra space apart from variables. If a recursive approach is used, the space complexity becomes O(log n) due to recursive stack calls.' />
          </>}
        />
      </div>
    </div>
  );
}

export default DSA;