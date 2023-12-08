# MC Hospital Management System

This a demo hospital management website project by Minh An and Hieu Lam, where we can perform some of the basic function of a hospital management system like patient registration, user profile, inventory management, create report,...

# Team Members 

- [@Minh An](https://github.com/minhtrannnn)
- [@Hieu Lam](https://github.com/DaSonGo)

# Running the Project Locally

Install dependencies

Open the folder Arafat_Project

Open VS Code terminal

BACKEND 

#####################

=> cd Backend

=> npm install

=> npm start 

=> Checking connection with MongoDB database (there will be an .env file containing the link and credentials needed to connect to mongodb database along with a token key that allows 
authorization towards the hosted database website)

#####################

FRONTEND

#####################

=> cd FrontEnd

=> npm install

=> npm start

#####################


=> Local Host: http://localhost:3000/

# Initial Credentials (Both Staff and Admin)

ID - 20020106

Password - minhan

# Database Back Up

Install mongodb datbase tool: https://www.mongodb.com/try/download/database-tools (Setup in C:\Drive)

Open System Properties

=> Click on Environment Variables 

=> Edit System Variables/Path

=> Add New Variables: ("Path towards extracted folder ...\MongoDB\Tools\100\bin) 

=> Open Window Terminal (cmd)

=> cd to HospotalManagementBackup

=> mongodump "MONGO_URI"(in the env. file)

=> "For future develope we are going to set up a automate backup procedure to avoid the inconvinience in backing up data manually"

# Function and Data
https://sore-pear-squid-wig.cyclic.app/admin
https://sore-pear-squid-wig.cyclic.app/meds
https://sore-pear-squid-wig.cyclic.app/staffs
https://sore-pear-squid-wig.cyclic.app/patients
https://sore-pear-squid-wig.cyclic.app/reports

- Patient Overview Dashboard (Display all patients)

- Staff Profile (Display staff basic profile)

- Patient Registration (Register patient data and update it to the database)

- Users Report (Display all patients info as well as their prescription, status, and admitted date)

- Create Report (Register patients report info and update it to the database)

- Inventory Management (Display Inventory Overview)

- Add Admin, Staff (Registering admin/staff and update them to the database)

