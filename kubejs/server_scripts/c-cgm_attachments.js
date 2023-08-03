// This script is reponsible for the crafting recipes of all base cgm attachments



ServerEvents.recipes(e => {
    
    const bullet_mid = 'kubejs:unfinished_basic_bullet'
    e.recipes.create.sequenced_assembly(
        'create:copper_backtank',
        'create:cogwheel',
        [
            e.recipes.create.deploying(
                bullet_mid,[bullet_mid,'create:cinder_flour']
            ),
            e.recipes.create.filling(
                bullet_mid,[bullet_mid,Fluid.of('createindustry:naphta', 250)]
            )
        ]
    ).transitionalItem(bullet_mid).loops(2)
    
  })