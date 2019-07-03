var moveUp = function(robot) {
  return robot.move();
};

var moveLeft = function(robot) {
  robot.turnLeft();
  var ok = robot.move();
  robot.turnRight();
  return ok;
};

var moveRight = function(robot) {
  robot.turnRight();
  var ok = robot.move();
  robot.turnLeft();
  return ok;
};

var moveDown = function(robot) {
  robot.turnRight();
  robot.turnRight();
  var ok = robot.move();
  robot.turnLeft();
  robot.turnLeft();
  return ok;
};

var cleanCell = function(robot, visited, x, y) {
  var id = x + "," + y;
  if (visited[id]) {
    return;
  }
  robot.clean();
  visited[id] = 1;
  if (moveUp(robot)) {
    cleanCell(robot, visited, x, y - 1);
    moveDown(robot);
  }
  if (moveLeft(robot)) {
    cleanCell(robot, visited, x - 1, y);
    moveRight(robot);
  }
  if (moveRight(robot)) {
    cleanCell(robot, visited, x + 1, y);
    moveLeft(robot);
  }
  if (moveDown(robot)) {
    cleanCell(robot, visited, x, y + 1);
    moveUp(robot);
  }
};

var cleanRoom = function(robot) {
  visited = {};
  cleanCell(robot, visited, 0, 0);
};

//alternatively
//https://www.youtube.com/watch?v=VQp7pfij7_Q

var cleanRoom = function(robot) {
  const visited = new Set();

  const dfs = (x, y, dir) => {
    const pos = `${x},${y}`;

    if (visited.has(pos)) return;
    robot.clean();
    visited.add(pos);

    const directions = [
      [0, -1], // up
      [1, 0], // right
      [0, 1], // down
      [-1, 0] // left
    ];

    // Start facing forward
    for (let i = 0; i < 4; i++) {
      const [dx, dy] = directions[(i + dir) % directions.length];
      const newX = x + dx;
      const newY = y + dy;

      const canMove = robot.move();

      if (canMove) {
        dfs(newX, newY, (dir + i) % directions.length);

        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
      }

      robot.turnRight();
    }
  };

  // Begin search at origin
  dfs(0, 0, 0);
};
