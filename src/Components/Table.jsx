import React, { useEffect, useState } from 'react';
import axios from "axios";

function Table({ heading }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data: " + error);
      }
    };
    fetchData();
  },[]); // if we write empty dependency array this func will be called once, if we dont write anything then it will be called infinitely, everytime component ins re rendered irresepctive of anything 

  const handleClick = (index) => {
    console.log("Clicked index: ", index);
    setSelectedIndex(index);
  };

  return (
    <>
      <h2 className='text-2xl text-slate-700 font-bold m-3'>{heading}</h2>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Product name</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((item, index) => (
                <tr key={item.id}
                    className={index === selectedIndex
                      ? "bg-orange-400"
                      : "bg-white border-b dark:bg-gray-600 dark:border-gray-700"}>
                  <th onClick={() => handleClick(index)}
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.title}
                  </th>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="1" className="text-center text-red-600 font-bold p-4">
                  Item list is empty!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
