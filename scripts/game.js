function Game(){

        assets = new Assets();
        player = new Player();
        env = new Environment();
        rules = new Rules();
        glados = new AI();

        this.Setup = function(){
                assets.Setup(); 
                setupMouse(); 
                this.NewGame();                             
        }

        this.NewGame = function(){
                env.Setup();
                player.Setup(); 
                rules.Setup();
                glados.Setup();
        }

        this.Update = function(){                
                env.Update();
                player.Update();
                rules.Update();  
                glados.Update();
		//gameQueryKeyboard();
                updateKeyboard();
                //updateKeyboard_new();
        }

        this.Draw = function(){
                requestAnimationFrame(game.Draw);  
		canvas.width = canvas.width;  
                env.Draw(ctx);
                player.Draw(ctx); 
                glados.Draw(ctx);         
                //env.Tint(ctx, 0, Math.abs(Math.sin(rules.time/100) * 100), Math.sin(rules.time/100) * 30);
        }
}
