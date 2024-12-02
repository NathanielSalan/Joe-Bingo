/* This is the JS file for Joedle.
v0.0

Please remember to comment what your method does.
Give a breif description, and state what each Parameters are.

Feel free to credit yourself in the description!
*/

// Global Variables
let gameStart = false; //A global boolean variable to be checked if the game is working or not.

//Placeholder prompt sheet for testing purposes only.
// More words added by Tharin
let wordList=[
			"Painting",
			"Sketching",
			"Photography",
			"Hiking",
			"Biking",
			"Bird watching",
			"Gardening",
			"Scrapbooking",
			"Knitting",
			"Crocheting",
			"Sewing",
			"Embroidery",
			"Quilting",
			"Beading",
			"Calligraphy",
			"Pottery",
			"Sculpting",
			"Woodworking",
			"Origami",
			"Jewelry making",
			"Candle making",
			"Soap making",
			"Paper crafting",
			"Flower arranging",
			"Card making",
			"Puzzle solving",
			"Model building",
			"Coin collecting",
			"Stamp collecting",
			"Antique collecting",
			"Doll making",
			"Toy collecting",
			"Lego building",
			"Magic tricks",
			"Kite flying",
			"Board games",
			"Chess",
			"Checkers",
			"Mahjong",
			"Poker",
			"Bridge",
			"Darts",
			"Archery",
			"Bowling",
			"Table tennis",
			"Foosball",
			"Pool (Billiards)",
			"Air hockey",
			"Ice skating",
			"Roller skating",
			"Skiing",
			"Snowboarding",
			"Surfing",
			"Fishing",
			"Camping",
			"Rock climbing",
			"Kayaking",
			"Canoeing",
			"Sailing",
			"Rowing",
			"Scuba diving",
			"Snorkeling",
			"Swimming",
			"Running",
			"Jogging",
			"Tennis",
			"Badminton",
			"Squash",
			"Racquetball",
			"Golf",
			"Basketball",
			"Soccer",
			"Volleyball",
			"Baseball",
			"Softball",
			"Football",
			"Cricket",
			"Rugby",
			"Lacrosse",
			"Handball",
			"Ultimate frisbee",
			"Martial arts",
			"Boxing",
			"Kickboxing",
			"Fencing",
			"Wrestling",
			"Judo",
			"Karate",
			"Taekwondo",
			"Muay Thai",
			"Jiu-jitsu",
			"Yoga",
			"Pilates",
			"Zumba",
			"Dance",
			"Ballet",
			"Hip-hop",
			"Jazz dancing",
			"Ballroom dancing",
			"Salsa",
			"Tango",
			"Waltz",
			"Breakdancing",
			"Swing dancing",
			"Tap dancing",
			"Line dancing",
			"Square dancing",
			"Figure skating",
			"Belly dancing",
			"Pole dancing",
			"Cheerleading",
			"Gymnastics",
			"Trampolining",
			"Parkour",
			"Freerunning",
			"Jump rope",
			"Juggling",
			"Circus arts",
			"Fire spinning",
			"Poi",
			"Diabolo",
			"Hula hooping",
			"Slacklining",
			"Tightrope walking",
			"Magic",
			"Ventriloquism",
			"Comedy",
			"Stand-up comedy",
			"Improvisation",
			"Public speaking",
			"Debating",
			"Storytelling",
			"Writing",
			"Poetry",
			"Songwriting",
			"Creative writing",
			"Journaling",
			"Blogging",
			"Vlogging",
			"Podcasting",
			"Filmmaking",
			"Video editing",
			"Animation",
			"Graphic design",
			"Web design",
			"App development",
			"Coding",
			"Game development",
			"Virtual reality",
			"3D printing",
			"Robotics",
			"Electronics",
			"Arduino projects",
			"Raspberry Pi projects",
			"Computer programming",
			"Cybersecurity",
			"Cryptography",
			"Hacking",
			"Artificial intelligence",
			"Machine learning",
			"Data science",
			"Cryptocurrency",
			"Stock trading",
			"Investing",
			"Real estate investing",
			"Personal finance",
			"Budgeting",
			"Couponing",
			"Thrifting",
			"Minimalism",
			"Decluttering",
			"Interior design",
			"Home renovation",
			"DIY projects",
			"Furniture restoration",
			"Upcycling",
			"Recycling",
			"Sustainable living",
			"Composting",
			"Bee keeping",
			"Permaculture",
			"Hydroponics",
			"Urban farming",
			"Landscaping",
			"Backpacking",
			"Geocaching",
			"Metal detecting",
			"Fossil hunting",
			"Rockhounding",
			"Stargazing",
			"Astronomy",
			"Astrology",
			"Meteorology",
			"Weather watching",
			"Kite surfing",
			"Paragliding",
			"Skydiving",
			"Base jumping",
			"Bungee jumping",
			"Hang gliding",
			"Hot air ballooning",
			"Gliding",
			"Flying (piloting)",
			"Drone flying",
			"Model aircraft building",
			"RC cars",
			"RC boats",
			"RC planes",
			"Kart racing",
			"Motocross",
			"Off-roading",
			"Auto racing",
			"Go-karting",
			"Motorcycling",
			"Boating",
			"Sailing",
			"Yachting",
			"Jet skiing",
			"Water skiing",
			"Wakeboarding",
			"Parasailing",
			"Windsurfing",
			"Rowing",
			"Dragon boating",
			"Canoe polo",
			"Rafting",
			"Bodyboarding",
			"Spearfishing",
			"Free diving",
			"Ice fishing",
			"Fly fishing",
			"Deep sea fishing",
			"Bow fishing",
			"Catch and release fishing",
			"Fishing tournaments",
			"Carpentry",
			"Metalworking",
			"Blacksmithing",
			"Glass blowing",
			"Mosaic making",
			"Leather crafting",
			"Paper marbling",
			"Stained glass",
			"Basket weaving",
			"Rug making",
			"Tapestry",
			"Macramé",
			"Felting",
			"Silk painting",
			"Fabric dyeing",
			"Textile arts",
			"Loom weaving",
			"Patchwork",
			"Knitting circles",
			"Yarn bombing",
			"Thread painting",
			"Appliqué",
			"Costume making",
			"Cosplay",
			"Prop making",
			"Mask making",
			"Puppet making",
			"Miniature painting",
			"Action figure collecting",
			"Comic book collecting",
			"Trading card collecting",
			"Vinyl record collecting",
			"Antique furniture collecting",
			"Vintage clothing collecting",
			"Fossil collecting",
			"Mineral collecting",
			"Arrowhead collecting",
			"Autograph collecting",
			"Book collecting",
			"Rare book collecting",
			"Manuscript collecting",
			"Letter writing",
			"Pen pal exchanges",
			"Stamp collecting",
			"Coin collecting",
			"Exonumia collecting",
			"Token collecting",
			"Medal collecting",
			"Button collecting",
			"Vintage electronics collecting",
			"Classic car collecting",
			"Model train collecting",
			"Model ship building",
			"Model airplane building",
			"Puzzle building",
			"Jigsaw puzzles",
			"Crossword puzzles",
			"Sudoku",
			"Rubik’s cube",
			"Brain teasers",
			"Escape room games",
			"Board games",
			"Card games",
			"Chess",
			"Checkers",
			"Backgammon",
			"Go",
			"Shogi",
			"Dominoes",
			"Mahjong",
			"Bridge",
			"Poker",
			"Solitaire",
			"Magic: The Gathering",
			"Yu-Gi-Oh!",
			"Pokemon trading card game",
			"Tabletop RPGs",
			"Dungeons and Dragons",
			"Pathfinder",
			"Warhammer 40k",
			"Miniature wargaming",
			"LARPing",
			"Historical reenactments",
			"Live-action role-playing",
			"Escape rooms",
			"Improv comedy",
			"Stand-up comedy",
			"Puppetry",
			"Ventriloquism",
			"Mime",
			"Street performing",
			"Busking",
			"Clowning",
			"Balloon twisting",
			"Magic shows",
			"Storytelling",
			"Speech writing",
			"Toastmastering",
			"Motivational speaking",
			"Debating",
			"Spoken word poetry",
			"Slam poetry",
			"Rap battles",
			"Freestyle rapping",
			"Songwriting",
			"Music composition",
			"Musical arrangement",
			"Conducting",
			"Singing",
			"Choral singing",
			"Opera",
			"Musical theater",
			"Ballet",
			"Jazz dancing",
			"Modern dance",
			"Tap dance",
			"Ballroom dance",
			"Latin dance",
];


function begin(){
	/* This method will trigger when the page is loaded.
	
	Remember, this will load before anything is added to the body.
	This means any Id-pointers will not work as the page will be blank
	when this function is triggered.
	
	If you want stuff to happen at the start, add it here.
	
	@Nathan
	*/
	startReset();	
}

function popup(inText){
	/* This method is used to create a popup with a message given.
	
	Parameter used:
		inText = Message you want in popup.
	
	@Nathan
	*/
	
	alert(inText);
}

function startReset(){
	/*	This function is used to start the game.
	It will start by adding random pre-made prompts into all
	button cells in the bingo board.
	
	!WIP:
	-Working on the gameStart trigger
	-Working on implimenting getting texts from an external JSON file
	
	@Nathan
	*/
	
	
	if(!gameStart){
		
		// Nested loop where variable 'i' is the row and variable 'j' is column.
		for(let i=0; i<=4;i++){ 
		
			for(let j=0; j<=4;j++){
			
				var lineNum = Math.floor(Math.random() * wordList.length);
				buttonProjector('cell-'+i+""+j,wordList[lineNum]);
			
			}
		}
		
		buttonProjector("cell-22","JavaScript (FREE)");
		//gameStart = true;
		
	}
	
}

function buttonTrigger(buttonID){
	/*	This method will handle what will happen when a button is pressed.
	Still currently WIP.

	popup("Pop!");
	
	@Nathan, Tharin
	*/
	
	
	var toggleButton = document.getElementById(buttonID);
	/* We are getting the element using the id attribute and storing it
	into a variable named toggledButton.
	
	This way we are able to edit the attributes in the element itself.
	*/
	
	toggleButton.classList.toggle('active');
	/* Here we are using the variable 'toggleButton' (Which has the element stored inside)
	We are then turning the element's toggle atrribute 'active'.
	
	All this does is to use the CSS table of the class cellButton's subtable where button is active. (Look into CSS file)
	This changes the color of the toggled button.
	
	courtesy of Tharin.
	*/
	
	
	if(toggleButton.value == "untap"){
		
		toggleButton.value = "tap";
		
	} else if(toggleButton.value == "tap"){
		
		toggleButton.value = "untap";
	}
	/* Togglable fuctionality.
	When button is pressed, the button's value is then checked...
		
		if this button's value="untap" (not clicked) then,
			change button's value to "tap"
			
		else 
			
		if this button's value="tap" (clicked) then,
			change button's value to "untap"
			
	We use this to determine whether the button is pressed or not.
	Later, we can compare all these values and check if bingo was made or not.
	*/
	
}

function paraProjector(inDiv, writeThis) {
	/* This funtion is used to add <p> into the target div.
	It will clear the given div entirely and replace it with the <p>. 
	
	Parameter used:
		inDiv = id of div
		writeThis = text to be written in <p>
	
	@Nathan
	*/
	
	var thisDiv = document.getElementById(inDiv);
	thisDiv.innerHTML="<p class='buttonText'>"+writeThis+"</p>";
}

function buttonProjector(buttonID, writeThis){
	/* This function is used add text into the given button.
	This will clear whatever text that was in the button before.
	
	Parameter used:
		buttonID = id of the button
		writeThis = text to be writtin in the button
		
	@Nathan
	*/
	
	var thisButton = document.getElementById(buttonID);
	thisButton.innerHTML="<p class='buttonText'>"+writeThis+"</p>";
}