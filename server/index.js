import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import { postLogin, postSignUp } from './controllers/user.js'
import {getAllSlots, postBookSlot} from './controllers/slotBooking.js'
import { postService , getService } from './controllers/service.js'
import { postServiceProvider, getServiceProviders, getProvider, postServiceProviderLogin } from './controllers/serviceProvider.js'

dotenv.config()
const PORT = process.env.PORT || 5000 
const MONGO_URL = process.env.MONGO_URL 
const app = express()
app.use(express.json())
app.use(cors())

const connectDB = async () => {
    const conn = await mongoose.connect(MONGO_URL)
    if(conn){
        console.log(`✅ MongoDB Connected Successfully 📦`)
    }
}
connectDB();

app.post("/serviceprovider", postServiceProvider)
app.post("/providerslogin",postServiceProviderLogin)
app.get ("/providers",getProvider)
app.get("/serviceproviders", getServiceProviders)
app.post('/v1/bookslots' , postBookSlot)
app.get('/v1/getbookedslots', getAllSlots)
app.post("/v1/signups",postSignUp)
app.post("/v1/logins", postLogin)
app.post("/v1/services", postService)
app.get("/v1/services", getService)

app.listen (PORT , ()=>{
    console.log(`Server is running on ${PORT}`)
})
