import React, { useEffect, useState } from 'react';

function InventoryList({ items }) {
    return (
        <div>
            <h2>Inventory List</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.item_id}>{item.item_name} - {item.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default InventoryList;
