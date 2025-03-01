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
                            headers={['Complexity Type', 'Time Complexity']}
                            rows={[
                                ['Best Case (Element found at mid)', 'O(1)'],
                                ['Average Case', 'O(log n)'],
                                ['Worst Case (Element not found)', 'O(log n)']
                            ]}
                        />

                        <Para text='[bold]Space Complexity:[/bold] O(1) for iterative binary search since it does not use extra space apart from variables. If a recursive approach is used, the space complexity becomes O(log n) due to recursive stack calls.' />
                    </>}
                />

                <TextBlock
                    heading='Sorting Algorithms'
                    id='sorting-intro'
                    Children={
                        <>
                            <Para
                                text='Sorting is a fundamental operation in computer science that involves arranging elements in a specific order (ascending or descending). Various sorting algorithms have different time complexities, space requirements, and use cases. Some common sorting algorithms include Bubble Sort, Merge Sort, Quick Sort, and Heap Sort.'
                            />
                        </>
                    }
                />

                <TextBlock
                    heading='Sorting: Merge Sort'
                    id='sorting-mergesort'
                    Children={
                        <>
                            <Para
                                text='Merge Sort is a divide-and-conquer sorting algorithm that splits an array into smaller subarrays, sorts them recursively, and then merges them back together. It is stable and guarantees O(n log n) performance in all cases.'
                            />

                            <ListBlock
                                title='Steps of Merge Sort:'
                                items={[
                                    'Divide: Split the array into two halves until each half contains a single element.',
                                    'Conquer: Recursively sort each half.',
                                    'Combine: Merge the sorted halves back together.'
                                ]}
                                ordered={true}
                            />

                            <CodeBlock
                                code={`#include <iostream>
#include <vector>
using namespace std;

// Merging two sorted halves
void merge(vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    vector<int> leftArr(n1), rightArr(n2);
    
    for (int i = 0; i < n1; ++i)
        leftArr[i] = arr[left + i];
    for (int i = 0; i < n2; ++i)
        rightArr[i] = arr[mid + 1 + i];
    
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            ++i;
        } else {
            arr[k] = rightArr[j];
            ++j;
        }
        ++k;
    }

    while (i < n1) {
        arr[k] = leftArr[i];
        ++i;
        ++k;
    }
    while (j < n2) {
        arr[k] = rightArr[j];
        ++j;
        ++k;
    }
}

// Recursive Merge Sort Function
void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

int main() {
    vector<int> arr = {38, 27, 43, 3, 9, 82, 10};
    cout << "Original array: ";
    for (int num : arr) cout << num << " ";
    cout << endl;

    mergeSort(arr, 0, arr.size() - 1);

    cout << "Sorted array: ";
    for (int num : arr) cout << num << " ";
    cout << endl;
    return 0;
}`}
                                language='cpp'
                            />

                            <Para
                                text='The Merge Sort algorithm follows a recursive approach. The array is split into two halves until each half has only one element. Then, the merging step sorts and combines these halves efficiently. This ensures that the sorting process remains efficient and stable.'
                            />

                            <Table
                                headers={['Complexity', 'Best', 'Average', 'Worst']}
                                rows={[
                                    ['Time Complexity', 'O(n log n)', 'O(n log n)', 'O(n log n)'],
                                    ['Space Complexity', 'O(n)', 'O(n)', 'O(n)']
                                ]}
                            />

                            <Para
                                text='Time Complexity Analysis:
- The array is divided into two halves log(n) times.
- Merging each level requires O(n) operations.
- Therefore, the total complexity is O(n log n).'
                            />
                        </>
                    }
                />
                <TextBlock
                    heading='Sorting: Insertion Sort'
                    id='sorting-insertion-sort'
                    Children={<>
                        <Para
                            text='Insertion Sort is a simple and intuitive sorting algorithm that builds the sorted array one element at a time. It works similarly to how we sort playing cards in our hands. The algorithm iterates through the list and places each element in its correct position relative to the already sorted part of the array.'
                        />

<ListBlock
                                    title='Working Principle:-'
                                    items={[
                                        'Start with the second element (index 1) and compare it with the previous elements.',
                                        'If the current element is smaller than the previous ones, shift the larger elements to the right.',
                                        'Insert the current element in its correct position.',
                                        'Repeat for all elements until the array is sorted.'
                                    ]}
                                    ordered={true}
                                />

                        <CodeBlock
                            code={`#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

int main(){
    vector<int> v(10, 0);
    
    cout << "Enter 10 elements:\n";
    for(int i = 0; i < 10; i++){
        cin >> v[i];
    }
    
    for(int i = 1; i < 10; i++){
        int j = i;
        while(j > 0 && v[j] < v[j - 1]){
            swap(v[j], v[j - 1]);
            j--;
        }
    }
    
    cout << "Sorted array: ";
    for(int i = 0; i < 10; i++){
        cout << v[i] << " ";
    }
    return 0;
}`}
                            language='cpp'
                        />

<ListBlock
            title='Step-by-Step Explanation'
            items={[
                'A vector `v` of size 10 is created to store input elements.',
                'The user inputs 10 numbers into the vector.',
                'The outer loop iterates over each element from index 1 to the end.',
                'The inner loop shifts elements that are greater than the current element to the right.',
                'The `swap()` function is used to place the current element in the correct position.'
            ]}
            ordered={false}
        />


<Table
                                    headers={['Case', 'Time Complexity']}
                                    rows={[
                                        ['Best Case (Already Sorted Input)', 'O(n)'],
                                        ['Worst Case (Reverse Sorted Input)', 'O(n²)'],
                                        ['Average Case', 'O(n²)']
                                    ]}
                                />
                                <Para
                                    text='- Space Complexity: [bold]O(1)[/bold], as no extra space is used apart from the input array.'
                                />
                    </>}
                />

<TextBlock
                    heading='Linked List'
                    id='linked-list'
                    Children={<>
                        <Para text='A linked list is a linear data structure where elements are stored in nodes. Each node contains data and a pointer to the next node in the sequence. Linked lists provide dynamic memory allocation and efficient insertion and deletion of elements.'/>
                        </>}
                />
                

<TextBlock
          heading='Creating a Linked List from a Vector'
          id='linked-list-creation'
          Children={<>
            <Para
              text='A linked list is a data structure where elements (nodes) are linked together using pointers. Each node consists of a data field and a pointer to the next node in the list. The given C++ program demonstrates how to create a singly linked list from a vector.'
            />

            <ListBlock
              title='Working Principle'
              items={[
                'A class `Node` is defined with an integer data field and a pointer to the next node.',
                'A constructor initializes each node with a given value and a pointer (defaulted to `nullptr`).',
                'A function `createlst()` takes a vector of integers as input and constructs a linked list.',
                'A new node is created for each element in the vector and linked to the previous node.',
                'The head node is returned, pointing to the first element in the linked list.',
                'The main function initializes a vector and calls `createlst()` to build the linked list.',
                'A loop traverses the linked list, printing each node’s value.'
              ]}
              ordered={true}
            />

            <CodeBlock
              code={`#include<iostream>
#include<vector>

using namespace std;

class Node{
    public:
    int data;
    Node* next;

    public:
    Node(int a=0 , Node* next1 = nullptr){
        data = a;
        next = next1;
    }
};

Node* createlst(vector<int> &a){
    Node* head = new Node(a[0]);
    Node* mover = head;
    
    for(int i=1; i<a.size(); i++){
        Node* temp = new Node(a[i]);
        mover->next = temp;
        mover = temp;
    }
    return head;
}

int main(){
    vector<int> v = {1, 3, 5, 8, 2, 6, 4, 9, 21, 23, 523, 89, 756, 652, 123, 426, 789};
    
    Node* head = createlst(v);
    
    while(1){
        cout << head->data << " ";
        head = head->next;
        if(head->next == nullptr){
            cout << head->data << " ";
            break;
        }
    }
    return 0;
}`}
              language='cpp'
            />

            <Para
              text='[bold]Explanation of the Code[/bold]'
            />
            <ListBlock
              title='Key Components of the Code'
              items={[
                '[bold]Node Class:[/bold] Defines the structure of a node in the linked list with data and a pointer.',
                '[bold]Constructor:[/bold] Initializes the node with a given value and a default next pointer.',
                '[bold]createlst Function:[/bold] Iterates through the vector and links each node to form a linked list.',
                '[bold]Main Function:[/bold] Calls `createlst()` and traverses the linked list to print all elements.'
              ]}
              ordered={false}
            />

            <Para
              text='[bold]Time and Space Complexity Analysis[/bold]'
            />
            <Table
              headers={['Operation', 'Time Complexity', 'Reason']}
              rows={[
                ['Creating the linked list', 'O(n)', 'Each element is visited once to create a node and link it.'],
                ['Traversing the list', 'O(n)', 'Each node is visited once to print its value.'],
                ['Overall Complexity', 'O(n)', 'The dominant factor is the linear traversal of `n` elements.']
              ]}
            />

            <Para
              text='Since the linked list is created dynamically using `new`, the space complexity is O(n), where `n` is the number of elements in the vector. No extra memory is used apart from the nodes themselves.'
            />
          </>}
        />


            </div>
        </div>
    );
}

export default DSA;