import { houses } from '../modules/houses.js'

export const homePage = (req, res) => {
  res.status(200).send('this is main page')
}

export const housesPage = (req, res) => {
  houses
    .find()
    .sort({
      createAt: -1,
    })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => console.log(err))
}

export const addHouse = (req, res) => {
  const { id, title, price, country, city, bedrooms, bathrooms, description } =
    req.body
  const newHouse = new houses({
    id,
    title,
    price,
    country,
    city,
    bedrooms,
    bathrooms,
    description,
  })
  newHouse
    .save()
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => console.log(err))
}
