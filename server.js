import express from 'express'; import mongoose from 'mongoose'; import cors from 'cors'; import dotenv from 'dotenv';
import appRoutes from './routes/applications.js'; import certRoutes from './routes/certificates.js'; import adminRoutes from './routes/admin.js';
dotenv.config(); const app=express(); app.use(cors()); app.use(express.json());
app.get('/api/health',(req,res)=>res.json({success:true,message:'CredVault API is running'}));
app.use('/api/applications',appRoutes); app.use('/api/certificates',certRoutes); app.use('/api/admin',adminRoutes);
const port=process.env.PORT||5000;
mongoose.connect(process.env.MONGODB_URI||'mongodb://127.0.0.1:27017/credvault').then(()=>app.listen(port,()=>console.log(`CredVault API listening on ${port}`))).catch(e=>{console.error('MongoDB connection failed:',e.message);process.exit(1)});
