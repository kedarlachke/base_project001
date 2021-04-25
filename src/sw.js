self.addEventListener("install", e=>{
    e.waitUntil(caches.open("static").then(cache => {
        return cache.addAll(["./","./bundle.js","./bundle.js.map","f73801ef9d2a1502c574.png"])
    }))

})