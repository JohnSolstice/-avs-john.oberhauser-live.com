
const St = imports.gi.St;
const Main = imports.ui.main;
const Lang = imports.lang;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;
const Gio = imports.gi.Gio;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const Lib = Me.imports.convenience;
const ScrollablePopupMenu = Me.imports.scrollablePopupMenu.ScrollablePopupMenu;
const PopupExtensionItem = Me.imports.popupExtensionItem.PopupExtensionItem;
const TrainItem = Me.imports.trainItem;

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

        this.actor.connect('button-press-event', Lang.bind(this, function() {
            this._refresh();
        }));

        Main.panel.addToStatusArea('extensions', this);

        //this.menu.trainSection.add((new PopupMenu.PopupSeparatorMenuItem()).actor);

        let trainButton = new PopupMenu.PopupMenuItem(_("Train Keyword"));

        trainButton.connect('activate', Lang.bind(this, function(object, event) {

        }));

        this.menu.trainSection.add(trainButton.actor);

        let trainItem = new TrainItem();
        this.menu.addMenuItem(trainItem);

        this._refresh();
    },

    _refresh: function() {
        /*this.menu.removeAll();
        let uuids = Object.keys(ExtensionUtils.extensions);

        uuids.sort(function(a, b) {
            a = ExtensionUtils.extensions[a].metadata.name;
            b = ExtensionUtils.extensions[b].metadata.name;

            return a < b ? -1 : (a > b ? 1 : 0);
        });

        uuids.forEach(Lang.bind(this, function(uuid) {
            let item = new PopupExtensionItem(uuid);
            this.menu.addMenuItem(item);
        }));*/
        return true;
    }
});

function enable() {
    superManager = new SuperManager();
}

function disable() {
    superManager.destroy();
    superManager = null;
}
