import React, { useState, useEffect } from 'react';

function EditItem({ itemToEdit, onUpdateItem }) {
    const [itemName, setItemName] = useState('');
    const [itemDetails, setItemDetails] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (itemToEdit) {
            setItemName(itemToEdit.itemName);
            setItemDetails(itemToEdit.itemDetails);
        }
    }, [itemToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onUpdateItem(itemToEdit.item_id, { itemName, itemDetails });
            setSuccess(true);
        } catch (error) {
            // Handle errors here
            setSuccess(false);
        }
    };

    return (
        <div>
            {success && <div>Item updated successfully!</div>}
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
                <button type="submit">Update Item</button>
            </form>
        </div>
    );
}

export default EditItem;
