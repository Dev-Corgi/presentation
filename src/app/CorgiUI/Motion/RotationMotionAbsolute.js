export default class RotationMotionAbsolute  {
    constructor(initialDeg,deltaDeg,delay,duration,easetype) {
      this.deltaDeg = deltaDeg
      this.delay = delay
      this.duration = duration
      this.easetype = easetype
      this.motion = {
      rotate:[10,this.deltaDeg],
        transition: {
          duration: this.duration,
          delay: this.delay,
          ease:this.easetype
        },
    };
    }
  
    handleMotion(input) {
      return this.motion
    }

  }