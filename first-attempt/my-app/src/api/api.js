export const fetchItems = async () => {
    // Call backend API to fetch items
    const response = await fetch('/api/items');
    const data = await response.json();
    return data;
};

export const addItem = async (item) => {
    // Call backend API to add a new item
    const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    });
    const data = await response.json();
    return data;
};