export class MyStorageManager {

  constructor() {
    this.scenes = new Map()
    // sceneid -> "scene-[sceneid]"
    // 0:"scene-0"
  }

  setStoredScene() {
    localStorage.setItem("scene", document.body.outerHTML)
  }

  getStoredScene(id) {
    return localStorage.getItem(this.scenes.get(id))
  }
  
  deleteStoredScene(id) {
    localStorage.removeItem(this.scenes.get(id))
    this.scenes.delete(id)
  }
  
  resetSceneStorage() {
    localStorage.clear()
  }
  
}
