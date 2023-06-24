export default class TeamTag {
	name: string;
	colour: string;
	paletteName: string;
	constructor(name: string, colour: string) {
		this.name = name;

		// Check if bgcol is a hex value without the preceding hash (#). If so, add a '#'.
		if (/^[0-9A-F]{6}$/i.test(colour)) {
			// Regex based on https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
			colour = `#${colour}`;
		}

		this.colour = colour;

		this.paletteName = `TeamTag-${name}-${colour}`;
	}
}
