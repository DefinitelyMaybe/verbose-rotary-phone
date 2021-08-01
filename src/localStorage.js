export function save() {
  // save the current scene
  localStorage.setItem("scene", document.body.outerHTML)
}

export function load() {
  // load from localstorage
  return localStorage.getItem("scene")
}

export function getStoredScenes() {
  localStorage.length
}

export function deleteStoredScene(scene) {
  
}

export function resetSceneStorage() {
  localStorage.clear()
}