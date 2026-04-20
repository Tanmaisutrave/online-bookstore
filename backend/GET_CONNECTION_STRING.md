# Get Your MongoDB Atlas Connection String

## You're on the right screen! Follow these steps:

### Step 1: Click "Connect" Button
On your MongoDB Atlas dashboard, click the **"Connect"** button next to your "BookStoreCluster"

### Step 2: Choose Connection Method
You'll see a popup with options:
- **Drivers** ← Click this one!
- Compass
- Shell
- MongoDB for VS Code

### Step 3: Select Driver
- Driver: **Node.js**
- Version: **5.5 or later** (or any recent version)

### Step 4: Copy Connection String
You'll see a connection string like:
```
mongodb+srv://bookstore:<password>@bookstorecluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

Click the **Copy** button next to it.

### Step 5: Update Your .env File

1. Open `backend/.env`
2. Replace the MONGODB_URI line with your connection string
3. **IMPORTANT Changes:**
   - Replace `<password>` with your actual database user password
   - Add `/bookstore` before the `?` symbol

**Example:**
```env
PORT=4001
MONGODB_URI=mongodb+srv://bookstore:YOUR_ACTUAL_PASSWORD@bookstorecluster.xxxxx.mongodb.net/bookstore?retryWrites=true&w=majority
JWT_SECRET=bookstore_secret_key_2024_change_in_production
NODE_ENV=development
```

### Step 6: Test It
```bash
npm run seed
```

You should see:
```
✅ Connected to MongoDB
🗑️  Cleared existing books
✅ Books seeded successfully
```

---

## Quick Checklist:
- [ ] Click "Connect" button
- [ ] Choose "Drivers"
- [ ] Copy connection string
- [ ] Replace `<password>` with your actual password
- [ ] Add `/bookstore` before the `?`
- [ ] Save .env file
- [ ] Run `npm run seed`

---

**You're almost there! Just click that "Connect" button!** 🚀
