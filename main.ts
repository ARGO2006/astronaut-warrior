namespace SpriteKind {
    export const powerup = SpriteKind.create()
    export const pog = SpriteKind.create()
}
function Walk () {
    if (WhatDirection == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f...ff..
            ......fd11111111df.fbbf.
            ......fd11111111dffecbf.
            ......fd11111111dfebef..
            ......fbd111111dfebef...
            ....fffcd111111febef....
            ...f2222b11111191ef2f...
            ..f22222222222919f222f..
            ...fbddd22222919dddbf...
            ...fbddddd11919ddddbf...
            ...fbddfdd1919ddfddbf...
            ...fbddfdd9191ddfddbf...
            ...fbddfd91911ddfddbf...
            ...fbddf919111ddfddbf...
            ...fbdf9191111ddffdbf...
            ...fbd919d1111ddffdbf...
            ...fb919ddffffddffdbf...
            ...fb99fddf..fddfdfbf...
            ...fbbbfddf..fddfbbbf...
            ....ffffddf..fddffff....
            .......ffff..ffff.......
            `,img`
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f...ff..
            ......fd11111111df.fbbf.
            ......fd11111111dffecbf.
            ......fd11111111dfebef..
            ......fbd111111dfebef...
            ....fffcd111111febef....
            ...f2222b11111191ef2f...
            ..f22222222222919f222f..
            ...fbddd22222919dddbf...
            ...fbddddd11919ddddbf...
            ...fbddfdd1919ddffdbf...
            ...fbddfdd9191ddffdbf...
            ...fbddfd91911ddffdbf...
            ...fbddf919111ddfdfbf...
            ...fbdf9191111ddfbbbf...
            ...fbd919d1111ddffff....
            ...fb919ddffffddf.......
            ...fb99fddf..ffff.......
            ....ffffddf.............
            .......ffff.............
            `,img`
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f...ff..
            ......fd11111111df.fbbf.
            ......fd11111111dffecbf.
            ......fd11111111dfebef..
            ......fbd111111dfebef...
            ....fffcd111111febef....
            ...f2222b11111191ef2f...
            ..f22222222222919f222f..
            ...fbddd22222919dddbf...
            ...fbddddd11919ddddbf...
            ...fbddfdd1919ddfddbf...
            ...fbddfdd9191ddfddbf...
            ...fbddfd91911ddfddbf...
            ...fbddf919111ddfddbf...
            ...fbdf9191111ddffdbf...
            ...fbd919d1111ddffdbf...
            ...fb919ddffffddffdbf...
            ...fb99fddf..fddfdfbf...
            ...fbbbfddf..fddfbbbf...
            ....ffffddf..fddffff....
            .......ffff..ffff.......
            `,img`
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f...ff..
            ......fd11111111df.fbbf.
            ......fd11111111dffecbf.
            ......fd11111111dfebef..
            ......fbd111111dfebef...
            ....fffcd111111febef....
            ...f2222b11111191ef2f...
            ..f22222222222919f222f..
            ...fbddd22222919dddbf...
            ...fbddddd11919ddddbf...
            ...fbddfdd1919ddfddbf...
            ...fbddfdd9191ddfddbf...
            ...fbddfd91911ddfddbf...
            ...fbddf919111ddfddbf...
            ...fbdf9191111ddffdbf...
            ...fbf919d1111ddffdbf...
            ...fb919ddffffddffdbf...
            ...fb99ffff..fddfdfbf...
            ....fff......fddfbbbf...
            .............fddffff....
            .............ffff.......
            `],
        200,
        true
        )
    } else if (WhatDirection == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ...........ffff.........
            .........ff1111ff.......
            ........fb111111bf......
            ........fd1111111f......
            .......fdd1111111df.....
            .......fddd111991df.....
            ...ff..fdddd11111df.....
            ..fbbf.fbdddd1111df.....
            ..fbceffcbbbd111dbf.....
            ...feceffcbb11111f......
            ....fecefddddddddf......
            .....fe19222222224f.....
            ......f19222222244f.....
            ......919dfdd1f24f......
            ......919dfdd1f24f......
            .......919fdd1f24f......
            .......919fd11f24f......
            .......919fd11f24f......
            .......919fd1fd14f......
            ........919d1fd1f.......
            .........99d1f11f.......
            ..........fdf1fff.......
            ..........fd11ff........
            ...........fffdf........
            ...........fbddf........
            ...........fbbddf.......
            ............fffff.......
            `,img`
            ...........ffff.........
            .........ff1111ff.......
            ........fb111111bf......
            ........fd1111111f......
            .......fdd1111111df.....
            .......fddd111991df.....
            ...ff..fdddd11111df.....
            ..fbbf.fbdddd1111df.....
            ..fbceffcbbbd111dbf.....
            ...feceffcbb11111f......
            ....fecefddddddddf......
            .....fe19222222224f.....
            ......f19222222244f.....
            ......919dfdd1f24f......
            ......919dfdd1f24f......
            .......919fdd1f24f......
            .......919fd11f24f......
            .......919fd11f24f......
            .......919fd1fd14f......
            ........919d1fd1ff......
            .........99d1f11fbf.....
            ..........fdf1fffbf.....
            ..........fd11ffcbf.....
            ..........fffdffcbff....
            ..........fbddffccbf....
            ..........fbbddffcbbf...
            ...........fffff.fff....
            `,img`
            ...........ffff.........
            .........ff1111ff.......
            ........fb111111bf......
            ........fd1111111f......
            .......fdd1111111df.....
            .......fddd111991df.....
            ...ff..fdddd11111df.....
            ..fbbf.fbdddd1111df.....
            ..fbceffcbbbd111dbf.....
            ...feceffcbb11111f......
            ....fecefddddddddf......
            .....fe19222222224f.....
            ......f19222222244f.....
            ......919dfdd1f24f......
            ......919dfdd1f24f......
            .......919fdd1f24f......
            .......919fd11f24f......
            .......919fd11f24f......
            .......919fd1fd14f......
            ........919d1fd1f.......
            .........99d1f11f.......
            ..........fdf1fff.......
            ..........fd11ff........
            ...........fffdf........
            ...........fbddf........
            ...........fbbddf.......
            ............fffff.......
            `,img`
            ...........ffff.........
            .........ff1111ff.......
            ........fb111111bf......
            ........fd1111111f......
            .......fdd1111111df.....
            .......fddd111991df.....
            ...ff..fdddd11111df.....
            ..fbbf.fbdddd1111df.....
            ..fbceffcbbbd111dbf.....
            ...feceffcbb11111f......
            ....fecefddddddddf......
            .....fe19222222224f.....
            ......f19222222244ff....
            ......919dfdd1f24f11f...
            ......919dfdd1f24f11f...
            .......919fdd1f24f111f..
            .......919fd11f24ff11ff.
            .......919fd11f24ff11f1f
            .......919fd1fd14f.f111f
            ........919d1fd1df..fff.
            .........99d1f11ddf.....
            ........fdfdf1fdddf.....
            .......fddfd11ffddf.....
            .......fddffff.fddff....
            .......fbddf...fdddf....
            .......fbbddf...fdddf...
            ........fffff....fff....
            `],
        200,
        true
        )
    } else if (WhatDirection == 2) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f...ff..
            ......fd11111111df.fbbf.
            ......fd19911991dffecbf.
            ......fd11111111dfebef..
            ......fbd111111dfebef...
            ....fffcd111111febef....
            ...f4444b11111122222f...
            ..f444444442222222222f..
            ...f111144442222ddbbf...
            ...f11111444222dddbbf...
            ...f11bf1144221dfdbbf...
            ...f1dbf1144421dfddbf...
            ...f1dbf1114411dfddbf...
            ...f1dff1111111dfddbf...
            ...f1dff1111111dffdbf...
            ...f1dff1111111dffdbf...
            ...f1dff11ffff1dffdbf...
            ...f1fdf11f..f1dfdfbf...
            ...f111f11f..f1dfddbf...
            ....ffff11f..f1dffff....
            .......f11f..f1df.......
            .......f11f..f1df.......
            .......ffff..ffff.......
            `,img`
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f...ff..
            ......fd11111111df.fbbf.
            ......fd19911991dffecbf.
            ......fd11111111dfebef..
            ......fbd111111dfebef...
            ....fffcd111111febef....
            ...f4444b11111122222f...
            ..f444444442222222222f..
            ...f111144442222ddbbf...
            ...f11111444222dddbbf...
            ...f11bf1144221dfdbbf...
            ...f1dbf1144421dfddbf...
            ...f1dbf1114411dfddbf...
            ...f1dff1111111dfffff...
            ...f1dff1111111df111f...
            ...f1dff1111111df111f...
            ...f1dff11fffffff111f...
            ...f1fdf11f.fdddffff....
            ...f111f11f.fdddf.......
            ....ffff11f.fbbbf.......
            .......f11f.fcccf.......
            .......f11f.fffff.......
            .......ffff.............
            `,img`
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f...ff..
            ......fd11111111df.fbbf.
            ......fd19911991dffecbf.
            ......fd11111111dfebef..
            ......fbd111111dfebef...
            ....fffcd111111febef....
            ...f4444b11111122222f...
            ..f444444442222222222f..
            ...f111144442222ddbbf...
            ...f11111444222dddbbf...
            ...f11bf1144221dfdbbf...
            ...f1dbf1144421dfddbf...
            ...f1dbf1114411dfddbf...
            ...f1dff1111111dfddbf...
            ...f1dff1111111dffdbf...
            ...f1dff1111111dffdbf...
            ...f1dff11ffff1dffdbf...
            ...f1fdf11f..f1dfdfbf...
            ...f111f11f..f1dfddbf...
            ....ffff11f..f1dffff....
            .......f11f..f1df.......
            .......f11f..f1df.......
            .......ffff..ffff.......
            `,img`
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f...ff..
            ......fd11111111df.fbbf.
            ......fd19911991dffecbf.
            ......fd11111111dfebef..
            ......fbd111111dfebef...
            ....fffcd111111febef....
            ...f4444b11111122222f...
            ..f444444442222222222f..
            ...f111144442222ddbbf...
            ...f11111444222dddbbf...
            ...f11bf1144221dfdbbf...
            ...f1dbf1144421dfddbf...
            ...fddbf1114411dfddbf...
            ...fffff1111111dfddbf...
            ...f111f1111111dffdbf...
            ...f111f1111111dffdbf...
            ...f111fffffff1dffdbf...
            ....ffffdddf.f1dfdfbf...
            .......fdddf.f1dfddbf...
            .......fbbbf.f1dffff....
            .......fcccf.f1df.......
            .......fffff.f1df.......
            .............ffff.......
            `],
        200,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            .........ffff...........
            .......ff1111ff.........
            ......fb111111bf........
            ......f1111111df........
            .....fd1111111ddf.......
            .....fd199111dddf.......
            .....fd11111ddddf..ff...
            .....fd1111ddddbf.fbbf..
            .....fbd111dbbbcffecbf..
            ......f11111bbcffecef...
            ......fddddddddfecef....
            .....f42222222222ef.....
            .....f4422222222ff......
            ......f42f1ddfddf.......
            ......f42f1ddfddf.......
            ......f42f1ddfdf........
            ......f42f11dfdf........
            ......f42f11dff.........
            ......f41df1dff.........
            .......f1df1dff.........
            .......f11f1df..........
            .......fff1fdf..........
            ........ff11df..........
            ........fdfff...........
            ........fddbf...........
            .......fddbbf...........
            .......fffff............
            `,img`
            .........ffff...........
            .......ff1111ff.........
            ......fb111111bf........
            ......f1111111df........
            .....fd1111111ddf.......
            .....fd199111dddf.......
            .....fd11111ddddf..ff...
            .....fd1111ddddbf.fbbf..
            .....fbd111dbbbcffecbf..
            ......f11111bbcffecef...
            ......fddddddddfecef....
            .....f42222222222ef.....
            .....f4422222222ff......
            ......f42f1ddfddf.......
            ......f42f1ddfddf.......
            ......f42f1ddfdf........
            ......f42f11dfdf........
            ......f42f11dff.........
            ......f41df1dff.........
            ......ff1df1dff.........
            .....fbf11f1df..........
            .....fbfff1fdf..........
            .....fbcff11df..........
            ....ffbcffdfff..........
            ....fbccffddbf..........
            ...fbbcffddbbf..........
            ....fff.fffff...........
            `,img`
            .........ffff...........
            .......ff1111ff.........
            ......fb111111bf........
            ......f1111111df........
            .....fd1111111ddf.......
            .....fd199111dddf.......
            .....fd11111ddddf..ff...
            .....fd1111ddddbf.fbbf..
            .....fbd111dbbbcffecbf..
            ......f11111bbcffecef...
            ......fddddddddfecef....
            .....f42222222222ef.....
            .....f4422222222ff......
            ......f42f1ddfddf.......
            ......f42f1ddfddf.......
            ......f42f1ddfdf........
            ......f42f11dfdf........
            ......f42f11dff.........
            ......f41df1dff.........
            .......f1df1dff.........
            .......f11f1df..........
            .......fff1fdf..........
            ........ff11df..........
            ........fdfff...........
            ........fddbf...........
            .......fddbbf...........
            .......fffff............
            `,img`
            .........ffff...........
            .......ff1111ff.........
            ......fb111111bf........
            ......f1111111df........
            .....fd1111111ddf.......
            .....fd199111dddf.......
            .....fd11111ddddf..ff...
            .....fd1111ddddbf.fbbf..
            .....fbd111dbbbcffecbf..
            ......f11111bbcffecef...
            ......fddddddddfecef....
            .....f42222222222ef.....
            ....ff4422222222ff......
            ...f11f42f1ddfddf.......
            ...f11f42f1ddfddf.......
            ..f111f42f1ddfdf........
            .ff11ff42f11dfdf........
            f1f11ff42f11dff.........
            f111f.f41df1dff.........
            .fff..fd1df1dff.........
            .....fdd11f1dff.........
            .....fdddf1fdfdf........
            .....fddff11dfddf.......
            ....ffddf.ffffddf.......
            ....fdddf...fddbf.......
            ...fdddf...fddbbf.......
            ....fff....fffff........
            `],
        200,
        true
        )
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    WhatDirection = 0
    Walk()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (WhatDirection == 0) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            9 9 . . . . . . . . . . . . . . 
            9 1 9 . . . . . . . . . . . . . 
            . 9 1 9 . . . . . . . . . . . . 
            . . 9 1 9 . . . . . . . . . . . 
            . . 9 1 9 . . . . . . . . . . . 
            . . . 9 1 9 . . . . . . . . . . 
            . . . . 9 1 9 . . . . . . . . . 
            . . . . . 9 1 9 . . . . . . . . 
            . . . . . . 9 1 e . . . . . . . 
            . . . . . . . e b e . . . . . . 
            . . . . . . . . e b e . . . . . 
            . . . . . . . . . e c b . . . . 
            . . . . . . . . . . b b . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . 9 . . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . 1 1 1 1 . 9 1 9 . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . 1 1 1 . 9 1 9 . . . . . . . 
            . 1 . . . . 9 1 9 . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . . . . . e b e . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . e b e . . . . . . . 
            . . . . . . e c e . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 1 . . . . . . . . . 
            . . . . . . . 1 . . . . . . 9 9 
            . . . . . . . . 1 . . . . 9 1 9 
            . . . . . . . . 1 . . . 9 1 9 . 
            . . . . . . . . . . . 9 1 9 . . 
            . . . . . . . . . . . 9 1 9 . . 
            . . 1 1 1 1 1 . . . 9 1 9 . . . 
            . . . . . . . . . 9 1 9 . . . . 
            . . . . . . . . 9 1 9 . . . . . 
            . . . . . . . e 1 9 . . . . . . 
            . . . . . . e b e . . . . . . . 
            . . . . . e b e . . . . . . . . 
            . . . . b c e . . . . . . . . . 
            . . . . b b . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
    } else if (WhatDirection == 1) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 9 9 
            . . . . . . . . . . . . . 9 1 9 
            . . . . . . . . . . . . 9 1 9 . 
            . . . . . . . . . . . 9 1 9 . . 
            . . . . . . . . . . . 9 1 9 . . 
            . . . . . . . . . . 9 1 9 . . . 
            . . . . . . . . . 9 1 9 . . . . 
            . . . . . . . . 9 1 9 . . . . . 
            . . . . . . . e 1 9 . . . . . . 
            . . . . . . e b e . . . . . . . 
            . . . . . e b e . . . . . . . . 
            . . . . b c e . . . . . . . . . 
            . . . . b b . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . 1 . . . 
            . . . . . . . . 1 . . . 1 . . . 
            . . . . . . . . 1 . . . 1 . . . 
            . . . . . . . . 1 . . . 1 . . . 
            . . . . . . . . . . . . . . . . 
            . . e e . e 9 9 9 9 9 9 9 9 9 . 
            b c c b e b 1 1 1 1 1 1 1 1 1 9 
            . . e e . e 9 9 9 9 9 9 9 9 9 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . b b . . . . . 1 . . . . . 1 . 
            . b c e . . . . 1 . . . . . 1 . 
            . . e b e . . . 1 . . . . . 1 . 
            . . . e b e . . . . . . . 1 . . 
            . . . . e 1 9 . . . . 1 1 . . . 
            . . . . . 9 1 9 . . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . . . . . . 9 1 9 9 . . . . . 
            . . . . . . . . 9 1 1 9 . . . . 
            . . . . . . . . . 9 9 1 9 . . . 
            . . . . . . . . . . . 9 1 9 . . 
            . . . . . . . . . . . . 9 9 . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
    } else if (WhatDirection == 2) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . b b . . . . 
            . . . . . . . . . e c b . . . . 
            . . . . . . . . e b e . . . . . 
            . . . . . . . e b e . . . . . . 
            . . . . . . 9 1 e . . . . . . . 
            . . . . . 9 1 9 . . . . . . . . 
            . . . . 9 1 9 . . . . . . . . . 
            . . . 9 1 9 . . . . . . . . . . 
            . . 9 1 9 . . . . . . . . . . . 
            . . 9 1 9 . . . . . . . . . . . 
            . 9 1 9 . . . . . . . . . . . . 
            9 1 9 . . . . . . . . . . . . . 
            9 9 . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . b . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . e c e . . . . . . . 
            . . . . . . e b e . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . e b e . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . 1 . . . . 9 1 9 . . . . . . . 
            . . 1 1 1 . 9 1 9 . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . 1 1 1 1 . 9 1 9 . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . . . . . 9 1 9 . . . . . . . 
            . . . . . . . 9 . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . b b . . . . . . . . . . 
            . . . . b c e . . . . . . . . . 
            . . . . . e b e . . . . . . . . 
            . . . . . . e b e . . . . . . . 
            . . . . . . . e 1 9 . . . . . . 
            . . . . . . . . 9 1 9 . . . . . 
            . . . . . . . . . 9 1 9 . . . . 
            . . 1 1 1 1 1 . . . 9 1 9 . . . 
            . . . . . . . . . . . 9 1 9 . . 
            . . . . . . . . . . . 9 1 9 . . 
            . . . . . . . . 1 . . . 9 1 9 . 
            . . . . . . . . 1 . . . . 9 1 9 
            . . . . . . . 1 . . . . . . 9 9 
            . . . . 1 1 1 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
    } else {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            9 9 . . . . . . . . . . . . . . 
            9 1 9 . . . . . . . . . . . . . 
            . 9 1 9 . . . . . . . . . . . . 
            . . 9 1 9 . . . . . . . . . . . 
            . . 9 1 9 . . . . . . . . . . . 
            . . . 9 1 9 . . . . . . . . . . 
            . . . . 9 1 9 . . . . . . . . . 
            . . . . . 9 1 9 . . . . . . . . 
            . . . . . . 9 1 e . . . . . . . 
            . . . . . . . e b e . . . . . . 
            . . . . . . . . e b e . . . . . 
            . . . . . . . . . e c b . . . . 
            . . . . . . . . . . b b . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . 1 . . . . 1 . . . . . . . 
            . . . 1 . . . 1 . . . . . . . . 
            . . . 1 . . . 1 . . . . . . . . 
            . . . 1 . . . 1 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 9 9 9 9 9 9 9 9 9 e . e e . . 
            9 1 1 1 1 1 1 1 1 1 b e b c c b 
            . 9 9 9 9 9 9 9 9 9 e . e e . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . 1 . . . . . 1 . . . . . b b . 
            . 1 . . . . . 1 . . . . e c b . 
            . 1 . . . . . 1 . . . e b e . . 
            . . 1 . . . . . . . e b e . . . 
            . . . 1 1 . . . . 9 1 e . . . . 
            . . . . . . . . 9 1 9 . . . . . 
            . . . . . . . 9 1 9 . . . . . . 
            . . . . . 9 9 1 9 . . . . . . . 
            . . . . 9 1 1 9 . . . . . . . . 
            . . . 9 1 9 9 . . . . . . . . . 
            . . 9 1 9 . . . . . . . . . . . 
            . . 9 9 . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    WhatDirection = 3
    Walk()
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    if (mySprite4 && mySprite4.x > 0) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += -10
    } else {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += -1
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    status.spriteAttachedTo().destroy()
    if (Math.percentChance(15)) {
        mySprite3 = sprites.create(img`
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . 2 e e e 2 . . . . . 
            . . . . . . 2 e 2 e 2 . . . . . 
            . . . . . 5 2 e 2 e 2 5 . . . . 
            . . . . 5 5 2 e 2 e 2 5 5 . . . 
            2 2 2 2 2 2 5 e 2 e 5 2 2 2 2 2 
            2 e e e e e e 5 2 5 e e e e e 2 
            2 e 2 2 2 2 2 2 5 2 2 2 2 2 e 2 
            2 e e e e e e 5 2 5 e e e e e 2 
            2 2 2 2 2 2 5 e 2 e 5 2 2 2 2 2 
            . . . . 5 5 2 e 2 e 2 5 5 . . . 
            . . . . . 5 2 e 2 e 2 5 . . . . 
            . . . . . . 2 e 2 e 2 . . . . . 
            . . . . . . 2 e 2 e 2 . . . . . 
            . . . . . . 2 e e e 2 . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            `, SpriteKind.powerup)
        mySprite3.x = status.spriteAttachedTo().x
        mySprite3.y = status.spriteAttachedTo().y
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    WhatDirection = 1
    Walk()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Walk()
    WhatDirection = 2
})
function Enemie () {
    alien = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    alien,
    [img`
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . 7 7 6 6 6 6 7 7 . . . . 
        . . . . 7 6 6 6 6 6 6 7 . . . . 
        . . . . 7 6 1 1 1 1 6 7 . . . . 
        . 6 6 . 7 7 1 f 1 1 7 7 . 6 6 . 
        . . 6 6 7 7 7 1 1 7 7 7 6 6 . . 
        . . . 6 7 7 7 7 7 7 7 7 6 . . . 
        6 6 . . 7 7 7 7 7 7 7 7 . . 6 6 
        . 6 6 6 7 7 7 7 6 6 7 7 6 6 6 . 
        . . 6 6 6 7 7 7 7 7 7 6 6 6 . . 
        `,img`
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . 7 7 6 6 6 6 7 7 . . . . 
        . . . . 7 6 6 6 6 6 6 7 . . . . 
        . . . . 7 6 1 1 1 1 6 7 . . . . 
        . 6 6 . 7 7 1 1 f 1 7 7 . 6 6 . 
        . . 6 6 7 7 7 1 1 7 7 7 6 6 . . 
        . . . 6 7 7 7 7 7 7 7 7 6 . . . 
        6 6 . . 7 7 7 7 7 7 7 7 . . . . 
        . 6 6 6 7 7 7 7 6 6 7 7 . 6 6 6 
        . . 6 6 6 7 7 7 7 7 7 6 6 6 . 6 
        `,img`
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . 7 7 6 6 6 6 7 7 . . . . 
        . . . . 7 6 6 6 6 6 6 7 . . . . 
        . . . . 7 6 1 1 1 f 6 7 . . . . 
        . 6 6 . 7 7 1 1 1 1 7 7 . 6 6 . 
        . . 6 6 7 7 7 1 1 7 7 7 6 6 . . 
        . . . 6 7 7 7 7 7 7 7 7 6 . . . 
        . . . . 7 7 7 7 7 7 7 7 . . 6 6 
        6 6 6 . 7 7 7 7 6 6 7 7 6 6 6 . 
        6 . 6 6 6 7 7 7 7 7 7 6 6 6 . . 
        `,img`
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . 7 7 6 6 6 6 7 7 . . . . 
        . . . . 7 6 6 6 6 6 6 7 . . . . 
        6 6 . . 7 6 1 1 1 1 6 7 . . . . 
        . 6 6 . 7 7 1 f 1 1 7 7 . 6 6 . 
        . . 6 6 7 7 7 1 1 7 7 7 6 6 . . 
        . . . 6 7 7 7 7 7 7 7 7 6 . . . 
        . . . . 7 7 7 7 7 7 7 7 . . 6 6 
        6 6 6 . 7 7 7 7 6 6 7 7 6 6 6 . 
        6 . 6 6 6 7 7 7 7 7 7 6 6 6 . . 
        `,img`
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . 7 7 6 6 6 6 7 7 . . . . 
        . . . . 7 6 6 6 6 6 6 7 . . . 6 
        . . . . 7 6 1 f 1 1 6 7 . . 6 6 
        . 6 6 . 7 7 1 1 1 1 7 7 . 6 6 . 
        . . 6 6 7 7 7 1 1 7 7 7 6 6 . . 
        . . . 6 7 7 7 7 7 7 7 7 6 . . . 
        6 6 . . 7 7 7 7 7 7 7 7 . . . . 
        . 6 6 6 7 7 7 7 6 6 7 7 . 6 6 6 
        . . 6 6 6 7 7 7 7 7 7 6 6 6 . 6 
        `],
    100,
    true
    )
    enemy_health = statusbars.create(12, 2, StatusBarKind.Health)
    enemy_health.attachToSprite(alien)
    enemy_health.max = 100
    enemy_health.setColor(9, 2)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.powerup, function (sprite, otherSprite) {
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.pog)
    mySprite4.lifespan = 10000
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let moving = false
let enemy_health: StatusBarSprite = null
let alien: Sprite = null
let mySprite3: Sprite = null
let mySprite4: Sprite = null
let WhatDirection = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f...ff..
    ......fd11111111df.fbbf.
    ......fd19911991dffecbf.
    ......fd11111111dfebef..
    ......fb11111111bfbef...
    ....fffbd111111dbfff....
    ...f4444b111111b2222f...
    ..f444444442222222222f..
    ...f111144442222ddbbf...
    ...f11111444222dddbbf...
    ...f11bf1144421dfdbbf...
    ...f1dbf1144441dfddbf...
    ...f1dbf1114411dfddbf...
    ...f1dff1111111dffdbf...
    ...f1dff1111111dffdbf...
    ...f1dff1111111dffdbf...
    ...f1f1f11ffff1dfdfbf...
    ...f111f11f..f1dfddbf...
    ....ffff11f..f1dffff....
    .......fb1f..f1bf.......
    .......fddf..fddf.......
    .......fddf..fddf.......
    .......ffff..ffff.......
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
scene.cameraFollowSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
info.setLife(5)
game.onUpdate(function () {
    if (WhatDirection == 0) {
        mySprite2.x = mySprite.x
        mySprite2.bottom = mySprite.top
    } else if (WhatDirection == 1) {
        mySprite2.left = mySprite.right
        mySprite2.y = mySprite.y
    } else if (WhatDirection == 2) {
        mySprite2.x = mySprite.x
        mySprite2.top = mySprite.bottom
    } else {
        mySprite2.right = mySprite.left
        mySprite2.y = mySprite.y
    }
})
game.onUpdate(function () {
    moving = controller.left.isPressed() || (controller.right.isPressed() || (controller.up.isPressed() || controller.down.isPressed()))
    if (!(moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
})
game.onUpdateInterval(10000, function () {
    Enemie()
    alien.follow(mySprite, 10)
    alien.setPosition(randint(scene.screenWidth(), 0), randint(scene.screenHeight(), 0))
    if (true) {
        Enemie()
    }
})
