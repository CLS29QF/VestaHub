import { world } from "@minecraft/server"
import { ActionFormData, ModalFormData } from "@minecraft/server-ui"
import { MessageFormData } from "@minecraft/server-ui"
import { system } from "@minecraft/server";
system.events.beforeWatchdogTerminate.subscribe(data => {
  data.cancel = true;
});
world.events.beforeItemUse.subscribe((eventData) => {
    let item = eventData.item;
    let player = eventData.source;
    if (player?.typeId != "minecraft:player") return
    if (item?.typeId == "ajay:admin_menu") {
        Adminmenu(player);
   }}); 
   
    function Adminmenu(player) {
    const form = new ActionFormData()
       form.title("§lADMIN MENU")
        form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fBienvenido al menú de administración, seleccione el menú que desee\n       §l§e       ADMIN MENU    ")
        form.button('§lSERRAR\n§r§rHaga clic para cerrar','textures/ui/redX1')
        form.button('§lLOBBY\n§r§rHaga clic o toque','textures/ui/World')
        form.button('§lVanish\n§r§rHaga clic o toque','textures/ui/multiplayer_glyph')
        form.button('§lUnVanish\n§r§rHaga clic o toque','textures/ui/multiplayer_glyph_color')
        form.button('§lTiempo\n§r§rHaga clic o toque','textures/ui/icon_summer')
        form.button('§lClima\n§r§rHaga clic o toque','textures/ui/cloud_only_storage')
        form.button('§lTeleport\n§r§rHaga clic o toque','textures/ui/icon_recipe_nature')
        form.button('§lESPULSAR A UN JUGADOR\n§r§rHaga clic o toque','textures/ui/icon_deals')
        form.button('§lMENSAJES FALSOS\n§r§rHaga clic o toque','textures/ui/controller_glyph_color')
        form.button('§lANUNCIO PARA LOS JUGADORES\n§r§rHaga clic o toque','textures/ui/icon_new')
        form.button('§lGamemode\n§r§rHaga clic o toque','textures/ui/icon_book_writable')
        form.button('§lchat\n§r§rHaga clic o toque','textures/ui/mute_off')
        form.button('§lEffect Menu\n§r§rHaga clic o toque','textures/ui/icon_potion')
        form.button('§lAdmin Tools\n§r§rHaga clic o toque','textures/ui/hammer_l')
        form.button('§lGive gift\n§r§rHaga clic o toque','textures/ui/icon_cake')
        form.button('§lBORRAR IN VENTARIO\n§r§rHaga clic o toque','textures/ui/trash')
          form.show(player).then(result => {
      if (result.selection === 0) {
        player.runCommandAsync(`playsound note.bass @s`)
       }
      if (result.selection === 1) {
        player.runCommandAsync(`tp @s 0 100 0`) //MODIFICA LAS CORDDENADAS  DEL LOBBY 
        player.runCommandAsync(`playsound mob.endermen.portal @s`)
        player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§aTe has teletransportado al lobby"}]}`);
      }
      if (result.selection === 2) {
        player.runCommandAsync(`effect @s invisibility 99999 9 true`)
        player.runCommandAsync(`effect @s night_vision 9999999 9 true`)
        player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§aAhora eres invisible para otros jugadores, no sostengas nada"}]}`)
        player.runCommandAsync(`playsound note.harp @s`);
      }
      if (result.selection === 3) {
        player.runCommandAsync(`effect @s clear`)
        player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§c➥ §r§cDesaparecer está desactivado, ahora puedes ser visto por otros jugadores."}]}`)
        player.runCommandAsync(`playsound note.bass @s`);
      }
      if (result.selection === 4) {
      	Timeset(player);
      }
      if (result.selection === 5) {
      	Weather(player);
      }
      if (result.selection === 6) {
      	Teleport(player);
      }
      if (result.selection === 7) {
      	Kick(player);
      }
      if (result.selection === 8) {
      	Sudo(player);
      }
      if (result.selection === 9) {
      	Bc(player);
      }
      if (result.selection === 10) {
      	Gamemode(player);
      }
      if (result.selection === 11) {
      	Chat(player);
      }
      if (result.selection === 12) {
      	Effect(player);
      }
      if (result.selection === 13) {
      	Admin(player);
      }
      if (result.selection === 14) {
      	Gift(player);
      }
      if (result.selection === 15) {
      	Cinv(player);
      }
})}
      
      
  function Timeset(player) {
  const form = new ActionFormData()
    form.title("§lTIME SET")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fBienvenido al menú de administración, seleccione el menú que dese\n       §l§e       ADMIN MENU    ")
    form.button("§lDia\n§rHaz clic para cambiar la hora", "textures/ui/time_2day")
    form.button("§lNoche\n§rHaz clic para cambiar la hora", "textures/ui/time_6midnight")
    form.button("§catrás\n§rhaga clic para volver", "textures/blocks/barrier")
   form.show(player).then(result => {
   	if (result.selection === 0) {
       player.runCommandAsync(`time set day`)
       player.runCommandAsync(`playsound random.pop @s`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§ala hora ha sido cambiada al dia"}]}`);
      }  
      else if (result.selection === 1) {
       player.runCommandAsync(`time set night`)
       player.runCommandAsync(`playsound random.pop @s`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§ael tiempo ha sido cambiado a la noche"}]}`);
      }  
      else if (result.selection === 2) {
       Adminmenu(player);
      }  
})}


  function Weather(player) {
  const form = new ActionFormData()
    form.title("§lClima")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fBienvenido al menú de administración, seleccione el menú que desee\n       §l§e       ADMIN MENU    ")
    form.button("§lClear\n§rHaz clic para cambiar la hora", "textures/ui/weather_clear")
    form.button("§lLluvia\n§rHaz clic para cambiar la hora", "textures/ui/weather_rain")
    form.button("§lTormenta\n§rHaz clic para cambiar la hora", "textures/ui/weather_thunderstorm")
    form.button("§cAtras\n§rhaga clic para volver", "textures/blocks/barrier")
   form.show(player).then(result => {
   	if (result.selection === 0) {
       player.runCommandAsync(`weather clear`)
       player.runCommandAsync(`playsound random.pop @s`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§ael clima ha sido cambiado a despejado"}]}`);
      }  
      else if (result.selection === 1) {
       player.runCommandAsync(`weather rain`)
       player.runCommandAsync(`playsound random.pop @s`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§ael tiempo ha cambiado a lluvia"}]}`);
      }  
      else if (result.selection === 2) {
       player.runCommandAsync(`weather thunder `)
       player.runCommandAsync(`playsound random.pop @s`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§ael clima ha sido cambiado a Tormenta"}]}`);
      }  
      else if (result.selection === 3) {
       Adminmenu(player);
      }  
})}


  function Teleport(player) {
  const form = new ActionFormData()
    form.title("§lTELEPORT")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fBienvenido al menú de administración, seleccione el menú que desee\n       §l§e       ADMIN MENU    ")
    form.button("§lTeletransportarme a jugadores aleatorios\n§rhaz clic para teletransportarte", "textures/ui/icon_steve")
    form.button("§lTPRANDO\n§rhaz clic para teletransportarte", "textures/ui/icon_recipe_nature")
    form.button("§cvolver\n§rhaga clic para volver", "textures/blocks/barrier")
   form.show(player).then(result => {
      if (result.selection === 0) {
        player.runCommandAsync(`tp @s @r`)
        player.runCommandAsync(`playsound mob.endermen.portal @s`)
        player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§aHas sido teletransportado a otro jugador"}]}`);
      }  
      else if (result.selection === 1) {
       player.runCommandAsync(`spreadplayers ~ ~ 1000 5000 @s`)
       player.runCommandAsync(`playsound mob.endermen.portal @s`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§aHas sido teletransportado a una coordenada aleatoria."}]}`);
      }  
      else if (result.selection === 2) {
    	Adminmenu(player);
     }
})}


  function Gamemode(player) {
  const form = new ActionFormData()
    form.title("§lTGAMEMODE")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fBienvenido al menú de administración, seleccione el menú que desee\n       §l§e       ADMIN MENU    ")
    form.button("§lSurvival\n§r§rHaga clic o toque", "textures/items/book_written")
    form.button("§lCreative\n§r§rHaga clic o toque", "textures/items/book_enchanted")
    form.button("§lSpectator\n§r§rHaga clic o toque", "textures/items/book_portfolio")
    form.button("§lAdventure\n§r§rHaga clic o toque", "textures/items/book_writable")
    form.button("§cVOLVER\n§rHaga clic PARA VOLVER", "textures/blocks/barrier")
   form.show(player).then(result => {
      if (result.selection === 0) {
        player.runCommandAsync(`gamemode s @s`)
        player.runCommandAsync(`playsound random.toast @s`)
        player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§aGamemode ha sido cambiado a Survival"}]}`);
      }  
      else if (result.selection === 1) {
       player.runCommandAsync(`gamemode c @s`)
       player.runCommandAsync(`playsound random.toast @s`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§a Gamemode ha sido cambiado a Creative"}]}`);
      }  
      else if (result.selection === 2) {
       player.runCommandAsync(`gamemode spectator @s`)
       player.runCommandAsync(`playsound random.toast @s`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§aGamemode ha sido cambiado a Spectator"}]}`);
      }  
      else if (result.selection === 3) {
       player.runCommandAsync(`gamemode adventure @s`)
       player.runCommandAsync(`playsound random.toast @s`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§aGamemode ha sido cambiado a Adventure"}]}`);
      }  
      else if (result.selection === 4) {
       Adminmenu(player);
      }  
})}


function Chat(player) {
  const form = new ActionFormData()
    form.title("§lCHAT")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fBienvenido al menú de administración, seleccione el menú que desee\n       §l§e       ADMIN MENU    ")
    form.button("§lApagar el chat\n§r§rClick Or Tap", "textures/ui/mute_on")
    form.button("§lActiva el chat\n§r§rClick Or Tap", "textures/ui/mute_off")
    form.button("§cVolver\n§rhaga clic para volver", "textures/blocks/barrier")
   form.show(player).then(result => {
      if (result.selection === 0) {
   	player.runCommandAsync(`ability @a[tag=!admin] mute true`)
       player.runCommandAsync(`playsound note.bass @s`)
       player.runCommandAsync(`tellraw @a {"rawtext":[{"text":"§l§a➥ §r§ael chat ha sido desactivado"}]}`);
      }  
      else if (result.selection === 1) {
   	player.runCommandAsync(`ability @a[tag=!admin] mute false`)
       player.runCommandAsync(`playsound random.toast @s`)
       player.runCommandAsync(`tellraw @a {"rawtext":[{"text":"§l§a➥ §r§ase ha activado el chat"}]}`);
      }  
      else if (result.selection === 2) {
   	Adminmenu(player);
      }  
})}


function Effect(player) {
  const form = new ActionFormData()
    form.title("§lEFFECT MENU")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fBienvenido al menú de administración, seleccione el menú que desee\n       §l§e       ADMIN MENU    ")
    form.button("§lClear Effect\n§rClick Or Tap")
    form.button("§lInvisibility\n§rClick Or Tap", "textures/ui/invisibility_effect")
    form.button("§lStrength\n§rClick Or Tap", "textures/ui/strength_effect")
    form.button("§lSpeed\n§rClick Or Tap", "textures/ui/speed_effect")
    form.button("§lHaste\n§rClick Or Tap", "textures/ui/haste_effect")
    form.button("§lJump Boost\n§rClick Or Tap", "textures/ui/jump_boost_effect")
    form.button("§lResistance\n§rClick Or Tap", "textures/ui/resistance_effect")
    form.button("§lFire Resistance\n§rClick Or Tap", "textures/ui/fire_resistance_effect")
    form.button("§lHealth boost\n§rClick Or Tap", "textures/ui/health_boost_effect")
    form.button("§cBack\n§rclick to Back", "textures/blocks/barrier")
   form.show(player).then(result => {
   	if (result.selection === 0) {
        player.runCommandAsync(`effect @s clear`)
       player.runCommandAsync(`playsound random.toast @s`)
      }  
     else  if (result.selection === 1) {
        player.runCommandAsync(`effect @s invisibility 999999 9 true`)
       player.runCommandAsync(`playsound random.toast @s`)
      }  
      else if (result.selection === 2) {
        player.runCommandAsync(`effect @s strength 999999 10 true`)
       player.runCommandAsync(`playsound random.toast @s`)
      }  
      else if (result.selection === 3) {
        player.runCommandAsync(`effect @s speed 999999 5 true`)
       player.runCommandAsync(`playsound random.toast @s`)
      }  
      if (result.selection === 4) {
        player.runCommandAsync(`effect @s haste 999999 5 true`)
       player.runCommandAsync(`playsound random.toast @s`)
      }  
      if (result.selection === 5) {
        player.runCommandAsync(`effect @s jump_boost 999999 5 true`)
       player.runCommandAsync(`playsound random.toast @s`)
      }  
      if (result.selection === 6) {
        player.runCommandAsync(`effect @s resistance 999999 10 true`)
       player.runCommandAsync(`playsound random.toast @s`)
      }  
      if (result.selection === 7) {
        player.runCommandAsync(`effect @s fire_resistance 999999 9 true`)
       player.runCommandAsync(`playsound random.toast @s`)
      }  
      if (result.selection === 8) {
        player.runCommandAsync(`effect @s health_boost 999999 10 true`)
       player.runCommandAsync(`playsound random.toast @s`)
      }  
      if (result.selection === 9) {
        Adminmenu(player);
      }  
})}


function Admin(player) {
  const form = new ActionFormData()
    form.title("§lADMIN TOOLS")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fBienvenido al menú de administración, seleccione el menú que desee\n       §l§e       ADMIN MENU    ")
    form.button("§lCOMMAND BLOCK\n§r§rHaga clik o toque", "textures/blocks/command_block_back_mipmap")
    form.button("§lSTRUCTURE BLOCK\n§r§rHaga clik o toque", "textures/blocks/structure_block")
    form.button("§lBARRIER\n§r§rHaga clik o toque", "textures/blocks/barrier")
    form.button("§lSTRUCTURE VOID\n§r§rHaga clik o toque", "textures/blocks/structure_void")
    form.button("§lSUMMON NPC\n§r§rHaga clik o toque", "textures/items/egg_npc")
    form.button("§lBORDE ROJO\n§r§rHaga clik o toque", "textures/blocks/border_block")
    form.button("§lDENY\n§r§rHaga clik o toque", "textures/items/deny")
    form.button("§lLIGHT_BLOCK\n§r§rHaga clik o toque", "textures/items/light_block")
    form.button("§cBack\n§r§rHaga cli para volver", "textures/blocks/barrier")
   form.show(player).then(result => {
      if (result.selection === 0) {
        player.runCommandAsync(`give @s command_block`)
        player.runCommandAsync(`playsound note.pling @s`)
        player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§ate han dado un command block"}]}`);
      }  
      else if (result.selection === 1) {
       player.runCommandAsync(`give @s structure_block`)
       player.runCommandAsync(`playsound note.pling @s`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§ate han dado un structure block"}]}`);
      }  
      else if (result.selection === 2) {
       player.runCommandAsync(`give @s barrier`)
       player.runCommandAsync(`playsound note.pling @s`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§ate han dado un barrier"}]}`);
      }  
      else if (result.selection === 3) {
       player.runCommandAsync(`give @s structure_void`)
       player.runCommandAsync(`playsound note.pling @s`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§ate han dado un structure void"}]}`);
      }  
      else if (result.selection === 4) {
       player.runCommandAsync(`give @s spawn_egg 1 51`)
       player.runCommandAsync(`playsound note.pling @s`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§ate han dado un npc"}]}`);
      }  
      else if (result.selection === 5 ) {
       player.runCommandAsync(`give @s border_block`)
       player.runCommandAsync(`playsound note.pling @s`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§ate han dado un border rojo"}]}`);
       }	
      else if (result.selection === 6) {
       player.runCommandAsync(`give @s deny`)
       player.runCommandAsync(`playsound note.pling @s`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§ate han dado un deny"}]}`);
       }
      else if (result.selection === 7) {
   	player.runCommandAsync(`give @s light_block 1 15`)
       player.runCommandAsync(`playsound note.pling @s`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§ate han dado un light_block"}]}`);
       }
      else if (result.selection === 8) {
       Adminmenu(player);
      }  
})}

function New(player) {
  const form = new ActionFormData()
    form.title("§lQué hay de nuevo")
    form.body("§l      --------------------      \n§e                ACTUALIZAR       \n§r§l      --------------------      \n§l§e»» §r§fActualizar la versión 2.2 Compatible con la versión 1.19.50 \nSe agregaron varias características:\n\n§l§e»»§r§f Weather Changer\n§l§e»»§r§f Effect Menu\n§l§ e» »§r§f Configuración de chat\n§l§e»»§r§f Se han añadido algunas recompensas\n§l§e»»§r§ f etc. \n\n§l§e»»§r§f Esta es una función que se ha agregado en esta actualización! \n\n      §l§e        ADMIN MENU    ")
    form.button("§cBack\n§rclick to Back", "textures/blocks/barrier")
   form.show(player).then(result => {
      if (result.selection === 0) {
   	Adminmenu(player);
      }  
})}


function Cinv(player) {
  const form = new ActionFormData()
    form.title("§lInventaryo")
    form.body("§l§e»»§r§f Su inventario se borrará, ¿está seguro de que desea borrar su inventario??")
    form.button("§lAceptar")
    form.button("§lno estoy de acuerdo")
   form.show(player).then(result => {
      if (result.selection === 0) {
   	player.runCommandAsync(`clear @s`)
       player.runCommandAsync(`playsound random.toast @s`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥ §r§aSu inventario ha sido borrado"}]}`);
      }  
      else if (result.selection === 1) {
   	Adminmenu(player);
      }  
})}


function Gift(player) {
  const form = new ActionFormData()
    form.title("§lGIFT")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fBienvenido al menú de administración, seleccione el menú que desee\n       §l§e       ADMIN MENU    ")
    form.button("§l§catrás\n§r§rHaga clic para volver")
    form.button("§lDiamond\n§rHaga clic o toque","textures/items/diamond")
    form.button("§lAiron\n§r§rHaga clic o toque", "textures/items/iron_ingot")
    form.button("§lXp 1 bar\n§r§rHaga clic o toque", "textures/items/experience_bottle")
    form.button("§lMoney 600\n§r§rHaga clic o toque", "textures/ui/MCoin")
   form.show(player).then(result => {
      if (result.selection === 0) {
   	Adminmenu(player);
      }  
      else if (result.selection === 1) {
   	player.runCommandAsync(`give @a diamond 64`)
       player.runCommandAsync(`playsound random.levelup @a`)
       player.runCommandAsync(`tellraw @a {"rawtext":[{"text":"§l§a➥ §r§arecibes un regalo"}]}`);
      }  
      else if (result.selection === 2) {
   	player.runCommandAsync(`give @a iron_ingot 5`)
       player.runCommandAsync(`playsound random.levelup @a`)
       player.runCommandAsync(`tellraw @a {"rawtext":[{"text":"§l§a➥ §r§arecibes un regalo"}]}`);
      }  
      else if (result.selection === 3) {
   	player.runCommandAsync(`xp 1l @a`)
       player.runCommandAsync(`playsound random.levelup @a`)
       player.runCommandAsync(`tellraw @a {"rawtext":[{"text":"§l§a➥ §r§arecibes un regalo"}]}`);
      }  
      else if (result.selection === 4) {
   	player.runCommandAsync(`scoreboard players add @a money 600`)
       player.runCommandAsync(`playsound random.levelup @a`)
       player.runCommandAsync(`tellraw @a {"rawtext":[{"text":"§l§a➥ §r§arecibes un regalo"}]}`);
      }  
})}


function Info(player) {
  const form = new ActionFormData()
    form.title("§lADDON iNFO")
    form.body("§l      --------------------      \n§e             ADMIN MENU       \n§r§l      --------------------      \n§r§e»» §r§fBienvenido al menú de administración, seleccione el menú que desee\n       §l§e       ADMIN MENU    ")
    form.button("§catrás\n§r§rclick to Back")
    form.button("§lQue hay de nuevo ?\n§r§rClick Or Tap", "textures/blocks/bookshelf")
    form.button("§lCreador de complementos\n§r§rClick Or Tap", "textures/ui/compass")
   form.show(player).then(result => {
      if (result.selection === 0) {
        Adminmenu(player);
      }  
      else if (result.selection === 1) {
       New(player);
      }  
      else if (result.selection === 2) {
       player.runCommandAsync(`playsound random.toast@a`)
       player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§l§a➥§r§a Hecho por Eduard gamer"}]}`);
      }  
})}


  function Sudo(player) {
  const modal = new ModalFormData()
    .title("§lMENSAJE")
    .textField("§l      --------------------      \n§e       MENSAJE A UN JUGADOR       \n§r§l      --------------------      \n§r§e»» §r§fBroma a otros con mensajes falsos\n       §l§e  mensaje a un jugador   \n§r§fNombre del jugador", "Introduce el nombre del jugador")
    .textField("message", "Enter message")
        modal.show(player).then(result => {
            if (result.formValues[1] !== "") {
                player.runCommandAsync(`tellraw @a {"rawtext":[{"text":"<${result.formValues[0]}§r§f> ${result.formValues[1]}"}]}`)
           }
})}
          
 
   function Bc(player) {
  const modal = new ModalFormData()
    .title("§lMENSAJE ATODOS LOS JUGADORES")
    .textField("§l      --------------------      \n§e        MENSAJE PARA TODOS       \n§r§l      --------------------      \n§r§e»» §r§fESCRIBE UN MENSAJE PARA TODOS\n       §l§e       TRANSMISIÓN    \n§r§fBc message", "Enter message")
        modal.show(player).then(result => {
            if (result.formValues[0] !== "") {
                player.runCommandAsync(`tellraw @a {"rawtext":[{"text":"§l§aSERVER §r:§e ${result.formValues[0]}"}]}`)
                player.runCommandAsync(`playsound random.toast @s`)
           }
})}
       

function Kick(player) {
  const modal = new ModalFormData()
    .title("§lESPULSAR")
    .textField("§l      --------------------      \n§e       Espulsar a un jugador      \n§r§l      --------------------      \n§r§e»» §r§fdeshazte de las personas molestas\n\n§r§e»» §r§fSolo funciona en realm y servidor, y no puedes patearte a ti mismo\n\n       §l§e       KICK PLAYER    \n§r§fNombre", "Ingrese su nombre")
    .textField("razón", "Ingrese el motivo")
        modal.show(player).then(result => {
            if (result.formValues[0] !== "") {
                player.runCommandAsync(`kick ${result.formValues[0]} ${result.formValues[1]}`)
                player.runCommandAsync(`playsound random.levelup @s`)
           }
})}
           
