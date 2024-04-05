'use client';

import React, { useState } from 'react';
import PricingTile from './Pricing.tile';
import { priceTileData } from '@/data/priceTileData';

function Pricing() {
  const [viewMode, setViewMode] = useState('monthly');
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    // Toggle isChecked state
    setIsChecked((prevState) => !prevState);
    // Update viewMode based on isChecked
    setViewMode((prevMode) => (prevMode === 'monthly' ? 'yearly' : 'monthly'));
    console.log(viewMode);
  };

  return (
    <div>
      {/* Toggle Monthly or yearly */}
      <div className="flexCenter space-x-5">
        <p>Monthly</p>
        <label
          htmlFor="toggle"
          className="inline-flex items-center cursor-pointer"
        >
          <input
            type="checkbox"
            id="toggle"
            className="sr-only peer"
            checked={isChecked}
            onChange={handleToggleChange}
          />
          <div
            className="relative w-11 h-6 bg-[#161C2D] opacity-15 peer-focus:outline-none 
          peer-focus:ring-4 peer-focus:ring-[#161C2D]/15  rounded-full peer
          peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
           peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
           after:start-[2px] after:bg-white after:border-gray-300 after:border 
           after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600
            peer-checked:bg-gray-500"
          ></div>
        </label>
        <p>Yearly</p>
        <button className="bg-[#473BF0]/10 text-[#473BF0] py-2 px-4 rounded-3xl">
          Save 25%
        </button>
      </div>
      <div>
        {priceTileData.map(({ membershipType, price, list }) => (
          <PricingTile
            key={membershipType}
            membershipType={membershipType}
            price={price}
            list={list}
          />
        ))}
      </div>
    </div>
  );
}

export default Pricing;
