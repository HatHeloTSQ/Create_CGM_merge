// This script removes the crafting recipe of workbench, ammos, attachments and guns.

console.info('All recipes removed!')

ServerEvents.recipes(event => {
    event.remove({ mod: 'cgm' })
  })
