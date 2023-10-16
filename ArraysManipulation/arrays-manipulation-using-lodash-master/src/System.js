
const os = require('os')

//import OS module

//Create a function to get the name of the operating system of host machine.​
const getOSName=()=>{
  return os.arch()
}
//Create a function to get returns the number of free memory of the system in bytes.​
const getFreeMemory=()=>{
  return os.freemem()
}
//Create a function to get the information about current user of the system.​
const getCurrentUser=()=>{
  return os.userInfo()
}
//Create a function to get the information of the hostname.
const getHostName=()=>{
  return os.hostname()
}
//Create a function to get the information about the CPU.
const getCPUDetails=()=>{
  return os.cpus()
}


module.exports = {
  getOSName,
  getFreeMemory,
  getCurrentUser,
  getHostName,
  getCPUDetails
}