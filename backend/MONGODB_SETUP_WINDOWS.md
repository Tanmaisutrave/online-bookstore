# MongoDB Setup Guide for Windows

## Option 1: Install MongoDB Community Edition (Recommended)

### Step 1: Download MongoDB
1. Go to: https://www.mongodb.com/try/download/community
2. Select:
   - Version: Latest (7.0 or higher)
   - Platform: Windows
   - Package: MSI
3. Click "Download"

### Step 2: Install MongoDB
1. Run the downloaded `.msi` file
2. Choose "Complete" installation
3. **Important:** Check "Install MongoDB as a Service"
4. **Important:** Check "Install MongoDB Compass" (GUI tool)
5. Click "Next" and "Install"

### Step 3: Verify Installation
Open Command Prompt or PowerShell and run:
```bash
mongod --version
```

You should see the MongoDB version information.

### Step 4: Start MongoDB Service
MongoDB should start automatically as a Windows service. To verify:

**Check if service is running:**
```bash
net start | findstr MongoDB
```

**If not running, start it:**
```bash
net start MongoDB
```

**Or use Services app:**
1. Press `Win + R`
2. Type `services.msc`
3. Find "MongoDB Server"
4. Right-click → Start

### Step 5: Test Connection
```bash
mongosh
```

You should see:
```
Current Mongosh Log ID: ...
Connecting to: mongodb://127.0.0.1:27017
Using MongoDB: 7.0.x
```

Type `exit` to quit.

---

## Option 2: MongoDB Atlas (Cloud - No Installation)

If you don't want to install MongoDB locally, use MongoDB Atlas (free tier):

### Step 1: Create Account
1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up for free

### Step 2: Create Cluster
1. Click "Build a Database"
2. Choose "FREE" tier (M0)
3. Select a cloud provider and region
4. Click "Create Cluster"

### Step 3: Create Database User
1. Go to "Database Access"
2. Click "Add New Database User"
3. Username: `bookstore_user`
4. Password: Create a strong password
5. Click "Add User"

### Step 4: Whitelist IP Address
1. Go to "Network Access"
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
4. Click "Confirm"

### Step 5: Get Connection String
1. Go to "Database" → Click "Connect"
2. Choose "Connect your application"
3. Copy the connection string:
```
mongodb+srv://bookstore_user:<password>@cluster0.xxxxx.mongodb.net/bookstore?retryWrites=true&w=majority
```

### Step 6: Update .env File
Replace `<password>` with your actual password:
```
MONGODB_URI=mongodb+srv://bookstore_user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/bookstore?retryWrites=true&w=majority
```

---

## Quick Commands

### Start MongoDB (Local)
```bash
net start MongoDB
```

### Stop MongoDB (Local)
```bash
net stop MongoDB
```

### Check MongoDB Status
```bash
mongosh --eval "db.adminCommand('ping')"
```

### View Databases
```bash
mongosh
show dbs
use bookstore
show collections
```

---

## Troubleshooting

### Error: "mongod is not recognized"
**Solution:** Add MongoDB to PATH:
1. Find MongoDB installation path (usually `C:\Program Files\MongoDB\Server\7.0\bin`)
2. Press `Win + X` → System → Advanced system settings
3. Click "Environment Variables"
4. Under "System variables", find "Path"
5. Click "Edit" → "New"
6. Add: `C:\Program Files\MongoDB\Server\7.0\bin`
7. Click "OK" and restart terminal

### Error: "Failed to connect"
**Solution:**
1. Check if MongoDB service is running: `net start MongoDB`
2. Check firewall settings
3. Verify port 27017 is not blocked

### Error: "Access Denied"
**Solution:** Run Command Prompt as Administrator

---

## Using MongoDB Compass (GUI)

MongoDB Compass is a visual tool for MongoDB:

1. Open "MongoDB Compass"
2. Connection string: `mongodb://localhost:27017`
3. Click "Connect"
4. You can now view/edit databases visually

---

## Next Steps

After MongoDB is running:

1. **Seed the database:**
```bash
cd backend
npm run seed
```

2. **Start your backend:**
```bash
npm run dev
```

3. **Verify it's working:**
Open browser: http://localhost:4001

---

## Need Help?

- MongoDB Documentation: https://docs.mongodb.com/
- MongoDB Community: https://www.mongodb.com/community/forums/
- Contact: tanmaysutrave@gmail.com
