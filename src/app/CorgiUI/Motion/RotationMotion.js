export default class RotationMotion {
  constructor(deltaDeg, delay, duration, easetype) {
    this.ref = null;
    this.deltaDeg = deltaDeg;
    this.delay = delay;
    this.duration = duration;
    this.easetype = easetype;
    this.motion = {
      rotate: null,
      transition: {
        duration: this.duration,
        delay: this.delay,
        ease: this.easetype,
      },
    };
  }

  linkRef(ref) {
    this.ref = ref;
  }

  handleMotion() {
    const computedMatrix = new DOMMatrix(
      window.getComputedStyle(this.ref.current).transform
    );

    var angle = Math.round(Math.atan2(computedMatrix.b,computedMatrix.a) * (180/Math.PI));
    angle = angle < 0 ? angle + 360 : angle; //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
    
    console.log(angle + this.deltaDeg)

    this.motion = {
      rotate:  this.deltaDeg,
      transition: {
        duration: this.duration,
        delay: this.delay,
        ease: this.easetype,
      },
    };
    return this.motion;
  }
}
