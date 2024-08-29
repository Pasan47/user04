const EventEmitter = require("events")

class GameRoom extends EventEmitter{
    constructor(roomId){
        super();
        this.roomId = roomId;
        this.players = [];
        
    }

    join(player) {
        this.players.push(player);
        this.emit("playerJoined",player)
    }
    leave(player){
        const index = this.players.indexOf(player);
        if(index !== -1) {
            this.players.splice(index,1);
            this.emit("playerLeft",player);
        }
    }
}

//* Create a new room
const room = new GameRoom("room1");

//* Event Listener
room.on("playerJoined",(player)=>{
    console.log(`${player} joined room`);
})
room.on("playerLeft",(player)=>{
    console.log(`${player} left the room`);
})


//* Player join and leave the room

room.join("Player 1")
room.join("Player 2")
room.leave("Player 1")
