function Game(){

        assets = new Assets();
        player = new Player();
        env = new Environment();
        
        this.Setup = function(){
                assets.Setup(); 
                setupMouse(); 
                this.NewGame();                             
        }

        this.NewGame = function(){
                env.Setup();
                player.Setup(); 
        }

        this.Update = function(){
                env.Update();
                player.Update();
        }

        this.Draw = function(){
                canvas.width = canvas.width;
                env.Draw(ctx);
                player.Draw(ctx);
                requestAnimationFrame(game.Draw);
        }
}
