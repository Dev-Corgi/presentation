export default class RotationMotionRelative  {
    constructor(deltaDeg,delay,duration,easetype) {
      this.ref = null
      this.currentDeg = 0
      this.originDeg = 0
      this.deltaDeg = deltaDeg
      this.delay = delay
      this.duration = duration
      this.easetype = easetype
      this.motion = {
      rotate: this.currentDeg,
        transition: {
          duration: this.duration,
          delay: this.delay,
          ease:this.easetype
        },
    };
    }

    computeDegree(){
        const rotation = window.getComputedStyle(this.ref.current).getPropertyValue("transform");
        var values = rotation.split('(')[1].split(')')[0].split(',');
        var angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));
        return angle < 0 ? angle + 360 : angle;
       }

    linkRef(ref){
      this.ref = ref
      this.originDeg = this.computeDegree();
    }

  
    handleMotion(input) {
      console.log("Computed:"+this.computeDegree())
        this.currentDeg =  this.computeDegree() + this.deltaDeg -this.originDeg
        console.log(this.currentDeg)

      this.motion = {
        rotate: +this.currentDeg,
        transition: {
        duration: this.duration,
        delay: this.delay,
        ease:this.easetype
      }}
      return this.motion
    }

  }