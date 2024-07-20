import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateValue } from '../../Redux/itemSlice'; // import the updateValue action from itemSlice
import './GridTable.css';

const GridTable = ({ courses }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const totalPrice = useSelector(state => state.item1.value); // get the totalPrice value from the store
  const dispatch = useDispatch();

  const toggleCourseSelection = (course) => {
    if (selectedCourses.some(c => c.id === course.id)) {
      setSelectedCourses(selectedCourses.filter(c => c.id !== course.id));
      dispatch(updateValue(totalPrice - course.totalPrice));
    } else {
      setSelectedCourses([...selectedCourses, course]);
      dispatch(updateValue(totalPrice + course.totalPrice));
    }
  };

  const toggleAllSelection = () => {
    if (selectedCourses.length === courses.length) {
      setSelectedCourses([]);
      dispatch(updateValue(0));
    } else {
      setSelectedCourses(courses);
      dispatch(updateValue(courses.reduce((total, course) => total + course.totalPrice, 0)));
    }
  };

  const isMobileSize = () => {
    return window.innerWidth < 400;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={selectedCourses.length === courses.length}
              onChange={toggleAllSelection}
            />
            {isMobileSize() && <span>Select All</span>}
          </th>
          {!isMobileSize() && <th>Select All</th>}
          <th>Product</th>
          <th>Course Date</th>
          <th>Course Time</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {courses && courses.map((course) => (
          <tr key={course.id}>
            <td>
              <input
                type="checkbox"
                checked={selectedCourses.some(c => c.id === course.id)}
                onChange={() => toggleCourseSelection(course)}
              />
            </td>
            {!isMobileSize() && (
              <td>
                <img src={course.image} alt={course.name} />
              </td>
            )}
            <td>{course.name}</td>
            <td>{course.startDate}</td>
            <td>{course.time}</td>
            <td>{course.totalPrice}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
       
      </tfoot>
    </table>
  );
};

export default GridTable;