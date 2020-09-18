// Learning Objective: 
// - I will learn how to remover configuartion into enviroment variables

// INTRO
// Q: What do most development pipelines include? 
// - Several enviroment stages of development 
// - - development
// - - testing 
// - - production

// Q: What is recommended to extract way? 
// - When moving the application from each stage, it is important that I extreact away any values that need to be changed between each enviroment, such as database connections

// OVERVIEW
// Q: Where am I run code on my own computer? 
// - I am running code in its development enviroment

// Q: What will most companies have? 
// - A testing enviroment that is similar to the production enviroment
// - This envrioment will have the same versions of software and runs similar, albeit weaker, hardware.
// - Running the software on weaker hardware to mitigate the risk when moving to production servers that clients uses

// Q: Why is it important to have a testing/staging enviroment that runs all the platforms? 
// - For example you may have engineers on the Windows platform with the latest version of Node.js, with the production server running on Linux with the last stable version of Node.js
// - It is for these "platform disconects" that it is important to have a "testing/staging" enviroment that also runs the Linux and Node.js versions found on the production server
// - The staging enviroment helps to detect any regression that may occur during deployment before code reachs the user

// Q: 