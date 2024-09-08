import React, { useState } from 'react';
import './accordian.css';
import data from './data';

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (currentId) => {
        setSelected(currentId === selected ? null : currentId);
    };

    const handleMultiSelection = (currentId) => {
        setMultiple((prevMultiple) => {
            const updatedMultiple = [...prevMultiple];
            const index = updatedMultiple.indexOf(currentId);

            if (index === -1) {
                updatedMultiple.push(currentId);
            } else {
                updatedMultiple.splice(index, 1);
            }

            return updatedMultiple;
        });
    };

    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                {enableMultiSelection ? 'Disable Multiselection' : 'Enable Multiselection'}
            </button>
            <div className='accordion'>
                {data && data.length > 0 ? data.map(dataItem => (
                    <div key={dataItem.id} className='item'>
                        <div
                            onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}
                            className='title'
                        >
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {(selected === dataItem.id || multiple.includes(dataItem.id)) && (
                            <div className='content'>
                                <p>{dataItem.answer}</p>
                            </div>
                        )}
                    </div>
                )) : <h2>No data found</h2>}
            </div>
        </div>
    );
};

export default Accordion;
