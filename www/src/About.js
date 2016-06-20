/*global BasicGame:true,Phaser:true*/
BasicGame.About = function (game) {

};

BasicGame.About.prototype = {

    create: function () {   
        //awesome plugin I found...
        this.kineticScrolling = this.game.plugins.add(Phaser.Plugin.KineticScrolling);
        this.kineticScrolling.configure({
            kineticMovement: true,
            timeConstantScroll: 325, //really mimic iOS
            horizontalScroll: false,
            verticalScroll: true,
            horizontalWheel: false,
            verticalWheel: true,
            deltaWheel: 40
        });
        this.kineticScrolling.start();
        //*********************** works like majik

        this.stage.backgroundColor = '#ffffff'; //white?
        this.world.setBounds(0,0,this.world.width,2000);
        
        this.backMain = this.add.button(10,10,'mainMenuBtn',this.backToMainMenu,this);
        this.backMain.scale.setTo(.5,.5)
        
        //instructions
        var instructionsStr = "Say something here...";
        
        var text1 = this.add.text(this.world.centerX, 200, instructionsStr, {
			fontFamily:	"arial",
			fontSize:	"14px",
		});
        text1.x=this.world.centerX-text1.width*0.5;
        //****************************************
        
        // developers
        var devStyle = {
            font:	"14px Courier New",
            align: "center"
        };
        var creditStr = "***********************\n"+
                        "College of the Sequoias\n"+
                        "SURGE Developers\n"+
                        "***********************\n";
        var text2 = this.add.text(this.world.centerX, 330, creditStr, devStyle);
        text2.x=this.world.centerX-text2.width*0.5;
        //****************************************
        
        var coryTxt = this.add.text(0, 420, "Cory Lewis\ncjl9703@yahoo.com", devStyle);
        coryTxt.x=this.world.centerX-coryTxt.width*0.5;
        //this.add.image(this.world.centerX, 540, 'cory').anchor.setTo(.5);
        
        var paulTxt = this.add.text(0, 640, "Paul Gonzalez-Becerra\npgonzbecer@gmail.com", devStyle);
        paulTxt.x=this.world.centerX-paulTxt.width*0.5;
        //this.add.image(this.world.centerX, 755, 'paul').anchor.setTo(.5);
        
        var johnTxt = this.add.text(0, 850, "John Redden\njtredden@gmail.com", devStyle);
        johnTxt.x=this.world.centerX-johnTxt.width*0.5;
        //this.add.image(this.world.centerX, 970, 'john').anchor.setTo(.5);
        
        
        var specialStr = "***********************\n"+
                        "Special Thanks to:\n"+
                        "***********************\n";
        var text5 = this.add.text(this.world.centerX, 1070, specialStr, devStyle);
        text5.x=this.world.centerX-text5.width*0.5;
                
        var creditStyle = {
            font:	"10px Courier New",
            align: "center"
        };
        var creditStr = "***********************\n"+
                        "Music by Audionautix\n"+
                        "is licensed under a\n"+
                        "Creative Commons Attribution license\n"+
                        "(https://creativecommons.org/licenses/by/4.0/)\n"+
                        "Artist: http://audionautix.com/\n"+
                        "***********************\n";
        var credits = this.add.text(this.world.centerX, 1200, creditStr, creditStyle);
        credits.x=this.world.centerX-credits.width*0.5;

    },

    update: function () {

        //	Do some nice funky main menu effect here

    },
    

    backToMainMenu: function (btn) {

        this.game.state.start('MainMenu');

    }


};