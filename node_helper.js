var NodeHelper = require("node_helper");

// add require of other javascriot components here
// var xxx = require('yyy') here

module.exports = NodeHelper.create({

	init(){
		console.log("init module helper " +this.name);
	},

	start() {
		console.log('Starting module helper:' +this.name);
	},

	stop(){
		console.log('Stopping module helper: ' +this.name);
	},

	// handle messages from our module// each notification indicates a different messages
	// payload is a data structure that is different per message.. up to you to design this
	socketNotificationReceived(notification, payload) {
		console.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
		// if config message from module
		if (notification === "CONFIG") {
			// save payload config info
			this.config=payload
			// wait 15 seconds, send a message back to module
			setTimeout(()=> { this.sendSocketNotification("message_from_helper"," this is a test_message")}, 15000)
		}
		else if(notification === "TURN_ON") {
		}
		else if(notification === "TURN_OFF") {
		}

	},

});
