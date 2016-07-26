
const St = imports.gi.St;
const Main = imports.ui.main;
const Lang = imports.lang;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const Lib = Me.imports.convenience;
const ScrollablePopupMenu = Me.imports.scrollablePopupMenu.ScrollablePopupMenu;

let superManager;

const SuperManager = new Lang.Class({
    Name: 'SuperManager',
    Extends: PanelMenu.Button,

    _init: function () {
        PanelMenu.Button.prototype._init.call(this, St.Align.START, 'superManager', true);

        this.popupMenuItem = new ScrollablePopupMenu(this.actor, St.Align.START, St.Side.TOP);

        this.setMenu(this.popupMenuItem);

        let hbox = new St.BoxLayout({style_class: 'panel-status-menu-box' });
        let icon = new St.Icon({gicon: Lib.TopBarIcon, icon_name: 'button-symbolic', style_class: 'system-status-icon'});
        hbox.add_child(icon);

        this.actor.add_actor(hbox);
        this.actor.add_style_class_name('panel-status-button');

        Main.panel.addToStatusArea('extensions', this);

        let trainButton = new PopupMenu.PopupMenuItem(_("Train Keyword"));

        trainButton.connect('activate', Lang.bind(this, function(object, event) {

        }));

        this.menu.trainSection.add(trainButton.actor);

        let trainItem = new PopupMenu.PopupMenuItem('Start Training');
        trainItem.connect('activate', Lang.bind(this, function(object, event){

        }));
        this.menu.addMenuItem(trainItem);
    }
});

function enable() {
    superManager = new SuperManager();
}

function disable() {
    superManager.destroy();
    superManager = null;
}
