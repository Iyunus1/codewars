// Each dragons requires 2 bullets atleast, so any amount of dragons * 2 will be the required amouunt of bullets

const hero = (bullets, dragons) => dragons * 2 <= bullets

// hero(10, 5) = true
// hero(4, 5) = false