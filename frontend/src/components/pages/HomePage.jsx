import React from 'react'

const HomePage = () => {
  // eslint-disable-next-line
  const housesObjs = [
    {
      id: 1,
      title: 'House 1',
      price: 1000000,
      country: 'Netherland',
      city: 'Amsterdam',
      bedrooms: 4,
      bathrooms: 2,
      description:
        'house with beautiful big rooms and 4 bedrooms and 2 bathrooms',
    },
    {
      id: 2,
      title: 'Apartment 1',
      price: 800000,
      country: 'United States',
      city: 'New York',
      bedrooms: 2,
      bathrooms: 1,
      description: 'modern apartment with 2 bedrooms and 1 bathroom',
    },
    {
      id: 3,
      title: 'Villa 1',
      price: 2500000,
      country: 'Italy',
      city: 'Rome',
      bedrooms: 6,
      bathrooms: 4,
      description: 'luxurious villa with 6 bedrooms and 4 bathrooms',
    },
    {
      id: 4,
      title: 'Cottage 1',
      price: 500000,
      country: 'United Kingdom',
      city: 'London',
      bedrooms: 3,
      bathrooms: 2,
      description: 'quaint cottage with 3 bedrooms and 2 bathrooms',
    },
    {
      id: 5,
      title: 'Condo 1',
      price: 1200000,
      country: 'Canada',
      city: 'Toronto',
      bedrooms: 3,
      bathrooms: 2,
      description: 'modern condo with 3 bedrooms and 2 bathrooms',
    },
  ]

  return (
    <ul>
      {housesObjs.map((house) => (
        <li key={house.id}>
          <p>${house.price}</p>
        </li>
      ))}
    </ul>
  )
}
export default HomePage
