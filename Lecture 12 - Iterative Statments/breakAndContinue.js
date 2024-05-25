/*
break - get out of the loop
continue - skip the current iteration
*/

// print n numbers leaving 1 number each time

const n = 10;
for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) console.log(i);
}
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}

// that prints the age in decreasing order starting from n till the minimum requirement for voting

const n2 = 60;
const minumumRequirementForVoting = 18;
for (let i = n2; i >= minumumRequirementForVoting; i--) console.log(i);
for (let i = n2; true; i--) {
    if (i < minumumRequirementForVoting) break;
    console.log(i);
}
