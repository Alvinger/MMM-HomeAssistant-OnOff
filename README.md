# MMM-HomeAssistant-OnOff

A module for MagicMirror2 (https://github.com/MichMich/MagicMirror) which shows and controls Home Assistant entities. The module uses the HomeAssistant-OnOff API for which you do need to create an access token, see below.

# Install

1. Clone repository into `../modules/` inside your MagicMirror folder.
2. Run `npm install` inside `../modules/MMM-HomeAssistant-OnOff/` folder
3. Add the module to the MagicMirror config
```
	{
		module: "MMM-HomeAssistant-OnOff",
		position: "left",
		header: "Entities",
		config: {
			entities: [
				{name: ""},	// Name of Home Assistant Entity to control
				{name: ""},	// Multiple entities can be specified
			],
			accessToken: ""		// Long-lived access token from Home Assistant
        }
    },
```
# Create access token

Long-lived access tokens are valid for 10 years. These are useful for integrating with third-party APIs and webhook-style integrations. Long-lived access tokens can be created using the "Long-Lived Access Tokens" section at the bottom of a user's Home Assistant profile page.
