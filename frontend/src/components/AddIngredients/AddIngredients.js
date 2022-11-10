import axios from 'axios';
import './AddIngredients.css';
import { Modal } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

const AddIngredients = ({ open, setOpen, refreshPage }) => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleDone = () => {
    items.forEach(async (item) => {
      try {
        const { itemName, quantity } = item;
        const response = await axios.post('/api/add-pantry/', {
          name: itemName,
          quantity,
        });
        await response.data;
        setOpen(false);
        refreshPage();
        setItems([]);
      } catch (error) {
        console.log(error);
        setOpen(false);
      }
      setItems([]);
    });
  };

  const handleAddButtonClick = () => {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);

    console.log(items);
    setInputValue('');
  };

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity++;

    setItems(newItems);
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity--;

    setItems(newItems);
  };

  const toggleComplete = (index) => {
    const newItems = [...items];

    newItems[index].isSelected = !newItems[index].isSelected;

    setItems(newItems);
  };

  return (
    <Modal open={open}>
      <div className="app-background">
        <div className="main-container">
          <h1 className="back">
            {' '}
            <b>
              {' '}
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={() => {
                  setOpen(false);
                }}
                className="cursor-pointer"
              />
            </b>{' '}
            Add Ingredients to your pantry <br />
            <span>please add ingrdients from your fridge</span>{' '}
          </h1>
          <div className="add-item-box">
            <input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              className="add-item-input"
              placeholder="Add an ingredients..."
            />
            <FontAwesomeIcon
              icon={faPlus}
              onClick={() => handleAddButtonClick()}
            />
          </div>
          <div className="item-list">
            {/* <h1>Added</h1> */}
            {items.map((item, index) => (
              <div className="item-container" key={index}>
                <div
                  className="item-name"
                  onClick={() => toggleComplete(index)}
                >
                  {item.isSelected ? (
                    <>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <span className="completed">{item.itemName}</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faCircle} />
                      <span>{item.itemName}</span>
                    </>
                  )}
                </div>
                <div className="quantity">
                  <button>
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      onClick={() => handleQuantityDecrease(index)}
                    />
                  </button>
                  <span> {item.quantity} </span>
                  <button>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      onClick={() => handleQuantityIncrease(index)}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="btn" type="submit">
            <div>
              <Link to="/" onClick={handleDone}>
                <button>Done</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddIngredients;
