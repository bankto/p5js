const bg = '#FFFDF2'
const black = '#666666'

/**
 * sketch01
 * @param p
 */
export const sketch01 = (p) => {
  let colorAmt = 1
  p.setup = () => {
    const w = p.windowWidth
    const h = p.windowHeight
    p.createCanvas(w, h)
    p.angleMode(p.DEGREES)
    p.noStroke()
    p.background('#131821')
    p.blendMode(p.LIGHTEST)
  }

  p.draw = () => {
    p.fill(p.lerpColor(p.color('#24495c'), p.color('#fffbe3'), colorAmt))
    p.translate(p.width / 2, p.height / 2)
    p.rotate(p.frameCount * 13)
    p.ellipse(p.frameCount / 2, 0, p.frameCount, p.frameCount / 3)
    colorAmt *= 0.995
  }

  p.windowResized = () => {
    // p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  p.keyPressed = () => {
    if (p.key === 's') p.saveCanvas(p.canvas, 'image0', 'png')
  }
}