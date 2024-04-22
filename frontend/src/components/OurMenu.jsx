import React, { useState } from 'react';
import { data } from '../menuApi.json';

const OurMenu = () => {
  const [counts, setCounts] = useState(Array(10).fill(0));
  const [selectedCategory, setSelectedCategory] = useState(null);

  const menuData = data.find((item) => item.hasOwnProperty("ourmenu")) || data[0];
  
  const foodImages = menuData.dishes.map((element) => element.image);
  const foodNames = menuData.dishes.map((element) => element.title);
  const subFoodItems = menuData.dishes.reduce((acc, curr) => {
    acc[curr.title] = curr.subItems || [];
    return acc;
  }, {});

  const incrementLike = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  const decrementDislike = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) {
      newCounts[index]--;
      setCounts(newCounts);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="OurMenu">
      <h1 className="title">Dishes</h1>
      <div className="photos">
        {foodImages.map((image, index) => (
          <div key={index} className="food-profile">
            <img src={image} alt={foodNames[index]} />
            <div className="reactions">
              <div className="actions">
                <button className="like" onClick={() => incrementLike(index)}>👍</button>
                <button className="dislike" onClick={() => decrementDislike(index)}>👎</button>
              </div>
              <span className="counts">{counts[index]}</span>
            </div>
            <div className='dropdown-content'>
              <button onClick={() => handleCategorySelect(foodNames[index])}>{foodNames[index]}</button>
              {selectedCategory === foodNames[index] && (
                <div className="sub-food-items">
                  {subFoodItems[foodNames[index]].map((subItem, subIndex) => (
                    <button key={subIndex}>{subItem}</button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurMenu;
