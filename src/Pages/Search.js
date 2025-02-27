

const metaData = [
    {data: 'data1', Index: 0, ID: 'id1'},
    {data: 'data2', Index: 1, ID: 'id2'},
]

export default async function Search(query) {
    const filtered = metaData.filter((doc) => {
        if (typeof doc === "string") {
            return doc.toLowerCase().includes(query.toLowerCase());
        } else if (typeof doc === "object" && doc.title) { 
            return doc.title.toLowerCase().includes(query.toLowerCase());
        }
        return [];
    });

    console.log(filtered);
    return filtered;
}
