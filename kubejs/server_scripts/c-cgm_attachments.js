// This script is reponsible for the crafting recipes of all base cgm attachments



ServerEvents.recipes(e => {
    
    const short_scope =     'kubejs:unfinished_short_scope'
    const med_scope =       'kubejs:unfinished_medium_scope'
    const long_scope =      'kubejs:unfinished_long_scope'
    const basic_silencer =  'kubejs:unfinished_basic_silencer'
    const light_stock =     'kubejs:unfinished_light_stock'
    const tactical_stock =  'kubejs:unfinished_tactical_stock'
    const weighted_stock =  'kubejs:unfinished_weighted_stock'
    const light_grip =      'kubejs:unfinished_light_grip'
    const spec_grip =       'kubejs:unfinished_specialised_grip'

    // Short Scope
    e.recipes.create.sequenced_assembly(
        'cgm:short_scope',
        'minecraft:iron_ingot',
        [
            e.recipes.create.deploying(
                short_scope,[short_scope,'minecraft:glass_pane']
            ),
            e.recipes.create.pressing(short_scope, short_scope),
            e.recipes.create.deploying(
                short_scope,[short_scope,'minecraft:red_dye']
            ),
            e.recipes.create.filling(
                short_scope,[short_scope,Fluid.of('minecraft:water', 100)]
            )
        ]
    ).transitionalItem(short_scope).loops(1)
    
    // Medium Scope 
    e.recipes.create.sequenced_assembly(
        'cgm:medium_scope',
        'create:iron_sheet',
        [
            e.recipes.create.deploying(
                med_scope,[med_scope,'minecraft:iron_ingot']
            ),
            e.recipes.create.deploying(
                med_scope,[med_scope,'minecraft:glass_pane']
            ),
            e.recipes.create.deploying(
                med_scope,[med_scope,'minecraft:redstone']
            ),
            e.recipes.create.deploying(
                med_scope,[med_scope,'minecraft:glass_pane']
            ),
            e.recipes.create.pressing(med_scope, med_scope),
            e.recipes.create.filling(
                med_scope,[med_scope,Fluid.of('minecraft:water', 100)]
            )
        ]
    ).transitionalItem(med_scope).loops(1)

    // Long Scope
    e.recipes.create.sequenced_assembly(
        'cgm:long_scope',
        'create:iron_sheet',
        [
            e.recipes.create.deploying(
                long_scope,[long_scope,'2x minecraft:glass_pane']
            ),
            e.recipes.create.deploying(
                long_scope,[long_scope,'2x minecraft:redstone']
            ),
            e.recipes.create.deploying(
                long_scope,[long_scope,'minecraft:iron_ingot']
            ),            
            e.recipes.create.deploying(
                long_scope,[long_scope,'2x minecraft:iron_nugget']
            ),
            e.recipes.create.deploying(
                med_scope,[long_scope,'2x minecraft:glass_pane']
            ),
            e.recipes.create.pressing(long_scope, long_scope),
            e.recipes.create.filling(
                long_scope,[long_scope,Fluid.of('minecraft:water', 100)]
            )
        ]
    ).transitionalItem(long_scope).loops(1)

    // Silencer
    e.recipes.create.sequenced_assembly(
        'cgm:silencer',
        'minecraft:iron_ingot',
        [   
            e.recipes.create.filling(
                basic_silencer,[basic_silencer,Fluid.of('minecraft:water', 100)]
            ),
            e.recipes.create.deploying(
                basic_silencer,[basic_silencer,'minecraft:gray_wool']
            ),
            e.recipes.create.deploying(
                basic_silencer,[basic_silencer,'minecraft:gray_wool']
            ),
            e.recipes.create.pressing(basic_silencer, basic_silencer),
            e.recipes.create.deploying(
                basic_silencer,[basic_silencer,'minecraft:iron_nugget']
            )
        ]
    ).transitionalItem(basic_silencer).loops(1)

    // Light Stock
    e.recipes.create.sequenced_assembly(
        'cgm:light_stock',
        'minecraft:iron_ingot',
        [   
            e.recipes.create.deploying(
            light_stock,[light_stock,'minecraft:iron_ingot']
            ),
            e.recipes.create.deploying(
                light_stock,[light_stock,'minecraft:gray_carpet']
            ),
            e.recipes.create.pressing(light_stock, light_stock),
        ]
    ).transitionalItem(light_stock).loops(1)

    // Tactical Stock
    e.recipes.create.sequenced_assembly(
        'cgm:tactical_stock',
        'minecraft:iron_ingot',
        [   
            e.recipes.create.deploying(
                tactical_stock,[tactical_stock,'minecraft:iron_nugget']
                ),
            e.recipes.create.deploying(
                tactical_stock,[tactical_stock,'minecraft:iron_ingot']
            ),
            e.recipes.create.deploying(
                tactical_stock,[tactical_stock,'minecraft:iron_ingot']
            ),
            e.recipes.create.deploying(
                tactical_stock,[tactical_stock,'minecraft:gray_carpet']
            ),
            e.recipes.create.pressing(tactical_stock, tactical_stock),
        ]
    ).transitionalItem(tactical_stock).loops(1)

    // Weighted Stock
    e.recipes.create.sequenced_assembly(
        'cgm:weighted_stock',
        'minecraft:iron_ingot',
        [   
            e.recipes.create.deploying(
                weighted_stock,[weighted_stock,'create:iron_sheet']
            ),
            e.recipes.create.deploying(
                weighted_stock,[weighted_stock,'minecraft:iron_ingot']
            ),
            e.recipes.create.deploying(
                weighted_stock,[weighted_stock,'minecraft:iron_ingot']
            ),
            e.recipes.create.deploying(
                weighted_stock,[weighted_stock,'minecraft:gray_wool']
            ),
            e.recipes.create.pressing(weighted_stock, weighted_stock),
        ]
    ).transitionalItem(weighted_stock).loops(1)

    // Light Grip
    e.recipes.create.sequenced_assembly(
        'cgm:light_grip',
        'create:iron_sheet',
        [   
            e.recipes.create.deploying(
                light_grip,[light_grip,'minecraft:gray_wool']
            ),
            e.recipes.create.deploying(
                light_grip,[light_grip,'minecraft:iron_nugget']
            ),
            e.recipes.create.deploying(
                light_grip,[light_grip,'minecraft:iron_nugget']
            ),
            e.recipes.create.pressing(light_grip, light_grip),
        ]
    ).transitionalItem(light_grip).loops(1)

    // Specialised Grip
    e.recipes.create.sequenced_assembly(
        'cgm:specialised_grip',
        'create:iron_sheet',
        [   
            e.recipes.create.deploying(
                spec_grip,[spec_grip,'minecraft:iron_ingot']
            ),
            e.recipes.create.deploying(
                spec_grip,[spec_grip,'minecraft:gray_wool']
            ),
            e.recipes.create.deploying(
                spec_grip,[spec_grip,'minecraft:iron_nugget']
            ),
            e.recipes.create.pressing(spec_grip, spec_grip),
        ]
    ).transitionalItem(spec_grip).loops(1)
  })