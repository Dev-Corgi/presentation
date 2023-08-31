export default class StretchMotionAbsolute {
	constructor(deltaW,deltaH,unit,delay,duration,easetype) {
		this.motion = {
			width : `${deltaW}${unit}`, 
		  height : `${deltaH}${unit}`,

			transition: {
				duration: duration,
				delay: delay,
				ease: easetype
			},
		}; 
	}

	handleMotion(input) {
		return this.motion
	  }

}
