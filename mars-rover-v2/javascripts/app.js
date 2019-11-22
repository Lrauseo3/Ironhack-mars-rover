let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []      
}



// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");

  if (rover.direction === "N"){
    rover.direction = "W"
  }
  else if (rover.direction === "W"){
   rover.direction = "S"
  }
  else if (rover.direction === "S"){
    rover.direction = "E"
  }
  else if (rover.direction === "E"){
    rover.direction = "N"
  }
}

function turnRight(rover){
  console.log("turnRight was called!");

  if (rover.direction === "N"){
    rover.direction = "E"
  }
  else if (rover.direction === "E"){
    rover.direction = "S"
  }
  else if (rover.direction === "S"){
    rover.direction = "W"
  }
  else if (rover.direction === "W"){
    rover.direction = "N"
  }
  
}

function moveForward(rover){
  console.log("moveForward was called!");

  if (rover.direction === "N"){
    rover.y--
  }
  else if (rover.direction === "W"){
    rover.x--
  }
  else if (rover.direction === "S"){
    rover.y++
  }
  else if (rover.direction === "E"){
    rover.x++
  }
}


  // movement - "ffflrllfrfllrlf"
  function commands(movement){



    for (let i = 0; i<movement.length ; i++ ){

      if (movement.substring(i,i+1) == "f" ){
        moveForward(rover)
      }
      else if (movement.substring(i,i+1) == "r"){
        turnRight(rover)
      }
      else if (movement.substring(i,i+1) == "l"){
        turnLeft(rover)
      }


        rover.travelLog.push(`Rover position x: ${rover.x}, y: ${rover.y}`);

    }

    console.log(rover.travelLog);


}
