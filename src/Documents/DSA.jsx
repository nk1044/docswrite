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
                    id='dsa-searching'
                    Children={<>
                        <Para text='Searching is a fundamental concept in computer science that involves finding a particular value or element within a data structure. The two main types of searching algorithms are: [bold]Linear Search[/bold] and [bold]Binary Search[/bold].' />
                    </>}
                />

                <TextBlock
                    heading='Binary Search'
                    id='dsa-search-binary-search'
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
                            code={`// Binary search function
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
                    id='dsa-sorting-mergesort'
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
                                code={`// Merging two sorted halves
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
                    id='dsa-sorting-insertion-sort'
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
                    id='dsa-linked-list'
                    Children={<>
                        <Para text='A linked list is a linear data structure where elements are stored in nodes. Each node contains data and a pointer to the next node in the sequence. Linked lists provide dynamic memory allocation and efficient insertion and deletion of elements.' />
                    </>}
                />


                <TextBlock
                    heading='Creating a Linked List from a Vector'
                    id='dsa-linked-list-creation'
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
                            code={`class Node{
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
`}
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

                <TextBlock
                    heading='Deleting Nodes with Specific Value in Linked List'
                    id='das-linked-list-delete-node'
                    Children={<>
                        <Para
                            text='This code implements a singly linked list with two primary operations: converting an array into a linked list and deleting nodes with a specific value. It demonstrates the use of dynamic memory allocation and pointer manipulation in C++.'
                        />

                        <CodeBlock
                            code={`
Node* deleteNode(Node* head, int a){
    Node* dummy = new Node(0, head);
    Node* mover = dummy;
    while(mover->next!= nullptr){
        if(mover->next->data == a){
            Node* temp = mover->next;
            mover->next = mover->next->next;
            delete temp;
        }
        else {
            mover = mover->next;
        }
    }
    Node* Newhead = dummy->next;
    delete dummy;
    return Newhead;
}`}
                            language='cpp'
                        />

                        <Table
                            title='Time and Space Complexity'
                            headers={['Operation', 'Time Complexity', 'Space Complexity']}
                            rows={[
                                ['Convert array to linked list', '[bold]O(n)[/bold]', '[bold]O(n)[/bold]'],
                                ['Delete specific value nodes', '[bold]O(n)[/bold]', '[bold]O(1)[/bold]']
                            ]}
                        />

                        <ListBlock
                            title='Explanation of Complexity'
                            items={[
                                '[bold]Convert array to linked list:[/bold] Each element in the array is iterated over once and allocated dynamically, making it O(n) time and space complexity.',
                                '[bold]Delete specific value nodes:[/bold] Each node is traversed once, so the time complexity is O(n). Space complexity is O(1) because we only use a few additional pointers and do not allocate extra memory apart from the modified list.'
                            ]}
                            ordered={false}
                        />
                    </>}
                />

                <TextBlock
                    heading='Binary Tree'
                    id='dsa-binary-tree'
                    Children={
                        <>
                            <Para
                                text='A binary tree is a hierarchical data structure where each node has at most two children. Tree traversal refers to the process of visiting each node in a tree systematically. The common traversal techniques are [bold]preorder, inorder, postorder, and level order traversals[/bold].'
                            />

                            <CodeBlock
                                code={`class Node{
    public:
    int data;
    Node* left;
    Node* right;

    public:
    Node(int a = 0, Node* left1 = nullptr, Node* right1 = nullptr){
        data = a;
        left = left1;
        right = right1;
    }
};`}
                                language='cpp'
                            />

                            <Para text='Each node in a binary tree contains data and pointers to left and right child nodes. The following functions demonstrate different traversal techniques.' />

                            <Table
                                headers={['Traversal Type', 'Order of Nodes Visited']}
                                rows={[
                                    ['Preorder', 'Root → Left → Right'],
                                    ['Inorder', 'Left → Root → Right'],
                                    ['Postorder', 'Left → Right → Root'],
                                    ['Level Order', 'Visit nodes level by level'],
                                ]}
                            />

                            <Para text='Now, let us explore each traversal with its respective time and space complexity.' />
                        </>
                    }
                />

                <TextBlock
                    heading='Preorder Traversal (Recursive)'
                    id='dsa-binary-tree-preorder-recursive'
                    Children={
                        <>
                            <Para text='Preorder traversal visits the root first, followed by the left and right subtrees.' />
                            <CodeBlock
                                code={`void preorder(Node* root){
    if(root == nullptr){
        return;
    }
    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
}`}
                                language='cpp'
                            />
                            <Para text='[bold]Time Complexity:[/bold] O(n) because each node is visited once.' />
                            <Para text='[bold]Space Complexity:[/bold] O(h), where h is the height of the tree due to recursive calls in the call stack.' />
                        </>
                    }
                />

                <TextBlock
                    heading='Inorder Traversal (Recursive)'
                    id='dsa-binary-tree-inorder-recursive'
                    Children={
                        <>
                            <Para text='Inorder traversal visits the left subtree first, then the root, and finally the right subtree.' />
                            <CodeBlock
                                code={`void Inorder(Node* root){
    if(root == nullptr){
        return;
    }
    Inorder(root->left);
    cout << root->data << " ";
    Inorder(root->right);
}`}
                                language='cpp'
                            />
                            <Para text='[bold]Time Complexity:[/bold] O(n) since each node is visited once.' />
                            <Para text='[bold]Space Complexity:[/bold] O(h) for the recursive function calls in the stack.' />
                        </>
                    }
                />

                <TextBlock
                    heading='Postorder Traversal (Recursive)'
                    id='dsa-binary-tree-postorder-recursive'
                    Children={
                        <>
                            <Para text='Postorder traversal first visits the left and right subtrees, then the root.' />
                            <CodeBlock
                                code={`void postorder(Node* root){
    if(root == nullptr){
        return;
    }
    postorder(root->left);
    postorder(root->right);
    cout << root->data << " ";
}`}
                                language='cpp'
                            />
                            <Para text='[bold]Time Complexity:[/bold] O(n) as each node is processed once.' />
                            <Para text='[bold]Space Complexity:[/bold] O(h) due to recursion depth.' />
                        </>
                    }
                />

                <TextBlock
                    heading='Level Order Traversal (Using Queue)'
                    id='dsa-binary-tree-level-order'
                    Children={
                        <>
                            <Para text='Level order traversal processes nodes level by level using a queue.' />
                            <CodeBlock
                                code={`vector<vector<int>> LevelOrder(Node* root){
    vector<vector<int>> ans;
    if(root == nullptr) return ans;
    
    queue<Node*> q;
    q.push(root);
    while(!q.empty()){
        int n = q.size();
        vector<int> level;
        for(int i = 0; i < n; i++){
            Node* node = q.front();
            q.pop();
            if(node->left != nullptr) q.push(node->left);
            if(node->right != nullptr) q.push(node->right);
            level.push_back(node->data);
        }
        ans.push_back(level);
    }
    return ans;
}`}
                                language='cpp'
                            />
                            <Para text='[bold]Time Complexity:[/bold] O(n) since all nodes are visited once.' />
                            <Para text='[bold]Space Complexity:[/bold] O(n) as we use a queue to store nodes.' />
                        </>
                    }
                />

                <TextBlock
                    heading='Iterative Preorder Traversal'
                    id='dsa-binary-tree-preorder-iterative'
                    Children={
                        <>

                            <Para text='Iterative versions of these traversals are implemented using stacks to simulate recursion.' />

                            <CodeBlock
                                code={`vector<int> preorderIterative(Node* root) {
    vector<int> result;
    if (root == nullptr) return result;
    stack<Node*> s;
    s.push(root);
    while (!s.empty()) {
        Node* node = s.top(); s.pop();
        result.push_back(node->data);
        if (node->right) s.push(node->right);
        if (node->left) s.push(node->left);
    }
    return result;
}`}
                                language='cpp'
                            />
                            <Para text='In iterative preorder traversal, a stack is used to process nodes in root-left-right order.' />


                        </>} />
                <TextBlock
                    heading='Iterative Inorder Traversal'
                    id='dsa-binary-tree-inorder-iterative'
                    Children={
                        <>
                            <CodeBlock
                                code={`vector<int> inorderIterative(Node* root) {
    vector<int> result;
    stack<Node*> s;
    Node* node = root;
    while (node || !s.empty()) {
        while (node) {
            s.push(node);
            node = node->left;
        }
        node = s.top(); s.pop();
        result.push_back(node->data);
        node = node->right;
    }
    return result;
}`}
                                language='cpp'
                            />
                            <Para text='In iterative inorder traversal, a stack is used to track the leftmost nodes first.' />


                        </>} />
                <TextBlock
                    heading='Iterative Postorder Traversal'
                    id='dsa-binary-tree-postorder-iterative'
                    Children={
                        <>
                            <CodeBlock
                                code={`vector<int> postorderIterative(Node* root) {
    vector<int> result;
    if (root == nullptr) return result;
    stack<Node*> s1, s2;
    s1.push(root);
    while (!s1.empty()) {
        Node* node = s1.top(); s1.pop();
        s2.push(node);
        if (node->left) s1.push(node->left);
        if (node->right) s1.push(node->right);
    }
    while (!s2.empty()) {
        result.push_back(s2.top()->data);
        s2.pop();
    }
    return result;
}`}
                                language='cpp'
                            />
                            <Para text='Postorder traversal requires two stacks to process nodes in left-right-root order iteratively.' />
                            <Para text='Time complexity of all traversals is O(n) as every node is visited once. Space complexity is O(h), where h is the tree height, due to recursive calls or stack usage.' />
                        </>} />


            </div>
        </div>
    );
}

export default DSA;