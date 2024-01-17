import React, { useState } from 'react';

function AddItem({ onItemAdded }) {
    const [itemName, setItemName] = useState('');
    const [itemDetails, setItemDetails] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Assuming you have a function to post data to your backend
            await onItemAdded({ itemName, itemDetails });
            setSuccess(true);
            setItemName('');
            setItemDetails('');
        } catch (error) {
            // Handle errors here
            setSuccess(false);
        }
    };

    return (
        <div>
            {success && <div>Item added successfully!</div>}
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
        </div>
    );
}

export default AddItem;
