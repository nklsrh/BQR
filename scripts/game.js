function Game(){

        assets = new Assets();
        player = new Player();
        env = new Environment();
        rules = new Rules();

        this.Setup = function(){
                assets.Setup(); 
                setupMouse(); 
                this.NewGame();                             
        }

        this.NewGame = function(){
                env.Setup();
                player.Setup(); 
                rules.Setup();
        }

        this.Update = function(){                
                env.Update();
                player.Update();
                rules.Update();  
				//gameQueryKeyboard();
        }

        this.Draw = function(){
                requestAnimationFrame(game.Draw);  
				canvas.width = canvas.width;  
                env.Draw(ctx);
                player.Draw(ctx); 
                                           
                //env.Tint(ctx, 0, Math.abs(Math.sin(rules.time/100) * 100), Math.sin(rules.time/100) * 30);
        }
}
