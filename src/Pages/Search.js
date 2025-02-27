

const metaData = [
    {data: 'data1', Index: 0, ID: 'id1'},
    {data: 'data2', Index: 1, ID: 'id2'},
]

export default async function Search(query) {
    const filtered = metaData.filter((doc) => {
        const data = String(doc.data).toLowerCase();
        return data.includes(query.toLowerCase());
    });
    
    console.log(filtered);
    return filtered;
}
