function adjustLights (lights: string[]): number {
  let changesNeeded = 0

  const ALTERNATE_LIGHTS = {
    '🔴': '🟢',
    '🟢': '🔴'
  }

  let previousLight = null
  for (let light of lights.reverse()) {
    if (previousLight === light) {
      changesNeeded++
      light = ALTERNATE_LIGHTS[light as keyof typeof ALTERNATE_LIGHTS]
    }
    previousLight = light
  }
  return changesNeeded
}

console.log(adjustLights(['🔴', '🔴', '🔴', '🟢', '🟢']))
