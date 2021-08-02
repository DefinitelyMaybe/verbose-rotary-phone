export class Scene {
  constructor() {
    this.id = 0
    this.objects = []
  }

  save() {
    // returns a json version of the scene
    return JSON.stringify({
      "id": this.id,
      "objects":this.objects
    })
  }

  load(scene) {
    // loads a json version of the scene
    console.log(scene);
  }
}