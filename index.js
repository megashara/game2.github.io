const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
window.pauseAnimate = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let percentWindow = 40/100 * canvas.height;

function reportWindowSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    percentWindow = 40/100 * canvas.height;
}

window.onresize = reportWindowSize;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.7;

const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './img/bg_fight_1024.png'
})

let player = new Fighter({
    position: {
        x: 50,
        y: 0,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset: {
        x: 215,
        y: 158,
    },
    color: 'blue',
    imageSrc: './img/Fernandes/Idle.png',
    framesMax: 4,
    scale: 2,
    resurrection: false,
    sprites: {
        idle: {
            imageSrc: './img/Fernandes/Idle.png',
            framesMax: 4,
        },
        run: {
            imageSrc: './img/Fernandes/Run.png',
            framesMax: 8,
        },
        jump: {
            imageSrc: './img/Fernandes/Jump.png',
            framesMax: 2,
        },
        fall: {
            imageSrc: './img/Fernandes/Fall.png',
            framesMax: 2,
        },
        attack1: {
            imageSrc: './img/Fernandes/Attack.png',
            framesMax: 4,
        },
        takeHit: {
            imageSrc: './img/Fernandes/Take_hit.png',
            framesMax: 3,
        },
        death: {
            imageSrc: './img/Fernandes/Death.png',
            framesMax: 7,
        }
    },
    attackBox: {
        offset: {
            x: 0,
            y: 50,
        },
        width: 230,
        height: 50
    }
})

let enemy = new Fighter({
    position: {
        x: 800,
        y: 258,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset: {
        x: 215,
        y: 158,
    },
    imageSrc: './img/security/Idle.png',
    framesMax: 4,
    scale: 2,
    sprites: {
        idle: {
            imageSrc: './img/security/Idle.png',
            framesMax: 4,
        },
        run: {
            imageSrc: './img/security/Run.png',
            framesMax: 8,
            image: new Image()
        },
        jump: {
            imageSrc: './img/security/Jump.png',
            framesMax: 2,
        },
        fall: {
            imageSrc: './img/security/Fall.png',
            framesMax: 2,
        },
        attack1: {
            imageSrc: './img/security/Attack.png',
            framesMax: 4,
        },
        takeHit: {
            imageSrc: './img/security/Take_hit.png',
            framesMax: 3,
        },
        death: {
            imageSrc: './img/security/Death.png',
            framesMax: 7,
        },
    },
    attackBox: {
        offset: {
            x: -150,
            y: 50,
        },
        width: 200,
        height: 50
    }
})
let enemy2 = new Fighter({
    position: {
        x: 900,
        y: 426,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset: {
        x: 215,
        y: 158,
    },
    imageSrc: './img/security/Idle.png',
    framesMax: 4,
    scale: 2,
    sprites: {
        idle: {
            imageSrc: './img/security/Idle.png',
            framesMax: 4,
        },
        run: {
            imageSrc: './img/security/Run.png',
            framesMax: 8,
            image: new Image()
        },
        jump: {
            imageSrc: './img/security/Jump.png',
            framesMax: 2,
        },
        fall: {
            imageSrc: './img/security/Fall.png',
            framesMax: 2,
        },
        attack1: {
            imageSrc: './img/security/Attack.png',
            framesMax: 4,
        },
        takeHit: {
            imageSrc: './img/security/Take_hit.png',
            framesMax: 3,
        },
        death: {
            imageSrc: './img/security/Death.png',
            framesMax: 7,
        },
    },
    attackBox: {
        offset: {
            x: -150,
            y: 50,
        },
        width: 200,
        height: 50
    }
})
let enemy3 = new Fighter({
    position: {
        x: 1000,
        y: 426,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset: {
        x: 215,
        y: 158,
    },
    imageSrc: './img/security/Idle.png',
    framesMax: 4,
    scale: 2,
    sprites: {
        idle: {
            imageSrc: './img/security/Idle.png',
            framesMax: 4,
        },
        run: {
            imageSrc: './img/security/Run.png',
            framesMax: 8,
            image: new Image()
        },
        jump: {
            imageSrc: './img/security/Jump.png',
            framesMax: 2,
        },
        fall: {
            imageSrc: './img/security/Fall.png',
            framesMax: 2,
        },
        attack1: {
            imageSrc: './img/security/Attack.png',
            framesMax: 4,
        },
        takeHit: {
            imageSrc: './img/security/Take_hit.png',
            framesMax: 3,
        },
        death: {
            imageSrc: './img/security/Death.png',
            framesMax: 7,
        },
    },
    attackBox: {
        offset: {
            x: -150,
            y: 50,
        },
        width: 200,
        height: 50
    }
})

const boss = new Fighter({
    position: {
        x: 800,
        y: 350,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset: {
        x: 215,
        y: 144,
    },
    imageSrc: './img/phantom/Idle.png',
    framesMax: 8,
    scale: 2,
    resurrection: true,
    sprites: {
        idle: {
            imageSrc: './img/phantom/Idle.png',
            framesMax: 8,
        },
        run: {
            imageSrc: './img/phantom/Run.png',
            framesMax: 8,
            image: new Image()
        },
        jump: {
            imageSrc: './img/phantom/Jump.png',
            framesMax: 2,
        },
        fall: {
            imageSrc: './img/phantom/Fall.png',
            framesMax: 2,
        },
        attack1: {
            imageSrc: './img/phantom/Attack.png',
            framesMax: 6,
        },
        takeHit: {
            imageSrc: './img/phantom/Take_hit.png',
            framesMax: 4,
        },
        death: {
            imageSrc: './img/phantom/Death.png',
            framesMax: 6,
        },
    },
    attackBox: {
        offset: {
            x: -100,
            y: -50,
        },
        width: 160,
        height: 50
    }
})

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },

}

function animate() {
    if (window.pauseAnimate) {
        window.cancelAnimationFrame(animate);
        document.getElementById('powerUp').classList.add('open');
        boss.sprites = {
            idle: {
                imageSrc: './img/phantomPowerUp/Idle.png',
                framesMax: 8,
            },
            run: {
                imageSrc: './img/phantomPowerUp/Run.png',
                framesMax: 8,
                image: new Image()
            },
            jump: {
                imageSrc: './img/phantomPowerUp/Jump.png',
                framesMax: 2,
            },
            fall: {
                imageSrc: './img/phantomPowerUp/Fall.png',
                framesMax: 2,
            },
            attack1: {
                imageSrc: './img/phantomPowerUp/Attack.png',
                framesMax: 6,
            },
            takeHit: {
                imageSrc: './img/phantomPowerUp/Take_hit.png',
                framesMax: 4,
            },
            death: {
                imageSrc: './img/phantomPowerUp/Death.png',
                framesMax: 6,
            },
        };
        boss.imageSrc = './img/phantomPowerUp/Idle.png';
        for (const sprite in boss.sprites) {
            boss.sprites[sprite].image = new Image();
            boss.sprites[sprite].image.src = boss.sprites[sprite].imageSrc;
        }
        setTimeout(()=>{
            document.getElementById('powerUp').classList.remove('open');
            window.pauseAnimate = false;
            window.requestAnimationFrame(animate);
        }, 2000)
    } else {
        window.requestAnimationFrame(animate);
    }
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    background.update();
    player.update();
    if (!enemy.dead){
        enemy.update();
        enemy.botLogick(player, 85);
    } else {
        enemy.position.y = 700;
    }

    if (!enemy2.dead){
        enemy2.update();
        enemy2.botLogick(player, 100);
    } else {
        enemy2.position.y = 700;
    }

    if (enemy.dead || enemy2.dead){
        if (!enemy3.dead) {
            enemy3.update();
            enemy3.botLogick(player, 150);
        } else {
            enemy3.position.y = 700;
        }
    }

    if (enemy.dead && enemy2.dead && enemy3.dead){
        delete enemy;
        delete enemy2;
        delete enemy3;
        document.getElementById('timer').classList.add('show');
        document.getElementById('enemy').classList.add('show');
        player.HitDamage = 5;
        boss.update();
        boss.botLogick(player, 150);
        if(!boss.resurrection) {
            player.HitDamage = 10;
        }
    }

    player.velocity.x = 0;
    enemy.velocity.x = 0;
    enemy2.velocity.x = 0;
    enemy3.velocity.x = 0;
    boss.velocity.x = 0;

    // player move
    if (keys.a.pressed && player.lastKey === 'a') {
        if (player.position.x !== 50){
            player.velocity.x = -5;
        }
        player.switchSprite('run');
    } else if (keys.d.pressed && player.lastKey === 'd') {
        if (player.position.x <= canvas.width - 50) {
            player.velocity.x = 5;
        }
        player.switchSprite('run');
    } else {
        player.switchSprite('idle');
    }

    //jumping
    if (player.velocity.y < 0) {
        player.switchSprite('jump');
    } else if (player.velocity.y > 0) {
        player.switchSprite('fall');
    }

    if (!enemy.runTime) {
        enemy.switchSprite('idle');
    }

    if (!enemy2.runTime) {
        enemy2.switchSprite('idle');
    }

    if (!enemy3.runTime) {
        enemy3.switchSprite('idle');
    }

    if (!boss.runTime) {
        boss.switchSprite('idle');
    }

    if (enemy.velocity.y < 0) {
        enemy.switchSprite('jump');
    } else if (enemy.velocity.y > 0) {
        enemy.switchSprite('fall');
    }

    if (enemy2.velocity.y < 0) {
        enemy2.switchSprite('jump');
    } else if (enemy2.velocity.y > 0) {
        enemy2.switchSprite('fall');
    }

    if (enemy3.velocity.y < 0) {
        enemy3.switchSprite('jump');
    } else if (enemy3.velocity.y > 0) {
        enemy3.switchSprite('fall');
    }

    if (boss.velocity.y < 0) {
        boss.switchSprite('jump');
    } else if (boss.velocity.y > 0) {
        boss.switchSprite('fall');
    }

    // detect for collision
    if ( rectangularCollision({
        rectangle1: player,
        rectangle2: enemy
    }) && player.isAttacking) {
        enemy.takeHit();
        player.isAttacking = false;
    }
    if ( rectangularCollision({
        rectangle1: player,
        rectangle2: enemy2
    }) && player.isAttacking) {
        enemy2.takeHit();
        player.isAttacking = false;
    }
    if ( rectangularCollision({
        rectangle1: player,
        rectangle2: enemy3
    }) && player.isAttacking) {
        enemy3.takeHit();
        player.isAttacking = false;
    }
    if ( rectangularCollision({
        rectangle1: player,
        rectangle2: boss
    }) && player.isAttacking ) {
        boss.takeHit();
        player.isAttacking = false;
        gsap.to('#enemyHealth', {
            width: boss.health + '%'
        })
    }

    // if player missing
    if (player.isAttacking && player.framesCurrent === 4) {
        player.isAttacking = false;
    }

    // detect for collision
    if ( rectangularCollision({
        rectangle1: enemy,
        rectangle2: player
    }) && enemy.isAttacking && enemy.framesCurrent === 2) {
        if (!enemy.isHitting) {
            player.takeHitBot(enemy)
            gsap.to('#playerHealth', {
                width: player.health + '%'
            })
        }
    }

    // detect for collision
    if ( rectangularCollision({
        rectangle1: enemy2,
        rectangle2: player
    }) && enemy2.isAttacking && enemy2.framesCurrent === 2) {
        if (!enemy2.isHitting) {
            player.takeHitBot(enemy2)
            gsap.to('#playerHealth', {
                width: player.health + '%'
            })
        }
    }

    // detect for collision
    if ( rectangularCollision({
        rectangle1: enemy3,
        rectangle2: player
    }) && enemy3.isAttacking && enemy3.framesCurrent === 2) {
        if (!enemy3.isHitting) {
            player.takeHitBot(enemy3)
            gsap.to('#playerHealth', {
                width: player.health + '%'
            })
        }
    }

    // detect for collision
    if ( rectangularCollision({
        rectangle1: boss,
        rectangle2: player
    }) && boss.isAttacking && boss.framesCurrent === 2) {
        if (!boss.isHitting) {
            player.takeHitBot(boss)
            gsap.to('#playerHealth', {
                width: player.health + '%'
            })
        }
    }

    // end game
    if (boss.health <= 0) {
        determineWinner();
    }
}

function startGame(){
    document.getElementById('infoGame').classList.add('hide');
    animate();
    // decreaseTimer();
}

function left() {
    if (!player.dead) {
        keys.d.pressed = true;
        player.lastKey = 'a';
    }
}

function right() {
    if (!player.dead) {
        keys.a.pressed = true;
        player.lastKey = 'd';
    }
}

function space() {
    if (!player.dead) {
        if (!player.isJumping) {
            player.velocity.y = -15;
        }
    }
}

function attack() {
    if (!player.dead) {
        player.attack();
    }
}

window.addEventListener('keydown', (event) => {
    if (!player.dead) {
        switch (event.code) {
            case 'KeyD':
                keys.d.pressed = true;
                player.lastKey = 'd';
                break;
            case 'KeyA':
                keys.a.pressed = true;
                player.lastKey = 'a';
                break;
            case 'KeyW':
                if (!player.isJumping) {
                    player.velocity.y = -15;
                }
                break;
            case 'Space':
                player.attack();
                break;
        }
    }

    if (!enemy.dead) {
        switch (event.code) {
            case 'ArrowRight':
                keys.ArrowRight.pressed = true;
                enemy.lastKey = 'ArrowRight';
                break;
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = true;
                enemy.lastKey = 'ArrowLeft';
                break;
            case 'KeyW':
                if (!player.dead ){
                    if (!enemy.isJumping) {
                        enemy.velocity.y = -15;
                    }
                }
                break;
            case 'ArrowDown':
                enemy.attack();
                break;
        }
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.code) {
        case 'KeyD':
            keys.d.pressed = false;
            break;
        case 'KeyA':
            keys.a.pressed = false;
            break;
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break;

    }
})

const btn_left = document.getElementById('btn-left');
const btn_right = document.getElementById('btn-right');
const btn_fight = document.getElementById('btn-fight');
const btn_jump = document.getElementById('btn-jump');
let isDrawing = false;

btn_left.addEventListener("mousedown", (event) => {
    keys.a.pressed = true;
    player.lastKey = 'a';
}, false);

btn_right.addEventListener("mousedown", (event) => {
    keys.d.pressed = true;
    player.lastKey = 'd';
}, false);

btn_fight.addEventListener("mousedown", (event) => {
    player.attack();
}, false);

btn_jump.addEventListener("mousedown", (event) => {
    if (!player.isJumping) {
        player.velocity.y = -15;
    }
}, false);

btn_left.addEventListener("touchstart", (event) => {
    keys.a.pressed = true;
    player.lastKey = 'a';
}, false);
btn_right.addEventListener("touchstart", (event) => {
    keys.d.pressed = true;
    player.lastKey = 'd';
}, false);

window.addEventListener("mouseup", (event) => {
    keys.d.pressed = false;
    keys.a.pressed = false;
}, false);

window.addEventListener("touchend", (event) => {
    keys.d.pressed = false;
    keys.a.pressed = false;
}, false);
