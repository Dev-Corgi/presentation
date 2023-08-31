export default class MovingMotionRelative  {
    constructor(deltaX, deltaY,unit,delay,duration,easetype) {
      this.ref = null
      this.currentX = 0
      this.currentY = 0
      this.originX = 0
      this.originY = 0
      this.deltaX = deltaX
      this.deltaY = deltaY
      this.delay = delay
      this.duration = duration
      this.easetype = easetype
      this.unit = unit
      this.motion = {
      x:this.currentX,y:this.currentY,
      rotation: null,
        transition: {
          duration: this.duration,
          delay: this.delay,
          ease:this.easetype
        },
    };
    }

    linkRef(ref){
      this.ref = ref
      this.originX = this.ref.current.getBoundingClientRect().left
      this.originY = this.ref.current.getBoundingClientRect().top
    }
  
    handleMotion(input) {

      console.log("motion")

        this.currentX = this.ref.current.getBoundingClientRect().left + this.deltaX -this.originX
        this.currentY = this.ref.current.getBoundingClientRect().top + this.deltaY - this.originY

      this.motion = {
        x:`${this.currentX}${this.unit}`,
        y: `${this.currentY}${this.unit}`,
        transition: {
        duration: this.duration,
        delay: this.delay,
        ease:this.easetype
      }}
      return this.motion
    }

  }