
const St = imports.gi.St;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const Lang = imports.lang;
const PanelMenu = imports.ui.panelMenu;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const Lib = Me.imports.convenience;

let text, button;

/*function _hideHello() {
    Main.uiGroup.remove_actor(text);
    text = null;
}

function _showHello() {
    if (!text) {
        text = new St.Label({ style_class: 'helloworld-label', text: "Hello!" });
        Main.uiGroup.add_actor(text);
    }

    text.opacity = 255;

    let monitor = Main.layoutManager.primaryMonitor;

    text.set_position(monitor.x + Math.floor(monitor.width / 2 - text.width / 2),
                      monitor.y + Math.floor(monitor.height / 2 - text.height / 2));

    Tweener.addTween(text,
                     { opacity: 0,
                       time: 2,
                       transition: 'easeOutQuad',
                       onComplete: _hideHello });
}

function init() {
    button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: true,
                          x_fill: true,
                          y_fill: false,
                          track_hover: true });
    let icon = new St.Icon({ gicon: Lib.TopBarIcon,
                             icon_size: 16 });

    button.set_child(icon);
    button.connect('button-press-event', _showHello);
}*/

const AVS_Indicator = new Lang.Class({
    Name: 'AVS.Indicator',
    Extends: PanelMenu.Button,

    _init: function () {
        this.parent(null, 'AVS-indicator');
    },

    _showMenu: function(){

    },

    _enable: function() {


    },

    _disable: function() {

    }
});

function _showOptions(){

}

function init(){
    button = new St.Bin({ style_class: 'panel-button',
        reactive: true,
        can_focus: true,
        x_fill: true,
        y_fill: false,
        track_hover: true });
    let icon = new St.Icon({ gicon: Lib.TopBarIcon,
        icon_size: 16 });

    button.set_child(icon);
    button.connect('button-press-event', _showHello);
}

function enable() {
    /*if (indicator === null || indicator === undefined) {
        indicator = new AVS_Indicator();
        //Main.panel.addToStatusArea('AVS-indicator', indicator);
    }*/

    Main.panel._rightBox.insert_child_at_index(button, 0);
}

function disable() {
    /*if (indicator !== null) {
        indicator._disable();
        indicator = null;
    }*/

    Main.panel._rightBox.remove_child(button);
}
