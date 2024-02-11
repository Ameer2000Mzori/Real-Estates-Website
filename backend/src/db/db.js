import mongoose from 'mongoose'

let db = {}

const uri = `mongodb+srv://${process.env.MGDB_USER}:${process.env.MGDB_PASS}@real-state-app.skulpkd.mongodb.net/`

const mongoConnect = (cb) => {
  mongoose.set('strictQuery', true)
  mongoose
    .connect(uri, {
      usenewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      cb()
    })
    .catch((err) => console.log(err))
}

export default mongoConnect

// import mongoose from 'mongoose'

// let db = {}
// const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@tiktok.zov5znb.mongodb.net/tiktok`

// const mongoConnect = (cb) => {
//   // explain what is happening here
//   mongoose.set('strictQuery', true)
//   mongoose
//     .connect(uri, {
//       usenewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => {
//       cb()
//     })
//     .catch((err) => console.log(err))
// }

// export default mongoConnect
