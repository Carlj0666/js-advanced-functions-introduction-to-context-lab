// Your code here

let createEmployeeRecord = function(array) {
  return {
  firstName: array[0],
  familyName: array[1],
  title: array[2],
  payPerHour: array[3],
  timeInEvents: [],
  timeOutEvents: []
  }
}

//need to walk through
/*test let array = ["key1", "key2", "key3", ["one", "two", "three"]]
console.log(createEmployeeRecords(array)) */

let createEmployeeRecords = function(employees) {
  return employees.map(function(employee) {
    return createEmployeeRecord(employee)
  })
}

///create  timeIn object and pass into the timeInEvenets array in the employee record obj
let createTimeInEvent = function(employee, dateTime) {
  let dateTimeArray = dateTime.split(" ")
  let time = parseInt(dateTimeArray[1])

  let timeIn = {
    type: "TimeIn",
    date: dateTimeArray[0],
    hour: time
  }
  employee.timeInEvents.push(timeIn)
  return employee
}

let createTimeOutEvent = function(employee, dateTime) {
  let dateTimeArray = dateTime.split(" ")

  let timeOut = {
    type: "TimeOut",
    date: dateTimeArray[0],
    hour: parseInt(dateTimeArray[1])
  }
  employee.timeOutEvents.push(timeOut)
  return employee
}

// let createTimeEvent = function (dateTime, type){
//   let dateTimeArray = dateTime.split(" ")
//   let date = dateTimeArray[0]
//   let time = parseInt(dateTimeArray[1])
//   let timeEvent = {
//       type: `Time${type}`,
//       date: date,
//       hour: time
//     }
//   return timeEvent
// }
// let createTimeInEvent = function(employee, dateTime) {
//   let timeIn = createTimeEvent(dateTime, "In")
//   employee.timeInEvents.push(timeIn)
//   return employee
// }
// let createTimeOutEvent = function(employee, dateTime) {
//   let timeOut = createTimeEvent(dateTime, "Out")
//   employee.timeOutEvents.push(timeOut)
//   return employee
// }


// const parseTime = function(dateTime) {
//   return parseInt(dateTime.split(" ")[1])
// }
// const parseDate = function (dateTime) {
//   return dateTime.split(" ")[0]
// }
// let createTimeEvent = function (dateTime, type){
//   let date = parseDate(dateTime)
//   let time = parseTime(dateTime)
//   let timeEvent = {
//       type: `Time${type}`,
//       date: date,
//       hour: time
//     }
//   return timeEvent
// }
// let createTimeInEvent = function(employee, dateTime) {
//   let timeIn = createTimeEvent(dateTime, "In")
//   employee.timeInEvents.push(timeIn)
//   return employee
// }
// let createTimeOutEvent = function(employee, dateTime) {
//   let timeOut = createTimeEvent(dateTime, "Out")
//   employee.timeOutEvents.push(timeOut)
//   return employee
// }

// let hoursWorkedOnDate = function(employee, dateInQuestion) {
  

//   let dateIn = employee.timeInEvents[0].date
//   console.log(dateIn)
//   console.log(dateInQuestion)
//   if (dateInQuestion == dateIn) {
    
//     let dateTimeIn = employee.timeInEvents.forEach(function(shiftIn) {
//      dateTimeIn = Math.abs(shiftIn.hour)

//      console.log(dateTimeIn)
//      return dateTimeIn
     
//     })
//     let dateTimeOut = employee.timeOutEvents.forEach(function(shiftOut) {
//       dateTimeOut = Math.abs(shiftOut.hour)
//       console.log(shiftOut.hour)
//       return dateTimeOut
//     })

//     dateTimeIn = dateTimeIn / 100 // tried moving math into forEach loops
//     dateTimeOut = dateTimeOut / 100
//     let hoursWorked = dateTimeIn - dateTimeOut
//     console.log("hoursWorked?", hoursWorked)
//     return hoursWorked
//   }
//   console.log(hoursWorked)
//   return hoursWorked
  
  
  
  // let timeInFunc = dateTimeIn.forEach(function(shiftIn) {
  //   console.log(shiftIn.hour)
  //   return shiftIn.hour
  // })

  // let dateTimeOut = employee.timeOutEvents
  // let timeOutFunc = dateTimeOut.forEach(function(shiftOut) {
  //   console.log(shiftOut.hour)
  //   return shiftOut.hour
  // })

  // console.log(dateTimeIn)
  // console.log(dateTimeOut)

  // let dateTimeIn = employee.timeInEvents[0]
  // let hourIn = dateTimeIn.hour
  // let dateTimeOut = employee.timeOutEvents[0]
  // let hourOut = dateTimeOut.hour
  // hourIn = hourIn / 100
  // hourOut = hourOut / 100
  // console.log(timeInFunc)
  // timeInFunc = timeInFunc / 100
  // timeOutFunc = timeOutFunc / 100
  // let hoursWorked = timeInFunc - timeOutFunc
 
  // return hoursWorked
// }

let hoursWorkedOnDate = function(employee, soughtDate){
  let inEvent = employee.timeInEvents.find(function(e){
      return e.date === soughtDate
  })

  let outEvent = employee.timeOutEvents.find(function(e){
      return e.date === soughtDate
  })

  return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function(employee, date) {
  let pay = employee.payPerHour
  let hoursWorked = hoursWorkedOnDate(employee, date)
  return pay * hoursWorked
}

let allWagesFor = function(employee) {
  
}
