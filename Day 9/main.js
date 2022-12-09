let data = `PUZZLE INPUT HERE`.split`\n`

let tail = [0, 0]
let head = [0, 0]
let visited = new Set(["0,0"])

//Part 2
let tails = new Array(10).fill(0).map(() => [0, 0])

for(let move of data){
    let [dir, num] = move.split` `
    
    for(let j = 0; j < +num; j++){
        //Part 1
        /*
        if(dir == 'L') head[0]--
        if(dir == 'R') head[0]++
        if(dir == 'U') head[1]--
        if(dir == 'D') head[1]++
        
        while(Math.abs(tail[0] - head[0]) > 1 || Math.abs(tail[1] - head[1]) > 1){
            if(Math.abs(tail[0] - head[0]) > 0){
                if(head[0] > tail[0]) tail[0]++
                if(head[0] < tail[0]) tail[0]--
            }
            if(Math.abs(tail[1] - head[1]) > 0){
                if(head[1] > tail[1]) tail[1]++
                if(head[1] < tail[1]) tail[1]--
            }
        }
        visited.add(tail.join`,`)*/
        
        //Part 2
        
        if(dir == 'L') tails[0][0]--
        if(dir == 'R') tails[0][0]++
        if(dir == 'U') tails[0][1]--
        if(dir == 'D') tails[0][1]++
        for(let k = 0; k < tails.length - 1; k++){
            let newHead = tails[k]
            let newTail = tails[k+1]
            
            while(Math.abs(newTail[0] - newHead[0]) > 1 || Math.abs(newTail[1] - newHead[1]) > 1){
                if(Math.abs(newTail[0] - newHead[0]) > 0){
                    if(newHead[0] > newTail[0]) newTail[0]++
                    if(newHead[0] < newTail[0]) newTail[0]--
                }
                if(Math.abs(newTail[1] - newHead[1]) > 0){
                    if(newHead[1] > newTail[1]) newTail[1]++
                    if(newHead[1] < newTail[1]) newTail[1]--
                }
            }
        }
        visited.add(tails[9].join`,`)
    }
}

console.log(visited.size)
