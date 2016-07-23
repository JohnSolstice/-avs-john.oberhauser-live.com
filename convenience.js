const Gio = imports.gi.Gio;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const TopBarIcon = new Gio.FileIcon({
    file: Gio.File.new_for_path(Me.dir.get_child(
        'images/default_icon.svg').get_path())
});

const TopBarIconSelect = new Gio.FileIcon({
    file: Gio.File.new_for_path(Me.dir.get_child(
        'images/default_icon_selected.svg').get_path())
});