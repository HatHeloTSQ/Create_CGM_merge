// This script is reponsible for the crafting recipes of all base cgm weapons

ServerEvents.recipes(e => {
    
    const pistol =      'kubejs:unfinished_standard_pistol'
    const mp =          'kubejs:unfinished_standard_machine_pistol'
    const shotgun =     'kubejs:unfinished_standard_shotgun'
    const sar =         'kubejs:unfinished_standard_rifle'
    const ar =          'kubejs:unfinished_standard_assault_rifle'
    const amr =         'kubejs:unfinished_marksman_rifle'
    const launcher =    'kubejs:unfinished_grenade_launcher'
    const minigun =     'kubejs:unfinished_minigun'
    const rpg =         'kubejs:unfinished_bazooka'

    // Pistol
    e.recipes.create.sequenced_assembly(
      'cgm:pistol',
      'create:iron_sheet',
      [
          e.recipes.create.deploying(
            pistol,[pistol,'minecraft:iron_nugget']
          ),
          e.recipes.create.deploying(
            pistol,[pistol,'minecraft:iron_ingot']
          ),
          e.recipes.create.pressing(pistol, pistol)
      ]
    ).transitionalItem(pistol).loops(1)

    // Machine Pistol (MP)
    e.recipes.create.sequenced_assembly(
        'cgm:machine_pistol',
        'create:iron_sheet',
        [
            e.recipes.create.deploying(
                mp,[mp,'2x create:iron_sheet']
            ),
            e.recipes.create.deploying(
                mp,[mp,'minecraft:iron_ingot']
            ),
            e.recipes.create.pressing(mp, mp)
        ]
      ).transitionalItem(mp).loops(1)

})