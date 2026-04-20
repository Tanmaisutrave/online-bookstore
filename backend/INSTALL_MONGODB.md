# 🚀 Quick MongoDB Installation for Windows

MongoDB is NOT installed on your system. Here are your options:

---

## ⚡ EASIEST OPTION: Use MongoDB Atlas (Cloud - FREE)

**No installation needed! Takes 5 minutes.**

### Steps:

1. **Go to MongoDB Atlas:**
   - Visit: https://www.mongodb.com/cloud/atlas/register
   - Click "Try Free"

2. **Sign up:**
   - Use your email or Google account
   - It's completely FREE (no credit card needed)

3. **Create a FREE cluster:**
   - Click "Build a Database"
   - Select "M0 FREE" tier
   - Choose any region close to you
   - Click "Create"

4. **Create a database user:**
   - Username: `bookstore`
   - Password: `bookstore123` (or your choice)
   - Click "Create User"

5. **Allow network access:**
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere"
   - Click "Confirm"

6. **Get connection string:**
   - Click "Connect" → "Connect your application"
   - Copy the connection string
   - It looks like:
   ```
   mongodb+srv://bookstore:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

7. **Update your backend/.env file:**
   ```
   MONGODB_URI=mongodb+srv://bookstore:bookstore123@cluster0.xxxxx.mongodb.net/bookstore?retryWrites=true&w=majority
   ```
   (Replace `<password>` with your actual password and update the cluster URL)

8. **Done! Start your backend:**
   ```bash
   cd backend
   npm run seed
   npm run dev
   ```

---

## 💻 OPTION 2: Install MongoDB Locally

### Quick Install Steps:

1. **Download MongoDB:**
   - Go to: https://www.mongodb.com/try/download/community
   - Click "Download" (Windows MSI)

2. **Install:**
   - Run the downloaded file
   - Choose "Complete" installation
   - ✅ Check "Install MongoDB as a Service"
   - ✅ Check "Install MongoDB Compass"
   - Click "Install"

3. **Verify installation:**
   Open PowerShell and run:
   ```powershell
   mongod --version
   ```

4. **Start MongoDB:**
   ```powershell
   net start MongoDB
   ```

5. **Your backend/.env is already configured:**
   ```
   MONGODB_URI=mongodb://localhost:27017/bookstore
   ```

6. **Start your backend:**
   ```bash
   cd backend
   npm run seed
   npm run dev
   ```

---

## 🎯 Which Option Should I Choose?

| Feature | MongoDB Atlas (Cloud) | Local Installation |
|---------|----------------------|-------------------|
| Setup Time | 5 minutes | 10-15 minutes |
| Installation | None | Required |
| Internet Required | Yes | No |
| Free Tier | 512 MB storage | Unlimited |
| Best For | Quick start, learning | Production, offline work |

**Recommendation:** Start with MongoDB Atlas (cloud) - it's faster and easier!

---

## ✅ After Setup - Test Your Backend

1. **Seed the database:**
```bash
cd backend
npm run seed
```

Expected output:
```
✅ Connected to MongoDB
🗑️  Cleared existing books
✅ Books seeded successfully
👋 Database connection closed
```

2. **Start the server:**
```bash
npm run dev
```

Expected output:
```
🚀 Server is running on port 4001
📚 API Documentation: http://localhost:4001
✅ Connected to MongoDB
```

3. **Test in browser:**
Open: http://localhost:4001/api/book

You should see a list of books!

---

## 🆘 Need Help?

If you face any issues:
1. Check `MONGODB_SETUP_WINDOWS.md` for detailed troubleshooting
2. Make sure your `.env` file has the correct MONGODB_URI
3. Contact: tanmaysutrave@gmail.com

---

## 🎉 Quick Start (After MongoDB is Ready)

```bash
# Terminal 1 - Backend
cd backend
npm run seed    # First time only
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

Your full-stack app will be running! 🚀
