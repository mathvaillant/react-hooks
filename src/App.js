import React from 'react'
import './App.css'
import PropTypes from 'prop-types'

const Test = (props) => {
  return (
    <div>
      <h1>{props.str}</h1>
      <h1>{props.bool ? 'bool' : 'no bool'}</h1>
      <h1>{props.strOrNum}</h1>
      <ul>
        {props.array.map((val) => (
          <li key={val}>{val}</li>
        ))}
      </ul>
      <br />
      <ol>
        {props.objectsArray.map((object) => (
          <li key={object.age}>{object.name}</li>
        ))}
      </ol>
      <strong>{props.children}</strong>
    </div>
  )
}

Test.propTypes = {
  str: PropTypes.string.isRequired,
  bool: PropTypes.bool.isRequired,
  strOrNum: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number,
  ]),
  array: PropTypes.arrayOf(PropTypes.number),
  objectsArray: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ),
  children: PropTypes.string.isRequired,
}

export default function App() {
  const people = [
    { name: 'Math Vaillant', age: 23 },
    { name: 'John Doe', age: 32 },
  ]

  return (
    <>
      <div className='app'></div>
      <Test
        str={'mathvaillant'}
        bool={false}
        strOrNum={10}
        array={[1, 2, 3]}
        objectsArray={people}>
        Children
      </Test>
    </>
  )
}
