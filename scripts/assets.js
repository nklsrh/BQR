function Assets(){
        
        this.player = new Image();
        this.env = new Image();

        this.Setup = function(){
                this.player.src = "./assets/firefox.png";
                this.env.src = "./assets/tilesheet.png";
        }
}
