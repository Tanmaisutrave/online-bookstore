# MongoDB Atlas - Complete Step-by-Step Guide

## Step 1: Sign Up

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. You'll see three options:
   - Sign up with Google (EASIEST)
   - Sign up with email
   - Sign up with GitHub
3. Choose one and complete signup

---

## Step 2: Welcome Screen

After signing up, you'll see a welcome screen asking about your goals.
- Just click "Continue" or "Skip" - it doesn't matter

---

## Step 3: Create Organization (May appear)

If prompted:
1. Organization Name: `BookStore` (or any name)
2. Click "Next"

---

## Step 4: Create Project ✅ (YES, THIS IS REQUIRED)

**This is what you're asking about!**

1. You'll see "Create a Project" or "New Project"
2. Project Name: `BookStore` (or `bookstore-app`)
3. Click "Next"
4. Add members (optional) - just click "Create Project"

---

## Step 5: Create Database/Cluster

Now you can create your cluster:

1. Click "Build a Database" (big green button)
2. You'll see three options:
   - **Serverless** - Pay as you go
   - **Dedicated** - For production ($$$)
   - **Shared** - FREE tier ✅ (Choose this!)

3. Click "Create" under **Shared (FREE)**

---

## Step 6: Configure Cluster

1. **Cloud Provider & Region:**
   - Provider: AWS, Google Cloud, or Azure (doesn't matter)
   - Region: Choose closest to you (e.g., Mumbai, Singapore)
   - Click "Create Cluster"

2. **Cluster Name:** (optional)
   - Default is "Cluster0" - keep it or change to "BookStoreCluster"

3. Click "Create"

**Wait 1-3 minutes** for cluster to be created...

---

## Step 7: Security - Create Database User

You'll see "Security Quickstart":

1. **Authentication Method:** Username and Password (default)
2. **Username:** `bookstore`
3. **Password:** `bookstore123` (or click "Autogenerate Secure Password")
   - ⚠️ **SAVE THIS PASSWORD!** You'll need it later
4. Click "Create User"

---

## Step 8: Network Access - Whitelist IP

Still on Security Quickstart:

1. **Where would you like to connect from?**
   - Choose "My Local Environment"
2. **Add entries to your IP Access List:**
   - Click "Add My Current IP Address"
   - OR click "Add a Different IP Address"
   - Enter: `0.0.0.0/0` (allows from anywhere - for development)
   - Description: `Allow all`
3. Click "Add Entry"
4. Click "Finish and Close"

---

## Step 9: Get Connection String

1. Click "Connect" button (on your cluster)
2. Choose "Drivers"
3. **Driver:** Node.js
4. **Version:** 5.5 or later
5. Copy the connection string:

```
mongodb+srv://bookstore:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

---

## Step 10: Update Your Backend .env File

1. Open `backend/.env`
2. Replace the MONGODB_URI line with your connection string
3. **IMPORTANT:** Replace `<password>` with your actual password
4. Add database name at the end

**Example:**
```env
PORT=4001
MONGODB_URI=mongodb+srv://bookstore:bookstore123@cluster0.abc123.mongodb.net/bookstore?retryWrites=true&w=majority
JWT_SECRET=bookstore_secret_key_2024_change_in_production
NODE_ENV=development
```

**Notice:**
- `bookstore:bookstore123` - username:password
- `/bookstore?` - database name added before the `?`

---

## Step 11: Test Connection

1. Open terminal in backend folder:
```bash
cd backend
```

2. Seed the database:
```bash
npm run seed
```

**Expected output:**
```
✅ Connected to MongoDB
🗑️  Cleared existing books
✅ Books seeded successfully
👋 Database connection closed
```

3. Start the server:
```bash
npm run dev
```

**Expected output:**
```
🚀 Server is running on port 4001
📚 API Documentation: http://localhost:4001
✅ Connected to MongoDB
```

---

## Step 12: Verify in Browser

Open: http://localhost:4001/api/book

You should see JSON with book data! 🎉

---

## Visual Summary

```
Sign Up → Create Project → Create Cluster → Create User → 
Whitelist IP → Get Connection String → Update .env → 
Seed Database → Start Server → Success! 🎉
```

---

## Common Issues

### ❌ "Authentication failed"
**Solution:** Check your password in .env matches the one you created

### ❌ "Connection timeout"
**Solution:** 
- Check IP whitelist (use 0.0.0.0/0 for development)
- Check your internet connection

### ❌ "Database name not found"
**Solution:** Make sure you added `/bookstore` before the `?` in connection string:
```
...mongodb.net/bookstore?retryWrites=true...
                ^^^^^^^^^ (add this)
```

---

## Need to View Your Data?

1. Go to MongoDB Atlas dashboard
2. Click "Browse Collections"
3. You'll see your `bookstore` database with `books` collection
4. You can view, edit, and delete data here

---

## 🎉 You're Done!

Your MongoDB Atlas is now set up and connected to your backend!

Next steps:
1. Start your backend: `npm run dev`
2. Start your frontend: `cd ../frontend && npm run dev`
3. Build your full-stack app! 🚀

---

**Questions?** Contact: tanmaysutrave@gmail.com
