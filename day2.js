const fs = require('fs');

const isSafe = (levels) => {
    const dir = Math.sign(levels[1] - levels[0]);
    if (dir === 0) return false;
    for (let i = 0; i < levels.length - 1; i++) {
        const d = levels[i+1] - levels[i];
        if (Math.sign(d) !== dir || Math.abs(d) < 1 || Math.abs(d) > 3) return false;
    }
    return true;
}

const input = fs.readFileSync('input.txt', 'utf8').trim();
const reports = input.split('\n').map(line => line.split(' ').map(Number));
console.log(reports.filter(isSafe).length);
