const Lang = imports.lang;
const PopupMenu = imports.ui.popupMenu;
const St = imports.gi.St;

const TrainItem = new Lang.Class({
    Name: 'TrainItem',
    Extends: PopupMenu.PopupBaseMenuItem,

    _init: function() {
        //this.parent(params);

        this.label = new St.Label({ text: 'Start Training' });

        this.actor.label_actor = this.label;
        this.actor.add(this.label, { expand: true });

        //let hbox = new St.BoxLayout({ x_align: St.Align.END });

        /*if (this._extension.hasPrefs) {
            let settingsIcon = new St.Icon({ icon_name: 'emblem-system-symbolic',
                style_class: 'popup-menu-icon popup-menu-icon-extensions-settings '});

            let settingsButton = new St.Button({ child: settingsIcon});
            //settingsButton.add_style_class_name('abc');

            settingsButton.connect('clicked', Lang.bind(this, function() {
                Util.spawn(["gnome-shell-extension-prefs", uuid]);
                this._getTopMenu().close()
            }));
            hbox.add_child(settingsButton);
        }*/

        //let statusBin = new St.Bin();
        //hbox.add_child(statusBin);

        //this._switch = new PopupMenu.Switch(this._extension.state == ExtensionSystem.ExtensionState.ENABLED);

        //if(ExtensionUtils.isOutOfDate(this._extension))
            //this.setSensitive(false)

        //statusBin.child = this._switch.actor;

        //this.actor.add(hbox, { x_align: St.Align.END });
    }

    /*activate: function(event) {
        if (this._switch.actor.mapped)
            this.toggle();

        if (event.type() == Clutter.EventType.KEY_PRESS &&
            event.get_key_symbol() == Clutter.KEY_space)
            return;

        this.parent(event);
    },

    toggle: function() {
        this._switch.toggle();

        if(this._extension.state == ExtensionSystem.ExtensionState.ENABLED)
            ExtensionSystem.disableExtension(this._extension.uuid)
        else
            ExtensionSystem.enableExtension(this._extension.uuid)
    }*/
});