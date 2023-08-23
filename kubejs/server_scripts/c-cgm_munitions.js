// This script is reponsible for the crafting recipes of all base cgm bullets and grenades

ServerEvents.recipes(e => {
    
    const bullet1 =     'kubejs:unfinished_basic_bullet'
    const bullet2 =     'kubejs:unfinished_advanced_bullet'
    const shell =       'kubejs:unfinished_shell'
    const missile =     'kubejs:unfinished_missile'
    const frag =        'kubejs:unfinished_frag_grenade'
    const stun =        'kubejs:unfinished_stun_grenade'

    // Basic Bullet (32)
    e.recipes.create.sequenced_assembly(
      '32x cgm:basic_bullet',
      'minecraft:iron_nugget',
      [
          e.recipes.create.pressing(bullet1, bullet1),
          e.recipes.create.deploying(
            bullet1,[bullet1,'minecraft:gunpowder']
          ),
          e.recipes.create.deploying(
            bullet1,[bullet1,'create:copper_nugget']
          )
      ]
    ).transitionalItem(bullet1).loops(1)

  // Advanced Bullet (16)
    e.recipes.create.sequenced_assembly(
      '16x cgm:advanced_bullet',
      'minecraft:copper_ingot',
      [
          e.recipes.create.deploying(
            bullet2,[bullet2,'minecraft:gunpowder']
          ),
          e.recipes.create.pressing(bullet2, bullet2),
          e.recipes.create.deploying(
            bullet2,[bullet2,'minecraft:iron_nugget']
          )
      ]
  ).transitionalItem(bullet2).loops(1)

  // Shell (16)
  e.recipes.create.sequenced_assembly(
    '16x cgm:shell',
    'create:copper_nugget',
    [
        e.recipes.create.deploying(
          shell,[shell,'minecraft:copper_ingot']
        ),
        e.recipes.create.pressing(shell, shell),
        e.recipes.create.deploying(
          shell,[shell,'minecraft:gunpowder']
        ),
        e.recipes.create.deploying(
          shell,[shell,'minecraft:gold_nugget']
        )
    ]
  ).transitionalItem(shell).loops(1)

  // Missile (1)
  e.recipes.create.sequenced_assembly(
  'cgm:missile',
  'minecraft:iron_nugget',
  [
      e.recipes.create.deploying(
        missile,[missile,'minecraft:iron_ingot']
      ),
      
      e.recipes.create.deploying(
        missile,[missile,'minecraft:gunpowder']
      ),
      e.recipes.create.pressing(missile, missile)
  ]
  ).transitionalItem(missile).loops(1)

  // Frag (1)
  e.recipes.create.sequenced_assembly(
    'cgm:grenade',
    'create:iron_sheet',
    [
        e.recipes.create.deploying(
          frag,[frag,'minecraft:green_dye']
         ),
        e.recipes.create.pressing(frag, frag),
        e.recipes.create.deploying(
          frag,[frag,'minecraft:gunpowder']
        ),
        e.recipes.create.deploying(
          frag,[frag,'create:copper_nugget']
        )
    ]
  ).transitionalItem(frag).loops(1)

  // Stun (2)
  e.recipes.create.sequenced_assembly(
    '2x cgm:stun_grenade',
    'create:iron_sheet',
    [
        e.recipes.create.deploying(
          stun,[stun,'minecraft:cyan_dye']
        ),
        e.recipes.create.pressing(stun, stun),
        e.recipes.create.deploying(
          stun,[stun,'minecraft:gunpowder']
        ),
        e.recipes.create.deploying(
          stun,[stun,'minecraft:glowstone_dust']
        )
    ]
  ).transitionalItem(stun).loops(1)
  })