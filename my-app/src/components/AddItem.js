import React, { useState } from 'react';

function AddItemForm({ onAdd }) {
    const [itemName, setItemName] = useState('');
    const [itemDetails, setItemDetails] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ itemName, itemDetails });
        setItemName('');
        setItemDetails('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Item Name:
                <input
                    type="text"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
            </label>
            <label>
                Item Details:
                <textarea
                    value={itemDetails}
                    onChange={(e) => setItemDetails(e.target.value)}
                ></textarea>
            </label>
            <button type="submit">Add Item</button>
        </form>
    );
}

export default AddItemForm;
