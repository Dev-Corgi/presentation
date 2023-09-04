export default class ScaleMotion  {
    constructor(deltaScaleX,deltaScaleY,delay,duration,easetype) {
      this.deltaScaleX = deltaScaleX
      this.deltaScaleY = deltaScaleY
      this.delay = delay
      this.duration = duration
      this.easetype = easetype
      this.motion = {
        scaleX: deltaScaleX, scaleY: deltaScaleY,
          transition: {
            duration: duration,
            delay: delay,
            ease:easetype
          },
      };      
    }

    linkRef(ref){
      this.ref = ref
    }

    handleMotion() {
    const Matrix = new DOMMatrix(window.getComputedStyle(this.ref.current).transform)

    console.log(Matrix.a * this.deltaScaleX)

    this.motion = {
      scaleX : Matrix.a * this.deltaScaleX,
      scaleY : Matrix.d * this.deltaScaleY,
      transition: {
      duration: this.duration,
      delay: this.delay,
      ease:this.easetype
    },
  }
    return this.motion
    }
  

  }