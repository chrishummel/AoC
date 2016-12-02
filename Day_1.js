// Part 1
function distance(distanceStr) {
    const distanceArr = distanceStr.split(', ');
    const facingMap = [[0,1],[1,0],[0,-1], [-1,0]]
    const startingPos = {
        position: [0,0],
        facingMapIdx: 0
    }
    const positionObj = distanceArr.reduce(function(pos, instruc) {
        const currentPos = pos.position;
        let currentFacing = pos.facingMapIdx
        const turnDir = instruc.substr(0,1);
        const turnDist = Number(instruc.substr(1));
        
        currentFacing = (turnDir === 'R') ? currentFacing + 1 : currentFacing -1
        if (currentFacing === -1) {
            currentFacing = 3;
        } else if (currentFacing === 4) {
            currentFacing = 0;
        }

        const move = facingMap[currentFacing].map( x => x * turnDist )

        currentPos[0] += move[0];
        currentPos[1] += move[1];

        return { position: currentPos, facingMapIdx: currentFacing}

    }, startingPos)

    distance = Math.abs(positionObj.position[0]) + Math.abs(positionObj.position[1]);
    return distance
}

var part1 = distance('L4, L3, R1, L4, R2, R2, L1, L2, R1, R1, L3, R5, L2, R5, L4, L3, R2, R2, L5, L1, R4, L1, R3, L3, R5, R2, L5, R2, R1, R1, L5, R1, L3, L2, L5, R4, R4, L2, L1, L1, R1, R1, L185, R4, L1, L1, R5, R1, L1, L3, L2, L1, R2, R2, R2, L1, L1, R4, R5, R53, L1, R1, R78, R3, R4, L1, R5, L1, L4, R3, R3, L3, L3, R191, R4, R1, L4, L1, R3, L1, L2, R3, R2, R4, R5, R5, L3, L5, R2, R3, L1, L1, L3, R1, R4, R1, R3, R4, R4, R4, R5, R2, L5, R1, R2, R5, L3, L4, R1, L5, R1, L4, L3, R5, R5, L3, L4, L4, R2, R2, L5, R3, R1, R2, R5, L5, L3, R4, L5, R5, L3, R1, L1, R4, R4, L3, R2, R5, R1, R2, L1, R4, R1, L3, L3, L5, R2, R5, L1, L4, R3, R3, L3, R2, L5, R1, R3, L3, R2, L1, R4, R3, L4, R5, L2, L2, R5, R1, R2, L4, L4, L5, R3, L4')

console.log('Part 1 Answer:' , part1)

//Part 2
function distance(data) {
    const steps = data.split(', ');

    let x = 0, y = 0;
    let d = [0, 1];
    let visited = new Set();
    visited.add(`${x},${y}`);

    function solve() {
        for (let i = 0; i < steps.length; i++) {
            let step = steps[i].trim();
            const direction = step.charAt(0);
            const distance = +step.substr(1);
            d = direction === 'L' ? [d[1], -d[0]] : [-d[1], d[0]];
            for (let j = 0; j < distance; j++) {
                x += d[0];
                y += d[1];
                 const key = `${x},${y}`;
                if (visited.has(key)) {
                    return Math.abs(x) + Math.abs(y);
                } else {
                  visited.add(key);
                }
         }
        }
        return Math.abs(x) + Math.abs(y);
    }
    return solve();
}

var part2 = distance('L4, L3, R1, L4, R2, R2, L1, L2, R1, R1, L3, R5, L2, R5, L4, L3, R2, R2, L5, L1, R4, L1, R3, L3, R5, R2, L5, R2, R1, R1, L5, R1, L3, L2, L5, R4, R4, L2, L1, L1, R1, R1, L185, R4, L1, L1, R5, R1, L1, L3, L2, L1, R2, R2, R2, L1, L1, R4, R5, R53, L1, R1, R78, R3, R4, L1, R5, L1, L4, R3, R3, L3, L3, R191, R4, R1, L4, L1, R3, L1, L2, R3, R2, R4, R5, R5, L3, L5, R2, R3, L1, L1, L3, R1, R4, R1, R3, R4, R4, R4, R5, R2, L5, R1, R2, R5, L3, L4, R1, L5, R1, L4, L3, R5, R5, L3, L4, L4, R2, R2, L5, R3, R1, R2, R5, L5, L3, R4, L5, R5, L3, R1, L1, R4, R4, L3, R2, R5, R1, R2, L1, R4, R1, L3, L3, L5, R2, R5, L1, L4, R3, R3, L3, R2, L5, R1, R3, L3, R2, L1, R4, R3, L4, R5, L2, L2, R5, R1, R2, L4, L4, L5, R3, L4')

console.log('Part 2 Answer:' , part2)
